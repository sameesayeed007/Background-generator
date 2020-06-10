var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listitems = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function listitemsLength() {
	return listitems.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	// creating delete buttons
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	li.appendChild(btn);
	btn.onclick = deleteItem;
	


}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//Going through all the elements in the unordered list
ul.onclick=function(event){


	var target=event.target; // target contains the individual elements in the list 
    target.classList.toggle("done");


}
//Creating delete buttons beside the existing list items
function createDeleteButtons(){
	var i ;
	for( i=0;i<listitemsLength();i++){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	listitems[i].appendChild(btn);
	btn.onclick = deleteItem;
}

}

function deleteItem(event){
   event.target.parentNode.remove();
}






button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

createDeleteButtons();

