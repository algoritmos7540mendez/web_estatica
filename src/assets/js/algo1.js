  
  function scrollToDownload() {
    if ($('.section-download').length != 0) {
      $("html, body").animate({
        scrollTop: $('.section-download').offset().top
      }, 1000);
    }
  }

  function scrollToInfo() {
    if ($('#info').length != 0) {
      $("html, body").animate({
        scrollTop: $('#info').offset().top
      }, 1000);
    }
  }

  function scrollToMaterial() {
    if ($('#material').length != 0) {
      $("html, body").animate({
        scrollTop: $('#material').offset().top
      }, 1000);
    }
  }

  function scrollToCronograma() {
    if ($('#cronograma').length != 0) {
      $("html, body").animate({
        scrollTop: $('#cronograma').offset().top
      }, 1000);
    }
  }

  function scrollToDocentes() {
    if ($('#docentes').length != 0) {
      $("html, body").animate({
        scrollTop: $('#docentes').offset().top
      }, 1000);
    }
  }
  function scrollToEvaluaciones() {
    if ($('#evaluaciones').length != 0) {
      $("html, body").animate({
        scrollTop: $('#evaluaciones').offset().top
      }, 1000);
    }
  }
