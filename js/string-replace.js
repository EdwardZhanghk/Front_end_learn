var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // write your code just below here
  let low=input.toLowerCase();
  //替换字符串内容要用replace，不能直接根据索引替换内容
  low=low.replace(low[0],low[0].toUpperCase());
  var result = low;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
