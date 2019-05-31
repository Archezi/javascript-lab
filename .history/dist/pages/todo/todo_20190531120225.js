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



var removeIcon = `<div class="tiny material-icons">delete_forever</div>`;
var completeIcon = `<div class="tiny material-icons">done</div>`;


//User clicked on add button
//If there is any text inside the id="item" field add that text to the todo list
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

 
 