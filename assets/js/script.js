const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function AddTask(){
	if(inputBox.value === ''){
		alert("You must write somthing!");
	}else{
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		// span tag adding
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span)
	}

	inputBox.value = "";
	saveData();
}

listContainer.addEventListener('click', (e) => {
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData();
	}else if (e.target.tagName === "SPAN") {
		e.target.parentElement.remove();
		saveData();
	}
}, false);


// save Data after reload page data not deleted!

function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask();