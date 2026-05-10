(function () {
  const container = document.getElementById('orbitIcons');
  if (!container) return;

  const icons = Array.from(container.querySelectorAll('.orbit-icon'));
  const total = icons.length;
  const radius = 140;
  let angle = 0;
  const speed = 0.3;

  function place(angleDeg) {
    icons.forEach((icon, i) => {
      const theta = ((angleDeg + (360 / total) * i) * Math.PI) / 180;
      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta);
      // Removed rotate() — icons stay upright as they orbit
      icon.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      icon.style.left = '50%';
      icon.style.top  = '50%';
    });
  }

  function animate() {
    angle = (angle + speed) % 360;
    place(angle);
    requestAnimationFrame(animate);
  }

  animate();
})();

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });