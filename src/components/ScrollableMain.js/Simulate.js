import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Simulate = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "../../../public/Build/spcaeApp.loader.js",
    dataUrl: "../../../public/Build/spcaeApp.data.unityweb",
    frameworkUrl: "../../../public/Build/spcaeApp.framework.js.unityweb",
    codeUrl: "../../../public/Build/spcaeApp.wasm.unityweb",
  });

  return (
    <div className="bg-red-300">
      <Unity unityProvider={unityProvider} />
    </div>
  );
};

export default Simulate;
