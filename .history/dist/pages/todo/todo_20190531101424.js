window.addEventListener('resize', windowResize);

function windowResize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    adjustLayout('.todoApp-content');
}
windowResize();
function adjustLayout(e) {
    var header = document.querySelector('.header');
    var bcc = document.querySelector(e);
    bcc.style.minHeight =  (window.innerHeight - (header.offsetHeight * 2)) + "px";
	}



// var removeSvg = '<svg fill="#d8d8d8" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
// var completeSvg = '<svg fill="#25b99a" height="22" viewBox="0 0 25 25" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>';
var removeIcon = `<div class="tiny material-icons">delete_forever</div>`;
var completeIcon = `<div class="tiny material-icons">done</div>`;


//User clicked on add button
//If there is any text inside the id="item" fild add that text to the todo list
document.getElementById('add').addEventListener('click', function() {

	var value = document.getElementById('item').value;
	//empty string is always false
	if (value) {
		addItemTodo(value);
		document.getElementById('item').value = '';
	}
	
});
function removeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;

	parent.removeChild(item);
	
}

function completeItem() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	var id = parent.id;
	// check if the item should be added to the completed list or to re-added to the todo list
	var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

	// if(id == 'todo') {
	// 	// It's a todo item to be completed
	// } else {
	// 	// It's a completed item to be "re-done";
	// }

	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);

}

// Add a new item to the todo list
function addItemTodo(text) {

	var list, item, buttons, remove, complete;

	list = document.getElementById('todo');

	item = document.createElement('li');
	item.className = "item-list";
	item.innerText = text;

	buttons = document.createElement('div');
	buttons.classList.add('buttons');

	remove = document.createElement('div');
	remove.classList.add('remove');
	remove.innerHTML = removeIcon;

	// add click event for removing item
	remove.addEventListener('click', removeItem);

	complete = document.createElement('div');
	complete.classList.add('complete');
	complete.innerHTML = completeIcon;

	complete.addEventListener('click', completeItem);

	buttons.appendChild(remove);
	buttons.appendChild(complete);
	item.appendChild(buttons);

	list.insertBefore(item, list.childNodes[0]);
}

 
 