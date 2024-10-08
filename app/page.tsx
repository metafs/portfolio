"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const Home: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // 背景を青空に設定
    scene.background = new THREE.Color(0x87ceeb); // 青空の色

    // 環境光を追加
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // スポットライトを追加（オブジェクトの後ろから照らす）
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-10, 10, 10); // スポットライトの位置を調整
    spotLight.angle = Math.PI / 4; // 照射角度
    spotLight.penumbra = 0.1; // ぼかしの度合い
    scene.add(spotLight);

    // 地面の追加
    const planeGeometry = new THREE.PlaneGeometry(100, 100);
    const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // おもちゃのようなオブジェクトを追加
    const toyCount = 10;
    const toys: THREE.Mesh[] = [];

    for (let i = 0; i < toyCount; i++) {
      const geometry = new THREE.BoxGeometry(1, 1, 1); // おもちゃの形
      const material = new THREE.MeshStandardMaterial({ color: Math.random() * 0xffffff });
      const toy = new THREE.Mesh(geometry, material);
      toy.position.set((Math.random() - 0.5) * 50, 0.5, (Math.random() - 0.5) * 50);
      toys.push(toy);
      scene.add(toy);
    }

    camera.position.z = 15;

    const animate = () => {
      requestAnimationFrame(animate);

      // おもちゃが上下に動く
      toys.forEach((toy, index) => {
        toy.position.y = Math.sin(Date.now() * 0.002 + index) * 2 + 1; // 縦に動く
        toy.rotation.y += 0.01; // 回転する
      });

      renderer.render(scene, camera);
    };

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onMouseClick = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(toys);

      if (intersects.length > 0) {
        const clickedToy = intersects[0].object as THREE.Mesh;
        clickedToy.material.color.set(Math.random() * 0xffffff); // クリックしたオブジェクトの色を変更
      }
    };

    window.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("click", onMouseClick, false);
    animate();

    return () => {
      window.removeEventListener("click", onMouseClick);
      window.removeEventListener("mousemove", onMouseMove);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} />;
};

export default Home;
