import {Unity, useUnityContext} from "react-unity-webgl";

function Game3(){
    const { unityProvider,sendMessage } = useUnityContext({
        loaderUrl: "/Build3.loader.js",
        dataUrl: "/Build3.data.unityweb",
        frameworkUrl: "/Build3.framework.js.unityweb",
        codeUrl: "/Build3.wasm.unityweb",
    });
    function handleClickSpawn()
    {
        sendMessage("QuestManage", "ReloadScene")
    }

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Kahoot</h1>
                <Unity unityProvider={unityProvider} className="centered-unity3" />
                <button onClick={handleClickSpawn}>Reiniciar</button>
            </div>
        </div>
    );
}
export default Game3