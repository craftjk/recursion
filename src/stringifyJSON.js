// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here  
  var result = '';

  var dictionary = {
    true: "true",
    false: "false",
    null: "null",
    undefined: "undefined"
  }

  var recurse = function(item) {
    if (dictionary[item]) {
      result += dictionary[item];
    } else if (item.constructor === Array) {
      result += "[";
      for (var i = 0 ; i < item.length ; i++) {
        recurse(item[i]);
        if (item.length > i + 1) {
          result += ",";
        }
      }
      result += "]";
    } else if (item.constructor === Object) {
      result += "{";
      for (var i = 0 ; i < Object.keys(item).length ; i++) {
        if (Object.keys(item)[i] === "null") {
          result += "\"null\"";
        } else if (item[Object.keys(item)[i]] !== null && item[Object.keys(item)[i]].constructor === Function) {
          break;
        } else {
          recurse(Object.keys(item)[i]);
        }
        result += ":";
        recurse(item[Object.keys(item)[i]]);
        if (Object.keys(item).length > i + 1) {
          result += ",";
        }
      }
      result += "}";
    } else if (item.constructor == String) {
      result += "\"";
      result += item; 
      result += "\"";
    } else if (item.constructor == Function) {
      result += "asdfasdfasd";
    } else if (item.toString().constructor == String) {
      result += item.toString();
    }
  }

  recurse(obj);
  return result;
};
