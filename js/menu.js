function liberaSubMenuExame(){
  
  if(menuExame.style.transform == 'rotate(0deg)'){

    menuExame.style.transform = 'rotate(180deg)';
    menuExame.style.transition = '200ms';

    subExame.style.display = 'block';
    subExame.style.transition = '200ms';
  }

  else{

    menuExame.style.transform = 'rotate(0deg)';
    menuExame.style.transition = '200ms';

    subExame.style.display = 'none';
    subExame.style.transition = '200ms';
  }
};

function liberaSubMenuPrevencao(){
  
  if(menuPrevencao.style.transform == 'rotate(0deg)'){

    menuPrevencao.style.transform = 'rotate(180deg)';
    menuPrevencao.style.transition = '200ms';

    subPrevencao.style.display = 'block';
    subPrevencao.style.transition = '200ms';
  }

  else{
    menuPrevencao.style.transform = 'rotate(0deg)';
    menuPrevencao.style.transition = '200ms';

    subPrevencao.style.display = 'none';
    subPrevencao.style.transition = '200ms';
    
  }
}


function liberaSubMenuNasf(){
  
  if(menuNasf.style.transform == 'rotate(0deg)'){

    menuNasf.style.transform = 'rotate(180deg)';
    menuNasf.style.transition = '200ms';

    subNasf.style.display = 'block';
    subNasf.style.transition = '200ms';
  }

  else{
    menuNasf.style.transform = 'rotate(0deg)';
    menuNasf.style.transition = '200ms';

    subNasf.style.display = 'none';
    subNasf.style.transition = '200ms';
    
  }
}

