//get the HTML scroll to top button

var scrollButton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

//create the function
var scrollToTop = function()
{
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
	{
   		 mybutton.style.display = "block";
  } else 
  	{
    	mybutton.style.display = "none";
  	}
};

scrollButton.addEventListener("click", scrollToTop);
