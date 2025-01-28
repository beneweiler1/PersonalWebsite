"use client";
import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { createNoise4D } from "simplex-noise";
import * as THREE from "three";
import { Sky } from "@react-three/drei";

/** Utility: random hex color for demonstration. */
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

interface InteractiveBackgroundProps {
  noise?: number;   // XY coefficient
  height?: number;  // Z displacement
}

export default function InteractiveBackground({
  noise = 30,
  height = 10,
}: InteractiveBackgroundProps) {
  // Example swirling lights in random colors
  const [light1Color, setLight1Color] = useState("#0E09DC");
  const [light2Color, setLight2Color] = useState("#1CD1E1");
  const [light3Color, setLight3Color] = useState("#18C02C");
  const [light4Color, setLight4Color] = useState("#ee3bcf");

  const randomizeLightColors = () => {
    setLight1Color(getRandomColor());
    setLight2Color(getRandomColor());
    setLight3Color(getRandomColor());
    setLight4Color(getRandomColor());
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Optional button to randomize the 4 swirling lights */}
      <Canvas
        camera={{ position: [0, 0, 60], fov: 75 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        {/* A subtle ambient light so it's never fully black */}
        <ambientLight intensity={0.2} />
        {/* A single white point light for general fill (optional) */}
        <pointLight position={[10, 10, 10]} intensity={0.5} />

        {/* The swirling noise plane + 4 swirling colored lights */}
        <NoiseScene
          xyCoef={noise}
          zCoef={height}
          light1Color={light1Color}
          light2Color={light2Color}
          light3Color={light3Color}
          light4Color={light4Color}
        />

        {/* Drei Sky with a "sun" in the background */}
        <Sky sunPosition={[100, 10, 100]} />
      </Canvas>
    </div>
  );
}

function NoiseScene({
  xyCoef,
  zCoef,
  light1Color,
  light2Color,
  light3Color,
  light4Color,
}: {
  xyCoef: number;
  zCoef: number;
  light1Color: string;
  light2Color: string;
  light3Color: string;
  light4Color: string;
}) {
  const planeRef = useRef<THREE.Mesh>(null);
  const noise4D = useMemo(() => createNoise4D(), []);

  // Animate the plane geometry (displacement in the Z axis)
  useFrame((state) => {
    const plane = planeRef.current;
    if (!plane) return;

    const geo = plane.geometry as THREE.BufferGeometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const time = Date.now() * 0.0002;

    // R3F mouse coords: range = [-1..1]
    const mx = state.mouse.x;
    const my = state.mouse.y;

    for (let i = 0; i < posAttr.array.length; i += 3) {
      const x = posAttr.array[i];
      const y = posAttr.array[i + 1];
      posAttr.array[i + 2] = noise4D(x / xyCoef, y / xyCoef, time, mx + my) * zCoef;
    }
    posAttr.needsUpdate = true;
  });

  // Spin 4 colored lights around the scene
  useFrame((state) => {
    const time = Date.now() * 0.001;
    const d = 50;
    state.scene.children.forEach((obj) => {
      switch (obj.name) {
        case "light1":
          obj.position.x = Math.sin(time * 0.1) * d;
          obj.position.z = Math.cos(time * 0.2) * d;
          break;
        case "light2":
          obj.position.x = Math.cos(time * 0.3) * d;
          obj.position.z = Math.sin(time * 0.4) * d;
          break;
        case "light3":
          obj.position.x = Math.sin(time * 0.5) * d;
          obj.position.z = Math.sin(time * 0.6) * d;
          break;
        case "light4":
          obj.position.x = Math.sin(time * 0.7) * d;
          obj.position.z = Math.cos(time * 0.8) * d;
          break;
      }
    });
  });

  return (
    <>
      {/* Four swirling lights (each with a name so we can track them) */}
      <pointLight
        name="light1"
        color={light1Color}
        intensity={2}
        distance={200}
        position={[0, 10, 30]}
      />
      {/* If you make this plane black (#000000), you won't see colored lights as clearly.
          White or gray is better if you want the lights' colors to pop. */}
      <mesh ref={planeRef} rotation={[-Math.PI / 2 - 0.2, 0, 0]} position={[0, -25, 0]}>
        <planeGeometry args={[200, 200, 80, 80]} />
        <meshLambertMaterial
          color="#00008B" 
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}
