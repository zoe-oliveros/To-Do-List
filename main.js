$(document).ready(function(){

	$('button').click(function newToDo() {
		var inputItem = document.getElementById("newList").value;
		var i = document.createTextNode(inputItem);
		var newItem = document.createElement("li");
		newItem.appendChild(i);
		document.getElementById("toDoList").appendChild(newItem);
	});

	var list = document.querySelector('ul');
	list.addEventListener('click', function(ev) {
  	if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  	}
	}, false);


	$('ul').on('dblclick', 'li', function(){
    	$(this).hide("quick");
    });


});
