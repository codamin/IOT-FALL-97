var i = 1;
var j=0;
function adding(){
	var adder= document.getElementById("form");
	var newMem = document.createElement("div");
	var children=adder.childNodes;	
	newMem.innerHTML=" <div class=\"input-group\"><input type=\"text\" id=\"username\" required><label for=\"username\">Member</label><label for=\"username\" class=\"input-validation \"></label></div>";
	newMem.setAttribute("id",i.toString());
	newMem.setAttribute("name","mem" + i.toString())
	var temp= document.getElementById('1');
	console.log(temp);
	adder.insertBefore(newMem,adder.childNodes[children.length-11]);
	i++;
}

var groupnameInput = document.querySelector('js-groupNameInput');
var thingspeakInput = document.querySelector('js-thingSpeakInput');
var passwordInput = document.querySelector('js-passwordInput');
var repasswordInput = document.querySelector('js-confirmPasswordInput');

console.log(groupnameInput);
console.log(thingspeakInput);
console.log(passwordInput);
console.log(repasswordInput);

var members=[];
	for(j=0;j<i;j++){
 	members[j]=document.querySelector(i.toString());
	if(document.querySelector(i.toString()) == null){
		console.log(i);
		break;
	}
}

var btn= document.querySelector('btn');

btn.addEventListener('click',function(){
});

