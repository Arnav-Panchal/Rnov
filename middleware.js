import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname, searchParams } = request.nextUrl;
    const secret = process.env.BLOG_ADMIN_SECRET;

    // Paths that require admin protection
    const isAdminPath = pathname.startsWith('/blogs/admin');
    const isBlogMutationApi = pathname.startsWith('/api/blogs') && (request.method === 'POST' || request.method === 'PUT' || request.method === 'DELETE');

    if (isAdminPath || isBlogMutationApi) {
        const sessionCookie = request.cookies.get('admin_session')?.value;
        const urlSecret = searchParams.get('secret');

        // 1. Check if authorized
        const isAuthorized = sessionCookie === secret || urlSecret === secret;

        if (!isAuthorized) {
            // Hide the route by returning 404
            return new NextResponse(null, { status: 404 });
        }

        // 2. If authorized via URL secret, set the cookie and redirect to clean URL (only for page requests)
        if (urlSecret === secret && isAdminPath) {
            const response = NextResponse.redirect(new URL(pathname, request.url));
            response.cookies.set('admin_session', secret, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 7, // 1 week
                path: '/',
            });
            return response;
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/blogs/admin/:path*', '/api/blogs/:path*'],
};
