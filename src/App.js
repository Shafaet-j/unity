import logo from './logo.svg';
import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/test.loader.js",
    dataUrl: "/webgl.data",
    frameworkUrl: "/build.framework.js",
    codeUrl: "/build.wasm",
  });
  return (
    <div className="App">
      <h1>hey</h1>
      <Unity width={600} height={400} unityProvider={unityProvider} />
    </div>
  );
}

export default App;
