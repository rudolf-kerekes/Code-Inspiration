// 1. DevOps
// Write a program that outputs numbers from 1 to 100, each on its own line, but:
//    •	Instead of each number that is divisible by 3, the program outputs Dev
//    •	Instead of each number that is divisible by 5, the program outputs Ops
//    •	Instead of each number that is divisible by both 3 and 5, the program outputs DevOps


for (a=1; a<101; a++){
var x=a%3, y=a%5;

if 
	((x<1)&&(y>=1)) {z="Dev";}

else if
	((y<1)&&(x>=1)) {z="Ops";}

else if
	((x<1)&&(y<1)) {z="DevOps";}
	
else {z=a}		
document.write (z + "<br>");
}


//  Spent time: 7 min