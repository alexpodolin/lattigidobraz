var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("slider__slide");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }

    myIndex++;
    if (myIndex > x.length) 
      {myIndex = 1}  

      if (x[myIndex-1]) {
        x[myIndex-1].style.display = "block";
      }  
      
      setTimeout(carousel, 7000);    
}

carousel();