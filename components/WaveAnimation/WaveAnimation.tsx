import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface WaveAnimationProps {
  width: number;
  height: number;
}

const WaveAnimation: React.FC<WaveAnimationProps> = ({ width, height }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !containerRef.current ||
      width === 0 ||
      height === 0
    )
      return;

    const SEPARATION = 10;
    const AMOUNTX = Math.round(width / SEPARATION);
    const AMOUNTY = Math.round(height / SEPARATION);

    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let particles: THREE.Points;
    let positions: Float32Array;
    let count = 0;

    const init = (): void => {
      camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
      camera.position.z = 300;

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
        size: 1,
        blending: THREE.AdditiveBlending,
        transparent: true,
        sizeAttenuation: false,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
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
            Math.sin((ix + count) * 0.1) * 100 +
            Math.sin((iy + count) * 0.1) * 100;
          i += 3;
        }
      }
      particles.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.05;
    };

    init();
    animate();

    return () => {
      if (containerRef.current && renderer.domElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [width, height]);

  return (
    <div
      ref={containerRef}
      className="waves"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
      }}
    />
  );
};

export default WaveAnimation;
