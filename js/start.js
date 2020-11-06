let lineTop = document.querySelector('.line-top');
let lineCenter = document.querySelector('.line-center');
let lineBottom = document.querySelector('.line-bottom');
let lateralMenu = document.querySelector('.lateral-menu');
let menuExame = document.querySelector('.exames');
let menuPrevencao = document.querySelector('.prevencao');
let menuNasf = document.querySelector('.nasf');
let subExame = document.querySelector('.sub-exame');
let subPrevencao = document.querySelector('.sub-prevencao');
let subNasf = document.querySelector('.sub-nasf');

function start(){

  lineTop.style.top = '0px';
  lineTop.style.transform = 'rotate(0deg)';
  lineTop.style.transition = '400ms';

  lineCenter.style.opacity = 1;
  lineCenter.style.transition = '1500ms';

  lineBottom.style.bottom = '0px';
  lineBottom.style.transform = 'rotate(0deg)';
  lineBottom.style.transition = '400ms';

  lateralMenu.style.left = '-400px';
  lateralMenu.style.transition = '400ms';

  menuExame.style.transform = 'rotate(0deg)';
  menuPrevencao.style.transform = 'rotate(0deg)';
  menuNasf.style.transform = 'rotate(0deg)';

  subExame.style.display = 'none';
  subPrevencao.style.display = 'none';
  subNasf.style.display = 'none';
}

