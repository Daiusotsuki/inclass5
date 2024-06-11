// ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemLast.appendChild(newTextLast);
document.getElementsByTagName('ul')[0].appendChild(newItemLast);

// ADD NEW ITEM START OF LIST
var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('kale');
newItemFirst.appendChild(newTextFirst);
var list = document.getElementsByTagName('ul')[0];
list.insertBefore(newItemFirst, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.getElementsByTagName('li');
for (var i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.getElementsByTagName('h2')[0];
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + ' (' + totalItems + ')';
heading.firstChild.nodeValue = newHeading;

