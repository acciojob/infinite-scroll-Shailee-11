//your code here!
let list = document.querySelector('#myList');

// add 10 list items by default
for (let i = 0; i < 10; i++) {
  let listItem = document.createElement('li');
  listItem.textContent = `List item ${i + 1}`;
  list.appendChild(listItem);
}

// add 2 more list items when the user reaches the end of the list
list.addEventListener('scroll', function() {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    for (let i = 0; i < 2; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `List item ${list.children.length + 1}`;
      list.appendChild(listItem);
    }
  }
});


