




/* 
  $(document).ready(function(){
    $("button").click(function(){
    
        $.getJSON('https://raw.githubusercontent.com/owakester/getajax/main/json.json', function(data){
            var display = `User_ID: ${data.id}<br>
                           ID: ${data.nombre}<br>
                           Title: ${data.precio}<br>
                           Completion_Status: ${data.imagen}`
            $(".display").html(display);
          });
        


    });
  }); */


  //se utiliza $.ajax(), a la cual se le pasa un objeto {}, con la información
  $(document).ready(function(){
    $("button").click(function(){
      $.post("https://raw.githubusercontent.com/owakester/getajax/main/json.json",
      {
        name: "Donald Duck",
        city: "Duckburg"
      },
      function(data,status){
        alert("Data: " + data + "\nStatus: " + status);
      });
    });
  });