import ProjectsPage from '@/components/Projects'
import React from 'react'

const page = () => {
  const customFontStyle = {
    fontFamily: 'Britannic Bold',
};
  return (
    <div>
      <div>
        <h1 className="text-center text-6xl py-5  text-teal-500 md-4" style={customFontStyle}> Projects </h1>
      </div>
      <div>
        {/* <ProjectsPage/> */}
      </div>
    </div>

  )
}

export default page