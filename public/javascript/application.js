$(document).on('click', '#go-search', function() {

      findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})

    });
       $(document).on('keyup', '#search-term', function() {

      findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})

    });

$(document).ready(function(){
  $("input").keydown(function(){
    $("input").css("background-color","Chartreuse");
  });
  $("input").keyup(function(){
    $("input").css("background-color","white");
  });
});
   




$(document).on('click', '#search-results img', function() {
window.location.hash="add-text";




$(document).on('click', '#ChangePhoto', function() {

 window.location.hash="select-image"; 

     
 });
    });







        $(document).on('click', '#search-results img', function() {

      var url = $(this).data('url');

      $("#workspace img").remove();

      var img = $("<img>").attr('src', url);

      $("#workspace").append(img);

    });
            $(document).on('input', '#text', function() {

      $("#caption").text($(this).val());

    });
            $(document).on('focus', '#text', function() {

      $("#caption").text($(this).val());

    })


                $(document).on('change', '#left', function() {    

      $("#caption").css("left", $(this).val() + 'px');

    });


                    $(document).on('change', '#top', function() {

      $("#caption").css("top", $(this).val() + 'px');

    });

    $(document).on('change', '#width', function() {

      $("#caption").css("width", $(this).val() + 'px');

    });

    $(document).on('change', '#size', function() {

      $("#caption").css("font-size", $(this).val() + 'px');

    });

    $(document).on('change', '#colour', function() {

      $("#caption").css("color", $(this).val());

    });
    $(document).on('change', '#colour2', function() {

      $("#workspace").css("border-color", $(this).val());
 
});
    $(document).on('change', '#align', function() {  

      $("#caption").css("text-align", $(this).val());

    });

    


$('input[type="text"]').each(function(){

  this.value = $(this).attr('title');
  $(this).addClass('text');

  $(this).focus(function(){
    if(this.value == $(this).attr('title')) {
      this.value = '';
      $(this).removeClass('text');
    }
  });

  $(this).blur(function(){
    if(this.value === '') {
      this.value = $(this).attr('title');
      $(this).addClass('text');
    }
  });
});