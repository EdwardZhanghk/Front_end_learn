var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;
switch(choice){
    case'white':
        update('white','black');
    break;
    case'black':
    update('black','white');
    break;
    case'purple':
        update('purple','white');
    break;
    case'yellow':
        update('yellow','darkgray');
    break;
    case'psychedelic':
        update('lime','purple');
    break;
}
  // ADD SWITCH STATEMENT
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}