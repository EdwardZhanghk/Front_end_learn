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
  if(i=== people.length-1){admitted.textContent +=(people[i]+'.');}
  else{admitted.textContent +=(people[i]+', ') ;}

}
}
/*关于把最后结尾的逗号换成句号也可采用下面的方法
通过截取字符串长度-2的新字符串，加上句号，最后在赋值给原来的字符串
refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';
*/