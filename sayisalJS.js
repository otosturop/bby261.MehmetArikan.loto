function Rasgele(min,max){
 return Math.floor(Math.random() * (max-min)) + min ;
}

function yaz() {
    var depo,yedek,depo2,yedek2,yedek3,ilk=0,ilk2=0,ilk3=0,ilk1=0,ilk4=0;
    var sayilar=new Array(6), rakamlar=new Array(6), sayilar2=new Array(6), rakamlar2=new Array(6);
    sayilar3=new Array(6);
    var kontrol=true;  
for(var i=0;i<6;i++)
    {
	sayilar[i]=0;
    }
    
  while(ilk<6)
  {
      depo=Rasgele(1,49);
      kontrol=true;
      for(i=0;i<6;i++)
      {
        if(sayilar[i]==depo)
            {
                kontrol=false;
            }
      }
    if(kontrol==true)
      {
        sayilar[ilk]=depo;
        ilk++;  
      }  
      
  }
    
    for(var k=1;k<6;k++)
{
	for(var i=0;i<6-k;i++)
   { if(sayilar[i]>sayilar[i+1])
	   {
		depo=sayilar[i];
		sayilar[i]=sayilar[i+1];
		sayilar[i+1]=depo;
	   }
   }
}
     // ikinci satır  
    
	for(var i=0;i<6;i++)
    {rakamlar[i]=0;}
    
  while(ilk2<6)
  { yedek=Rasgele(1,49);
      kontrol=true;
      for(i=0;i<6;i++){
        if(rakamlar[i]==yedek){
                kontrol=false;
        }
      }
    if(kontrol==true){
        rakamlar[ilk2]=yedek;
        ilk2++;
    }  
  }
    
    for(var k=1;k<6;k++){
	for(var i=0;i<6-k;i++){ 
        if(rakamlar[i]>rakamlar[i+1]){
		yedek=rakamlar[i];
		rakamlar[i]=rakamlar[i+1];
		rakamlar[i+1]=yedek;
        }
   }
}	
    //ikinci satır
   
    for(var i=0;i<6;i++)
    {rakamlar2[i]=0;}
    
  while(ilk1<6)
  { yedek2=Rasgele(1,49);
      kontrol=true;
      for(i=0;i<6;i++){
        if(rakamlar2[i]==yedek2){
                kontrol=false;}
      }
    if(kontrol==true){
        rakamlar2[ilk1]=yedek2;
        ilk1++;
    }  
  }
    
    for(var k=1;k<6;k++){
	for(var i=0;i<6-k;i++){ 
        if(rakamlar2[i]>rakamlar2[i+1]){
		yedek2=rakamlar2[i];
		rakamlar2[i]=rakamlar2[i+1];
		rakamlar2[i+1]=yedek2;
        }
   }
}	
    
    //üçüncü satır
    
    
    	for(var i=0;i<6;i++){
            sayilar2[i]=0;
        }
    
  while(ilk3<6)
  { yedek3=Rasgele(1,49);
      kontrol=true;
      for(i=0;i<6;i++){
        if(sayilar2[i]==yedek3){
                kontrol=false;
        }
      }
    if(kontrol==true){
        sayilar2[ilk3]=yedek3;
        ilk3++;
    }  
  }
    
    for(var k=1;k<6;k++){
	for(var i=0;i<6-k;i++){ 
        if(sayilar2[i]>sayilar2[i+1]){
		yedek3=sayilar2[i];
		sayilar2[i]=sayilar2[i+1];
		sayilar2[i+1]=yedek3;
        }
   }
}	
    
     //dördüncü satır
    for(var i=0;i<6;i++)
    {
        sayilar3[i]=0;
    }
    
  while(ilk4<6)
  { depo2=Rasgele(1,49);
      kontrol=true;
      for(i=0;i<6;i++){
        if(sayilar3[i]==depo2){
                kontrol=false;
        }
      }
    if(kontrol==true){
        sayilar3[ilk4]=depo2;
        ilk4++;
    }  
  }
    
    for(var k=1;k<6;k++){
	for(var i=0;i<6-k;i++){ 
        if(sayilar3[i]>sayilar3[i+1]){
		depo2=sayilar3[i];
		sayilar3[i]=sayilar3[i+1];
		sayilar3[i+1]=depo2;
        }
   }
}	

document.getElementById("one").innerHTML=(sayilar[0]);
document.getElementById("two").innerHTML=(sayilar[1]);
document.getElementById("three").innerHTML=(sayilar[2]);
document.getElementById("four").innerHTML=(sayilar[3]);
document.getElementById("five").innerHTML=(sayilar[4]);
document.getElementById("six").innerHTML=(sayilar[5]);

document.getElementById("seven").innerHTML=(rakamlar[0]);
document.getElementById("eight").innerHTML=(rakamlar[1]);
document.getElementById("nine").innerHTML=(rakamlar[2]);
document.getElementById("ten").innerHTML=(rakamlar[3]);
document.getElementById("eleven").innerHTML=(rakamlar[4]);
document.getElementById("twelwe").innerHTML=(rakamlar[5]);
    
document.getElementById("x").innerHTML=(rakamlar2[0]);
document.getElementById("y").innerHTML=(rakamlar2[1]);
document.getElementById("z").innerHTML=(rakamlar2[2]);
document.getElementById("a").innerHTML=(rakamlar2[3]);
document.getElementById("b").innerHTML=(rakamlar2[4]);
document.getElementById("c").innerHTML=(rakamlar2[5]);   
    
document.getElementById("xs").innerHTML=(sayilar2[0]);
document.getElementById("ys").innerHTML=(sayilar2[1]);
document.getElementById("zs").innerHTML=(sayilar2[2]);
document.getElementById("as").innerHTML=(sayilar2[3]);
document.getElementById("bs").innerHTML=(sayilar2[4]);
document.getElementById("cs").innerHTML=(sayilar2[5]);   
    
        
document.getElementById("x2").innerHTML=(sayilar3[0]);
document.getElementById("y2").innerHTML=(sayilar3[1]);
document.getElementById("z2").innerHTML=(sayilar3[2]);
document.getElementById("a2").innerHTML=(sayilar3[3]);
document.getElementById("b2").innerHTML=(sayilar3[4]);
document.getElementById("c2").innerHTML=(sayilar3[5]);   
    
}