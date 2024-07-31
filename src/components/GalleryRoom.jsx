import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

const GalleryRoom = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xaaaaaa);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 2, 5); // Initial camera position

    // Renderer setup
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // PointerLock Controls
    const controls = new PointerLockControls(camera, mount);
    scene.add(controls.getObject());

    // Load the texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('./models/attempt3.png');
    texture.flipY = false;
    

    // Load the gallery room model
    const loader = new GLTFLoader();
    loader.load('./models/galleryModel.glb', (gltf) => {
      const model = gltf.scene;

      // Apply the texture to the model's material
      model.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({ map: texture });
        }
      });

      scene.add(model);
    }, undefined, (error) => {
      console.error(error);
    });

    // Handle resizing
    const handleResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Movement controls
    let moveForward = false;
    let moveBackward = false;
    let moveLeft = false;
    let moveRight = false;
    const velocity = new THREE.Vector3();
    const direction = new THREE.Vector3();
    const moveSpeed = 5.0; // Adjust this value to change speed

    const onKeyDown = (event) => {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = true;
          break;
        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = true;
          break;
        case 'ArrowDown':
        case 'KeyS':
          moveBackward = true;
          break;
        case 'ArrowRight':
        case 'KeyD':
          moveRight = true;
          break;
      }
    };

    const onKeyUp = (event) => {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = false;
          break;
        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = false;
          break;
        case 'ArrowDown':
        case 'KeyS':
          moveBackward = false;
          break;
        case 'ArrowRight':
        case 'KeyD':
          moveRight = false;
          break;
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    const animate = () => {
      requestAnimationFrame(animate);

      if (controls.isLocked === true) {
        velocity.x -= velocity.x * 10.0 * 0.1;
        velocity.z -= velocity.z * 10.0 * 0.1;

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize();

        if (moveForward || moveBackward) velocity.z -= direction.z * moveSpeed * 0.1;
        if (moveLeft || moveRight) velocity.x -= direction.x * moveSpeed * 0.1;

        controls.moveRight(-velocity.x * 0.1);
        controls.moveForward(-velocity.z * 0.1);
      }

      renderer.render(scene, camera);
    };

    animate();

    mount.addEventListener('click', () => {
      controls.lock();
    });

    return () => {
      mount.removeChild(renderer.domElement);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};

export default GalleryRoom;