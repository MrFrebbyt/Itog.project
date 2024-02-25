document.addEventListener('mousemove', e => {
  Object.assign(document.documentElement,{
      style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
      --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
      `
  })
})
$('[href^="#"]').on('click', function(){
    let href = $(this).attr('href'), elem = $(document).find(href);
    if(elem.length > 0) {
      let posY = elem.eq(0).offset().top;
      $('html, body').animate({
        scrollTop: posY
      }, 2500);
    }
    return false;
  });