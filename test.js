var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

for(var i = 0;i< people.length;i++){
if(people[i]==='Phil'||people[i]==='Lola'){
  if(people[i]==='Lola'){refused.textContent += people[i]+'.'; }
  else{refused.textContent += people[i]+', ';}
}
else{
  if(i=== people.length-2){admitted.textContent +=(people[i]+'.');}
  else{admitted.textContent +=(people[i]+', ') ;}

}
}