import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

export function getOrSetDeviceId() {
  const cookieStore = cookies();
  let deviceId = cookieStore.get('deviceId')?.value;

  if (deviceId) return deviceId;

  const newId = uuidv4();
  // Set cookie (must be done in NextResponse)
  cookies().set('deviceId', newId, {
    path: '/',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365, // 1 year
  });

    console.log(`cookie working: ${newId}`);

  return newId;
}
