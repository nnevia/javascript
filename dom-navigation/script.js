let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('listItem', listItem);


// val = list.childNodes; // NodeList 반환, line break 포함
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;
// NodeType

//1 - Element
//2 - Attribute
//3 - Text node
//8 - Comment node
//9 - Document itself
//10 - Doctype

// children element nodes 반환
val = list.children; //HTML Collection 반환 (line break X)
val = list.children[1];
list.children[1].textContent = 'Hi';

// First child
val = list.firstChild;

console.log('val', val)