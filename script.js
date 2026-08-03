const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const items = document.querySelectorAll('.reveal');
if (reduceMotion || !('IntersectionObserver' in window)) items.forEach(item => item.classList.add('visible'));
else {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  items.forEach(item => observer.observe(item));
}
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('details').forEach(detail => detail.addEventListener('toggle', () => {
  if (detail.open) document.querySelectorAll('details[open]').forEach(other => { if (other !== detail) other.open = false; });
}));