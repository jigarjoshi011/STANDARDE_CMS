import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const WaveAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !containerRef.current ||
      dimensions.width === 0
    )
      return;

    const SEPARATION = 15;
    const AMOUNTX = Math.round(dimensions.width / SEPARATION);
    const AMOUNTY = Math.round(dimensions.height / SEPARATION);

    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let particles: THREE.Points;
    let positions: Float32Array;
    let count = 0;

    const init = (): void => {
      camera = new THREE.PerspectiveCamera(
        45,
        dimensions.width / dimensions.height,
        1,
        10000
      );
      camera.position.z = 500;

      scene = new THREE.Scene();

      const numParticles = AMOUNTX * AMOUNTY;

      const geometry = new THREE.BufferGeometry();
      positions = new Float32Array(numParticles * 3);

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          positions[i + 1] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
          positions[i + 2] = 0;
          i += 3;
        }
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const material = new THREE.PointsMaterial({
        color: 0x888888,
        size: 1.5,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: false,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(dimensions.width, dimensions.height);
      renderer.setClearColor(0x000000, 1);
      containerRef?.current?.appendChild(renderer.domElement);
    };

    const animate = (): void => {
      requestAnimationFrame(animate);
      render();
    };

    const render = (): void => {
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          positions[i + 2] =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50;
          i += 3;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.018;
    };

    init();
    animate();

    const handleResize = () => {
      camera.aspect = dimensions.width / dimensions.height;
      camera.updateProjectionMatrix();
      renderer.setSize(dimensions.width, dimensions.height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [dimensions]);

  return (
    <div
      ref={containerRef}
      className="waves"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        // bottom: 380,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default WaveAnimation;
