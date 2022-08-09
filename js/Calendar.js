var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;
let day=31;
  // ADD CONDITIONAL HERE
 switch (choice){
 case'April':
 case'June':
 case'September':
 case'November':
     day= 30;
     break;
 case'February':
     day= 28;
     break;     
 }
  createCalendar(day, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');
