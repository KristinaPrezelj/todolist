$(document).ready(function(){

    $('form').on('submit', function(){
  console.log("bok"); 
        var item = $('form input');
        var todo = {item: item.val()};
  
        $.ajax({
          type: 'POST',
          url: '/todo',
          data: todo,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
  
        return false;
  
    });
  
    $('li').on('click', function(){
        var item = $(this)[0].outerText // TU SAM ZAMJENIO - PROBAJ CONSOLE LOGGAT $(this) pa vidi sta ima unutra
        console.log(item);
        $.ajax({
          type: 'DELETE',
          url: '/todo/:' + item, // TU TI JE FALILA DVOTOCKA
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });
  
  });