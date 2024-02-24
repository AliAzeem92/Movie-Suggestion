import React from "react";

function Loader() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="flex items-center justify-center">
        <div className="rounded-full border-t-4 border-b-4 border-blue-500 h-12 w-12 animate-spin"></div>
      </div>
    </div>
  );
}

export default Loader;
