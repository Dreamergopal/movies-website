import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-yellow-400 border-dashed rounded-full animate-spin"></div>
        <p className="text-yellow-400 text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}

export default Loading;
