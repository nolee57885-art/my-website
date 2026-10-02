// WhatsApp booking link (all "Book" buttons use this)
const WA = 'https://wa.me/918329706442?text=' +
  encodeURIComponent("Hi Dr Prerna, I'd like to book an appointment at Body and Mind Physiotherapy.");
document.querySelectorAll('.wa-link').forEach(a => a.href = WA);

// Testimonials: replace these with real ones
const TESTIMONIALS = [
  { text: 'Testimonial 1 goes here.', who: 'Patient name or initials' },
  { text: 'Testimonial 2 goes here.', who: 'Patient name or initials' },
  { text: 'Testimonial 3 goes here.', who: 'Patient name or initials' }
];

// Hero slider
const slides = [...document.querySelectorAll('.slide')];
const dots = document.querySelector('.dots');
let cur = 0, timer;
slides.forEach((_, i) => {
  const b = document.createElement('button');
  b.setAttribute('aria-label', 'Show slide ' + (i + 1));
  b.onclick = () => { show(i); restart(); };
  dots.appendChild(b);
});
function show(i) {
  cur = (i + slides.length) % slides.length;
  slides.forEach((s, n) => s.classList.toggle('on', n === cur));
  [...dots.children].forEach((d, n) => d.classList.toggle('on', n === cur));
}
function restart() {
  clearInterval(timer);
  if (!matchMedia('(prefers-reduced-motion:reduce)').matches) timer = setInterval(() => show(cur + 1), 6000);
}
show(0); restart();

// Testimonial carousel
let t = 0;
const q = document.querySelector('.car blockquote'), c = document.querySelector('.car cite');
function showT(i) {
  t = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
  q.textContent = '\u201C' + TESTIMONIALS[t].text + '\u201D';
  c.textContent = TESTIMONIALS[t].who;
}
document.querySelectorAll('.car-ctl button').forEach(b => b.onclick = () => showT(t + +b.dataset.d));
showT(0);
setInterval(() => showT(t + 1), 8000);

// Mobile menu
const burger = document.querySelector('.burger'), menu = document.querySelector('.nav nav');
burger.onclick = () => burger.setAttribute('aria-expanded', menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

document.getElementById('yr').textContent = new Date().getFullYear();
