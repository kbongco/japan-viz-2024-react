export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-l font-bold">
          <h1>Japan visualizer app</h1>
        </div>
        <ul className="flex space-x-4">
          <li className="hover:text-gray-400 cursor-pointer">About</li>
          <li className="hover:text-gray-400 cursor-pointer">Overall Spending</li>
          <li className="hover:text-gray-400 cursor-pointer">More Details</li>
          <li className="hover:text-gray-400 cursor-pointer">Trip Report on Medium</li>
        </ul>
      </div>
    </nav>
  );
}
