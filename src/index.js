// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var n = 0;
var p = 0;
var d = 0;
var q = 0;
var h = 0; 
var change = {H:0, Q:0, D:0, N:0, P:0};
var error = {error: "You are rich, my friend! We don't have so much coins for exchange"};

if(currency <= 10000){
  while(currency >= 50){
  var x = currency -= 50;
  h ++; 
  } 
  while(currency >= 25){
  var l = currency -= 25;
  q ++;
  } 
  while(currency >= 10){
  var m = currency -= 10;
  d ++;
  }
  while(currency >= 5){
  var s = currency -= 5;
  n ++;
  }
  while(currency > 0){
  var e = currency -= 1;
  p ++;
 }
    
   if(!h  == 0){
 change.H=h;}
 else{
 delete change.H;
 }
  
 if(!q  == 0){
 change.Q =q;}
 else{
 delete change.Q;
 }

  if(!d  == 0){
 change.D=d;}
 else{
 delete change.D; 
 }
    if(!n  == 0){
 change.N=n;}
 else{
 delete change.N;
 }
   if(!p  == 0){
 change.P=p;}
 else{
 delete change.P;
 }

return change;

 }
 else{ 
return error;
 }
}
