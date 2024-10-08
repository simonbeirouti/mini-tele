import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import WebApp from "@twa-dev/sdk";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<div className="flex flex-row justify-between w-32">
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} alt="React logo" />
				</a>
			</div>
			<div className="mt-2 space-y-2 text-center">
				<h1 className="text-xl">Vite + React</h1>
				<div>
					<button className="bg-black px-4 py-2 text-white rounded-md" onClick={() => setCount((count) => count + 1)}>
						count is {count}
					</button>
				</div>
				<div>
          <button
            className="border px-4 py-2 rounded-md"
						onClick={() =>
							WebApp.showAlert(
								`Hello World! Current count is ${count}`
							)
						}
					>
						Show Alert
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
