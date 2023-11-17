import { Unity, useUnityContext } from "react-unity-webgl";
function Game(){
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Build.loader.js",
        dataUrl: "/Build.data.unityweb",
        frameworkUrl: "/Build.framework.js.unityweb",
        codeUrl: "/Build.wasm.unityweb",
    });

    function handleClickSpawnPlatform(){
        sendMessage("Spawner", "SpawnAndMovePlatform")
    }

    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">Mini juego</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
                    <button onClick={handleClickSpawnPlatform}>Spawn Enemies</button>
                </div>
            </div>
        </>
    );
}
export default Game