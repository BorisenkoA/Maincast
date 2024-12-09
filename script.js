const caseContainer = document.querySelector('.case');

  caseContainer.addEventListener('wheel', (event) => {

    event.preventDefault();

    caseContainer.scrollLeft += event.deltaY;
  });

const videoCaseContainer = document.querySelector('.video-case');

  videoCaseContainer.addEventListener('wheel', (event) => {

    event.preventDefault();

    videoCaseContainer.scrollLeft += event.deltaY;
  });


  const burgerMenuMob = document.getElementById('menu');
  const burgerToggleMob = document.querySelector('.burger-menu-wrap-mobile');
  
  burgerToggleMob.addEventListener('click', function() {
      if (burgerToggleMob.style.display === 'flex') {
        burgerToggleMob.style.display = 'none';
      } else {
        burgerToggleMob.style.display = 'flex';
      }
  });

  const burgerMenuTab = document.getElementById('menu');
  const burgerToggleTab = document.querySelector('.burger-menu-wrap-tab');
  
  burgerToggleTab.addEventListener('click', function() {
      if (burgerToggleTab.style.display === 'flex') {
        burgerToggleTab.style.display = 'none';
      } else {
        burgerToggleTab.style.display = 'flex';
      }
  });


const cardboxContainer = document.querySelector('.card-box');

cardboxContainer.addEventListener('wheel', (event) => {

  event.preventDefault();

  cardboxContainer.scrollLeft += event.deltaY;
});
