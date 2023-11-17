import { Unity, useUnityContext } from "react-unity-webgl";

function Game2() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/Build2.loader.js",
        dataUrl: "/Build2.data.unityweb",
        frameworkUrl: "/Build2.framework.js.unityweb",
        codeUrl: "/Build2.wasm.unityweb",
    });



    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">Bounce the Star</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                </div>
            </div>
        </>
    );
}

export default Game2