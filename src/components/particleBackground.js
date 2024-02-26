import Partcles from "react-tsparticles";
import particlesConfig from "./config/particles-config";

export default function ParticleBackground()
{
    console.log("working")
    return(
        <div>
            <Partcles params={particlesConfig}>
            </Partcles>
        </div>
    )
}