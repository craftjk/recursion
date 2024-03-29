// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var output = [];

  var recurse = function(node) {
    if (node.classList.contains(className)) {
      output.push(node);
    }

    for (var i = 0 ; i < node.children.length ; i++) {
      recurse(node.children.item(i));
    }
  }

  recurse(document.body);
  return output;
};