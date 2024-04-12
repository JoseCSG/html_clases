import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className="logo size-32 animate-pulse"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react size-32 animate-spin-slow transition-all"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold mt-12">Vite + React</h1>
      <div>
        <button
          className="rounded-lg bg-gray-950 mt-16 text-lg px-5 py-3 hover:scale-110 transition-all duration-200"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="font-thin text-md mt-10">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-10 text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
