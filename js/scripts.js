var list = document.getElementById("list");
var add = document.getElementById("addElem");
var li_element = document.getElementsByTagName("li");
add.addEventListener("click", function() {
	var element = document.createElement("li");
	element.innerHTML = "item "+ li_element.length;
	list.appendChild(element);
});