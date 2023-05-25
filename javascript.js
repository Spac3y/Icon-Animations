const main = document.getElementById("main").children;

fb =main[0];
insta = main[1];
tt = main[2];
wp = main[3];

fb.addEventListener("mouseover", function() {
	document.getElementsByTagName("body").style.color = "blue";
})