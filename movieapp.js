/*
var btns = document.querySelectorAll('#movie-list .delete');
btns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		var li = e.target.parentElement;

		li.parentNode.removeChild(li)
	});
});
*/

/*
  --> Event Bubbling and using it in deleting the movies
      We will assign event to the ul tag and when the delete button is clicked,
      event will bubble up to the ul and then we can delete the li associated to the event
  --> We are using the concept of Event Bubbling to attach the event to UI.
      Advantage: attaching the event3 to <ul> will help us delete any new <li> attached to movie-list
  --> Now this is good because if we have to add another movie to the list, we can delete it unlike the previous event listener.
*/

//this will delete new added movie also
var list = document.querySelector('#movie-list ul');

list.addEventListener('click', function (e) {
	if (e.target.className === 'delete') { // We want to get where did the click happened, so className
		// console.log(e.target);
		var li = e.target.parentElement; // this is the li which is the parent to the delete and we want to delete it.
		//console.log(li);
		// li.parentNode.removeChild(li);
		list.removeChild(li);

	}
})


//add movie
var addForm = document.forms['add-movie'];
addForm.addEventListener('submit', function (e) {

	e.preventDefault(); //to prevent submit default refresh
	var value = addForm.querySelector('input[type="text"]').value;
	var li = document.createElement('li');
	var movieName = document.createElement('span');
	var deletebtn = document.createElement('span');
	li.appendChild(movieName);
	li.appendChild(deletebtn);
	list.appendChild(li);
	movieName.textContent = value;
	deletebtn.textContent = 'delete';
	movieName.classList.add('name');
	deletebtn.classList.add('delete');
})



//hide the list
var hideform = document.querySelector('#add-movie #hide');
hideform.addEventListener('click', function (e) {
	if (list.style.display == "none") {
		list.style.display = "block";
	} else {
		list.style.display = "none";
	}
})


//visibilty will hide the list but space is still there
/*if(list.style.visibility =="hidden"){
    list.style.visibility ="visible";
}
    else {
        list.style.visibility= "hidden";
    }*/



/*
//Search an item
var searchForm=document.forms['search-movies'];
   var val=searchForm.querySelector('input[type="text"]').value;
   // var searchItem=document.querySelector('#movie-list .name');
    filter=val.value.toUpperCase();
    searchForm.forEach(function (text) {
        text.addEventListener('onsearch',function(e) {
    if((text.toUpperCase().indexOf(filter) > -1)
        {
            list.style.display='block';
        }
        else {
            list.style.display="none";
        }
        
    })
})
*/
