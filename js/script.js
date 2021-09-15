        $(function() {
          $('.top-nav .btn-mobile').on('click', function() {
             $('nav').addClass('on'); 
          });
        
          $('.btn-close').on('click', function() {
              $('nav').removeClass('on');
          });
        });