//soal 1
console.log('LOOPING PERTAMA');
var number = '';
var i = 0;
while (i < 20) {
  console.log((i+2) + ' - I Love coding ');i+=2;
}
console.log('LOOPING KEDUA');
var number = '';
var i = 20;
while (i > 0) {
  console.log(i + ' - I will become fullstack developer');i-=2;
}

//soal 2
console.log('LOOPING PERTAMA');
var number = '';
var i ;
for (i = 1; i <= 20;i++) {
  console.log(i + ' - I Love Coding');
}
console.log('LOOPING KEDUA');
var number = '';
var i;
for (i=20; i>=1;i--) {
  console.log(i + ' - I will become fullstack developer');
}

//soal 3
//bagian GANJIL GENAP
var number = '';
var i ;
for (i = 1;i <= 100;i++) {
  if (i%2 === 0){
    console.log('GENAP');
  }
    else if(i%2 !== 0) {
    console.log('GANJIL');
    }
}

//counter 2 kelipatan 3
var number = '';
var i;
for ( i = 1; i < 100; i+=2) {
  if (i%3 === 0) {
    console.log(i + ' KELIPATAN 3');
  }
    else if (i%3 !== 0) {
      console.log('');
    }
}

//counter 5 kelipatan 6
var number = '';
var i;
for ( i = 1; i < 100; i+=5) {
  if (i%6 === 0) {
    console.log(i + ' KELIPATAN 6');
  }
    else if (i%6 !== 0) {
      console.log('');
    }
}

//counter 9 kelipatan 10
var number = '';
var i;
for ( i = 1; i < 100; i+=9) {
  if (i%10 === 0) {
    console.log(i + ' KELIPATAN 10');
  }
    else if (i%10 !== 0) {
      console.log('');
    }
}