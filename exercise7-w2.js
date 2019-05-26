//soal 1
var rows1 = 5;
for (i = 1; i <= rows1; i++) {
  console.log('*')
}

//soal 2

var rows2 = 5;
var bintang = '';
for (i = 0; i < rows2; i++) {
  for (j = 0; j < rows2; j++) {
    bintang = bintang + '*';
  }
  console.log(bintang);
  bintang = '';
}

//soal 3
var rows2 = 5;
for (i = rows2; i >= 1; i--) {
 var bintang = '';
for (j = i; j <= rows2; j++) {
  bintang += '*';
}
console.log(bintang);
}
/*var bintang = ''
var rows2 = 5;
  for (i = 0; i < rows2; i++) {
    bintang += '*'
     console.log(bintang) 
  }  */