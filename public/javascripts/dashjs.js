var home=document.getElementById('js-Home');
var ThingS=document.getElementById('js-ThingSpeak');
var YourAc=document.getElementById('js-YourAccount');
var about=document.getElementById('js-aboutus');
console.log(home);
console.log(ThingS);
console.log(YourAc);
console.log(about);


function Home(){

	home.style.display="block";
	ThingS.style.display="none";
	YourAc.style.display="none";
	about.style.display="none";
}

function ThingSpeak(){
	
	home.style.display="none";
	ThingS.style.display="block";
	YourAc.style.display="none";
	about.style.display="none";
}

function YourAccount(){
	
	
	home.style.display="none";
	ThingS.style.display="none";
	YourAc.style.display="block";
	about.style.display="none";
}

function AboutUs(){
	
	home.style.display="none";
	ThingS.style.display="none";
	YourAc.style.display="none";
	about.style.display="block";
}

