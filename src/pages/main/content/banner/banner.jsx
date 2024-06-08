import React, {
  Suspense,
  lazy,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import "./__banner.scss";
import ButtonAnnimate from "../../../../components/ui/button/ButtonAnnimate";
import { ArrowForward } from "@mui/icons-material";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Bureau } from "../../components/model/Bureau";
import { OrbitControls } from "@react-three/drei";
import Particules from "../../../../components/Particules";
import gsap from "gsap";
function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [1 + state.mouse.x / 6, 1 + state.mouse.y / 6, 2],
      0.2,
      delta
    );
  });
}

const Banner = () => {
  function annimation(params) {
    gsap.fromTo(
      ".title-annimation-banner",
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        delay: 2,
        x: 0,
        stagger: 0.2,
      }
    );
  }
  useEffect(() => annimation(), []);
  return (
    <div className="banner-main-containner">
      <div className="second-containner">
        <div className="title-banner">
          <h1 className="title-annimation-banner">
            Ne Vous Inquieter Plus On est la Pour Vous Aider
          </h1>
          <p className="title-annimation-banner">
            Regulariser votre contrat de travail , votre entreprise aupres de
            nous
          </p>

          <div className="action-containner title-annimation-banner">
            <ButtonAnnimate
              title={"Avoir l'app"}
              component={<ArrowForward />}
            />

            <h5>Plus</h5>
          </div>
        </div>
        <div className="model-container">
          <Canvas
            shadows
            camera={{ position: [1, 1, 2], fov: 50 }}
            gl={{ preserveDrawingBuffer: true }}
            eventSource={document.getElementById("root")}
            eventPrefix="client"
          >
            <directionalLight
              position={[-5, 5, 5]}
              castShadow
              shadow-mapSize={1024}
              intensity={10}
            />
            <ambientLight intensity={0.5} />

            <group position={[0, -0.3, 0]}>
              <Suspense fallback={null}>
                <Bureau />
              </Suspense>
            </group>
            <mesh
              rotation={[-0.5 * Math.PI, 0, 0]}
              position={[0, -0.5, 0]}
              receiveShadow
            >
              <planeGeometry args={[10, 10, 1, 1]} />
              <shadowMaterial transparent opacity={0.2} />
            </mesh>
            <Rig />
          </Canvas>
        </div>
      </div>
    </div>
  );
};
export default Banner;
