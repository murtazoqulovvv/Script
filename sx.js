let num = +prompt("Son kiriting")
let result = num %  0;
if(num % 2 == 0 && num > 0){
 console.log("Musbat Juft");
}else if(num % 2== 0 && num < 0){
  console.log("Manfiy Juft");
}else if(num % 2 == -1 && num < 0){
  console.log("Manfiy Toq");
}else if(num % 2 == 1 && num > 0){
  console.log("Musbat Toq");
}else{
  console.log("Nol");
}