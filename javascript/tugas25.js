function arrRevesing(){
  var sebelumnya = "2,39,76,50,9,7,41,2,24,1,16";
  console.log("sebelumnya :", sebelumnya);

  const array1 = [2,39,76,50,9,7,41,2,24,1,16];

  array1.sort();

  console.log("Ascending :", array1);

  var array2 = [
   1, 16,  2, 2, 24,
  39, 41, 50, 7, 76,
   9
];
  array2.reverse();
  console.log("Descending :", array2);

}
arrRevesing();

var huruf = [1,2,2,16,24,39,41,50,76];
var angka3 = huruf.filter(function(x){
  return x > 10
  });
  angka3.reverse();

console.log("Filter > 10 :",angka3);
