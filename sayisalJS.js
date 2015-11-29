function Rasgele(min,max){
 return Math.floor(Math.random() * (max-min)) + min ;
}

function yaz() {
      var rakam=new Array(6);
	  for(var i=0;i<rakam.length;i++){
		  
		  rakam[i]=Rasgele(1,49);
	  }
	   for(var x=0; x<6; x++){
			for(var y=0; y<5; y++){
				if(rakam[y]>rakam[y+1]){
					
					var temp = rakam[y+1];
					rakam[y+1] = rakam[y];
					rakam[y] = temp;
				}
			}
		}
	var rakam2=new Array(6);
	  for(var q=0;q<rakam2.length;q++){
		  
		  rakam2[q]=Rasgele(1,49);
	  }
	   for(var t=0; t<6; t++){
			for(var z=0; z<5; z++){
				if(rakam2[z]>rakam2[z+1]){
					
					var bos = rakam2[z+1];
					rakam2[z+1] = rakam2[z];
					rakam2[z] = bos;
				}
			}
		}	

document.getElementById("one").innerHTML=(rakam[0]);
document.getElementById("two").innerHTML=(rakam[1]);
document.getElementById("three").innerHTML=(rakam[2]);
document.getElementById("four").innerHTML=(rakam[3]);
document.getElementById("five").innerHTML=(rakam[4]);
document.getElementById("six").innerHTML=(rakam[5]);

document.getElementById("seven").innerHTML=(rakam2[0]);
document.getElementById("eight").innerHTML=(rakam2[1]);
document.getElementById("nine").innerHTML=(rakam2[2]);
document.getElementById("ten").innerHTML=(rakam2[3]);
document.getElementById("eleven").innerHTML=(rakam2[4]);
document.getElementById("twelwe").innerHTML=(rakam2[5]);
}