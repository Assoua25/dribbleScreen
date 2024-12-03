'use client'


export default function Colorthemecomponent() {
  return (
    <div className="mt-5">
      <h2>Color Theme</h2>
      <div className="flex space-x-4 mt-4">
        <div className="w-6 h-6 bg-blue-600 rounded-lg"></div>
        <div className="w-6 h-6 bg-blue-400 rounded-lg"></div>
        <div className="w-6 h-6 bg-black rounded-lg"></div>
        <div className="w-6 h-6 bg-white rounded-lg border border-blue-500"></div>
      </div>

    </div>
  );
}
