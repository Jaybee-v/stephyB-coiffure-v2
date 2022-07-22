// Changement de page

function changementPage() {
  let changePage = document.querySelectorAll('#pages .navbar.menu ul a');
  for (let page of changePage) {
    page.addEventListener('click', function () {
      let num = this.getAttribute('data-page');
      document.querySelector('#pages > div.active').classList.remove('active');
      document.querySelector('#page' + num).classList.add('active');

      document
        .querySelector('#pages .navbar.menu a.active')
        .classList.remove('active');
      this.classList.add('active');
    });
  }
}

const galeriePage0 = document.querySelectorAll('.image-galerie');
const presentation = document.querySelector('.ma-presentation');

window.addEventListener('load', () => {
  const TL = gsap.timeline({ paused: true });

  TL.from(galeriePage0, 2, { width: 0, ease: 'power2.out' }, 0.3);
  TL.from(
    presentation,
    2,
    { transform: 'scale(0)', ease: 'power1.out' },
    '-=1'
  );

  TL.play();
});

window.addEventListener('click', () => {
  const TL = gsap.timeline({ paused: true });

  TL.from(galeriePage0, 2, { width: 0, ease: 'power2.out' }, 0.5);

  TL.play();
});

changementPage();
