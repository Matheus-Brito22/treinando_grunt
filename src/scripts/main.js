$(document).ready(function(){

   $('#form').on('submit', function(e){
      e.preventDefault();

   }) 

   $('#btn').click(function(){
   
    const tarefa = $("#tarefa").val();
      if (tarefa !== "") {
         
      const novaTarefa = $(`<li>
      <a href="#" class="link" onclick="markVisited(this)">${tarefa}</a>
      </li>`);
      novaTarefa.appendTo("#lista"); 

      
      $("#tarefa").val("");

      }

   });
   

});

function markVisited(link) {
   link.classList.add("visited");
 }