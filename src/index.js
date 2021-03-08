module.exports = function check(str, bracketsConfig) {
  let value;
  for (let k = 0; str.length != 0 && k < 100; k++) {
  for (let i = 0; i < bracketsConfig.length; i++) {
   value = str.split(bracketsConfig[i].join(''));
   value = value.join('');
    if (value.length < str.length) {
      str = value;
    }
    }
  }
  if (str.length == 0){
    return true;
  }
    else {
      return false;
    }
  }
  
