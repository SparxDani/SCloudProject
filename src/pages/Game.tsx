import { Unity, useUnityContext } from "react-unity-webgl";
function Game(){
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Build.loader.js",
        dataUrl: "/Build.data.unityweb",
        frameworkUrl: "/Build.framework.js.unityweb",
        codeUrl: "/Build.wasm.unityweb",
    });

    function handleClickMovePlatform(){
        sendMessage("Plataformas", "PausarMovimiento", )
    }

    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">Bounce the Star</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
                    <button onClick={handleClickMovePlatform}>Stop Platforms</button>
                </div>
            </div>
        </>
    );
}
export default Game