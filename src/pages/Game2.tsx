import { Unity, useUnityContext } from "react-unity-webgl";

function Game2() {
    const { unityProvider, sendMessage} = useUnityContext({
        loaderUrl: "/Build2.loader.js",
        dataUrl: "/Build2.data.unityweb",
        frameworkUrl: "/Build2.framework.js.unityweb",
        codeUrl: "/Build2.wasm.unityweb",
    });

    function reloadScene(){
        sendMessage("SceneHlper", "ReloadScene", )
    }

    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">Match the Cards</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity2" />
                    <button onClick={reloadScene}>Restart Game</button>

                </div>
            </div>
        </>
    );
}

export default Game2