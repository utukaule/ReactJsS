import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen" style={{ background: color }}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-9 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow=lg bg-white px-3 py-2 rounded-3xl ">
          <button
            onClick={()=>setColor('red')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "red" }}
          >
            red
          </button>
          <button
          onClick={()=>setColor('green')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "green" }}
          >
            red
          </button>
          <button
          onClick={()=>setColor('blue')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "blue" }}
          >
            red
          </button>
          <button
          onClick={()=>setColor('black')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ background: "black" }}
          >
            red
          </button>

        </div>
      </div>
    </>
  );
}

export default App;
