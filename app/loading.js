import React from 'react';
import SLoading from './giphy.gif'; // Assuming 'giphy.gif' is in the same directory as this component

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={SLoading} alt="" className="" />
    </div>
  );
}

export default Loading;
