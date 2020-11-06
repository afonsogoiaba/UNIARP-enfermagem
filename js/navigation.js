function openNav(){

  if(lineCenter.style.opacity == 1){
    
    lineTop.style.top = '10px';
    lineTop.style.transform = 'rotate(140deg)';
    lineTop.style.transition = '400ms';

    lineCenter.style.opacity = 0;
    lineCenter.style.transition = '200ms';
      
    lineBottom.style.bottom = '8px';
    lineBottom.style.transform = 'rotate(40deg)';
    lineBottom.style.transition = '400ms';

    lateralMenu.style.left = '0px';
    lateralMenu.style.transition = '400ms';
  }

  else{
      
    start();
  }
}