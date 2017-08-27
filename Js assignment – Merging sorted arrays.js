

var $foo = [1, 2, 3, 5, 7];
var $bar = [1, 4, 6, 7, 8];

var $baz = array_nerge_sorted($foo,$bar) 

document.write($baz)


function array_nerge_sorted ($foo, $bar) {
 $baz = $foo.concat($bar); 

     
$baz.sort(function compareNumbers(a,b){
return a-b;});

	for (i=1; i < $baz.length; i++) {
		num = $baz.indexOf(i)
  
		k=num+1;
	
			for (a=k; a<$baz.length;a++) {
			num2 = $baz.indexOf(k,a)

			if (num2>-1) {
			$baz.splice(num2,1);}	  
			}	 
	}
return $baz;
}	

// time: 17 min