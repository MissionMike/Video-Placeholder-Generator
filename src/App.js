import React from "react";
import "./App.css";

function App() {
	return (
		<div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
			<div className="ml-6 pt-1">
				<h1 className="mb-4 text-2xl text-blue-700 leading-tight">
					Video Placeholder Generator
				</h1>
				<form class="block bg-white w-full shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div class="mb-4 w-full">
				  <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
					Video URL (YouTube or Vimeo)
				  </label>
				  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="video-url" type="text" placeholder="https://www.youtube.com/watch?v=dckX1V0Fi3c" />
				</div>
				</form>
				<p className="text-base text-gray-700 leading-normal">Building apps together</p>
			</div>
		</div>
	);
}

export default App;
