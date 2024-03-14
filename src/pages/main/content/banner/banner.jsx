import React, { Suspense, lazy, useRef } from "react";
import "./__banner.scss";
import ButtonAnnimate from "../../../../components/ui/button/ButtonAnnimate";
import { ArrowForward } from "@mui/icons-material";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Bureau } from "../../components/model/Bureau";
import { OrbitControls } from "@react-three/drei";
import Particules from "../../../../components/Particules";
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
  return (
    <div className="banner-main-containner">
      <div className="second-containner">
        <div className="title-banner">
          <h1>UnLeash the Full potential of AI</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            maiores, possimus debitis commodi esse laboriosam ullam labore culpa
            doloremque at nesciunt reprehenderit molestias quia tempore!
            Assumenda explicabo facere mollitia asperiores. Assumenda debitis
            nisi aperiam odit animi optio recusandae asperiores ad.
          </p>

          <div className="action-containner">
            <ButtonAnnimate
              title={"Get the App"}
              component={<ArrowForward />}
            />

            <h5>More</h5>
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
