
var image = new Array();


image[0]=new Image();
image[0].src="./image/lalaland.jpg";
image[1]=new Image();
image[1].src="./image/onceupon.jpg";
image[2]=new Image();
image[2].src="./image/backtothe.jpg";
image[3]=new Image();
image[3].src="./image/greenbook.jpg";
image[4]=new Image();
image[4].src="./image/ally.jpg";
image[5]=new Image();
image[5].src="./image/ford.jpg";


var cnt=0;

function slidesw()
{

 
  if(document.getElementById)
  {

   
    document.slide.elements[0].disabled=true;

   
    document.getElementById("sd").src = image[cnt].src;

  
    cnt++;
    
    if( cnt <= 5 )
    {
    
      var timer1=setTimeout("slidesw()",3000);
    }
    else
    {
     
      cnt=0;
      document.slide.elements[0].disabled=false;
      clearTimeout(timer1);
    }
  }
}