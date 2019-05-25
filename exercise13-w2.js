function xo(str) {
    // you can only write your code here!
    var countX=0
    var countO=0
  for (var i = str.length-1; i>=0; i--) {
if(str[i]=="x"){
    countX++
}
else{
    countO++
}
  }
  if(countO==countX){
      return true
  }else{
      return false
  }
}
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true