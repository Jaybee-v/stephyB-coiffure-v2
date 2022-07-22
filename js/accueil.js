const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');
const l4 = document.querySelector('.l4');
const l5 = document.querySelector('.l5');

window.addEventListener('load', () => {
  const TL = gsap.timeline({ paused: true });
  TL.staggerFrom(
    titreSpans,
    2,
    { top: -100, opacity: 0, ease: 'power2.out' },
    0.3
  );
  TL.staggerFrom(btns, 1.5, { opacity: 0, ease: 'power2.out' }, 0.3, '-=1');
  TL.from(l1, 1, { width: 0, ease: 'power2.out' }, '-=2');
  TL.from(l2, 1, { width: 0, ease: 'power2.out' }, '-=2');
  const activLogo = TL.from(
    logo,
    2,
    { transform: 'scale(0)', ease: 'power1.out' },
    '-=3'
  );
  TL.from(l3, 1, { width: 0, ease: 'power2.out' }, '-=2');
  TL.from(l4, 1, { width: 0, ease: 'power2.out' }, '-=2');
  TL.staggerFrom(medias, 1, { right: -200, ease: 'power2.out' }, 0.3, '-=3');
  TL.from(l5, 1, { width: 0, ease: 'power2.out' }, '-=2');

  TL.play();
});
