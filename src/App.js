import { useState } from "react";
import "@google/model-viewer/dist/model-viewer";

export default function App() {
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  // const [call, setcall] = useState(false);



  return (
    <div className="App" style={{ height: "100%" }}>
      {/* <button onClick={() => r()}>Click</button> */}
      <model-viewer
        style={{ width: "100%", height: "97%" }}
        src="/scene.gltf"
        ios-src=""
        poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
        alt="A 3D model of an astronaut"
        shadow-intensity="0.9"
        camera-controls
        camera-orbit={`${x}deg ${y}deg 2m`}
        auto-rotate
      ></model-viewer>
    </div>
  );
}