$(document).ready(function() {
  $('#add').click(function() {

    var userInput = $('input[name=shoppinglistitem]').val();

    $('.list').append('<li>' + '<input class="checked-item" type="checkbox">' + userInput + "</li>");
    return false;
  });
  
  
     $(document).on("click",".checked-item",function(){
    
    $(this).parent().toggleClass( "it-is-checked");
  });
    
    
     $('.checked').on('click', function(e){
      e.preventDefault(); 
      $('.it-is-checked').remove();
  });
     
     $('.reset-list').on('click', function(e) {
       e.preventDefault();
       $('li').remove();
     }) 
});