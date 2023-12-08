import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            style={{backgroundColor:"red"}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >RED</button>
          <button
            onClick={() => setColor("blue")}
            style={{backgroundColor:"blue"}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >BLUE</button>
          <button
            onClick={() => setColor("yellow")}
            style={{backgroundColor:"yellow"}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >YELLOW</button>
          <button
            onClick={() => setColor("gray")}
            style={{backgroundColor:"gray"}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >GRAY</button>
          <button
            onClick={() => setColor("green")}
            style={{backgroundColor:"green"}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >GREEN</button>
          <button
            onClick={() => setColor("black")}
            style={{backgroundColor:"black"}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >BLACK</button>
          <button
            onClick={() => setColor("orange")}
            style={{backgroundColor:"orange"}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >ORANGE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
