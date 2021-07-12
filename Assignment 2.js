D3 = 0;
D5 = 0;

for(i=1; i<=100; i++) {
   s = ""
   D3 = D3+1;
   D5 = D5+1;
   if(D3 == 3){
       s = s + "Fizz"
       D3 = 0
   }
   if(D5 == 5){
       s = s + "Buzz"
       D5 = 0
   }
   if(s == ""){
       console.log(i)
   }
   else{
       console.log(s)
   }

}