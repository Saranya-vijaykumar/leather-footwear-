// Vernon & Vale 3D Parallax & Particle Engine — Dedicated Luxury Footwear Collections Motion

document.addEventListener('DOMContentLoaded', () => {
  initHero3DExperience();
  initFootwearCard3DParallax();
});

/* 1. Full Hero 3D Footwear Parallax & Three.js Particle Sparkles */
function initHero3DExperience() {
  const container = document.getElementById('canvas-3d');
  const shoeWrapper = document.querySelector('.interactive-shoe-wrapper');
  const shoeImgContainer = document.querySelector('.shoe-image-container');

  // Three.js WebGL Particle Sparkles
  if (container && typeof THREE !== 'undefined') {
    const scene = new THREE.Scene();
    const width = container.clientWidth || 450;
    const height = container.clientHeight || 450;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Gold & Cognac Particle Dust
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 6;     // X
      positions[i + 1] = (Math.random() - 0.5) * 6; // Y
      positions[i + 2] = (Math.random() - 0.5) * 6; // Z
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xD4AF37, // Luminous Italian Gold
      size: 0.055,
      transparent: true,
      opacity: 0.85
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Animation Loop
    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      
      // Orbit particle field slowly
      particles.rotation.y = elapsed * 0.05;
      particles.rotation.x = elapsed * 0.025;

      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      if (!container.clientHeight) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });
  }

    // 3D Parallax Mouse & Touch Tilt for the Hero Footwear
    const handleTilt = (clientX, clientY) => {
      const rect = shoeWrapper.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;

      const maxRotateX = 20;
      const maxRotateY = 20;
      const rotateX = -y * maxRotateX;
      const rotateY = x * maxRotateY;

      shoeImgContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const resetTilt = () => {
      shoeImgContainer.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      shoeImgContainer.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    };

    shoeWrapper.addEventListener('mousemove', (e) => {
      handleTilt(e.clientX, e.clientY);
    });

    shoeWrapper.addEventListener('mouseleave', resetTilt);

    shoeWrapper.addEventListener('mouseenter', () => {
      shoeImgContainer.style.transition = 'transform 0.08s ease-out';
    });

    // Touch event support for mobile
    shoeWrapper.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        shoeImgContainer.style.transition = 'transform 0.08s ease-out';
        handleTilt(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    shoeWrapper.addEventListener('touchend', resetTilt);
    shoeWrapper.addEventListener('touchcancel', resetTilt);
  }
}

/* 2. Interactive 3D Perspective Tilt on Footwear Collection Cards */
function initFootwearCard3DParallax() {
  const cards = document.querySelectorAll('.grid .glass-panel.hover-lift');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotX = -y * 8;
      const rotY = x * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      card.style.transition = 'transform 0.4s ease-out';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'transform 0.05s ease-out';
    });
  });
}
