const main = document.getElementById("main").children;

fb =main[0];
insta = main[1];
git = main[2];
wp = main[3];

fb.addEventListener("mouseover", function() {
	document.getElementsByTagName("body")[0].style.backgroundColor = "#4267B2";
	document.getElementById("text-indicator").innerHTML = "Facebook";
})

fb.addEventListener("mouseout", function() {
	document.getElementsByTagName("body")[0].style.backgroundColor = "#e2eee4";
	document.getElementById("text-indicator").innerHTML = "";
})

insta.addEventListener("mouseover", function() {
	document.getElementsByTagName("body")[0].style.backgroundColor = "pink";
	document.getElementById("text-indicator").innerHTML = "Instagram";
})

insta.addEventListener("mouseout", function() {
	document.getElementsByTagName("body")[0].style.backgroundColor = "#e2eee4";
	document.getElementById("text-indicator").innerHTML = "";
})

git.addEventListener("mouseover", function() {
	document.getElementsByTagName("body")[0].style.backgroundColor = "grey";
	document.getElementById("text-indicator").innerHTML = "Github";
})

git.addEventListener("mouseout", function() {
	document.getElementsByTagName("body")[0].style.backgroundColor = "#e2eee4";
	document.getElementById("text-indicator").innerHTML = "";
})

wp.addEventListener("mouseover", function() {
	document.getElementsByTagName("body")[0].style.backgroundColor = "green";
	document.getElementById("text-indicator").innerHTML = "Whastapp";
})

wp.addEventListener("mouseout", function() {
	document.getElementsByTagName("body")[0].style.backgroundColor = "#e2eee4";
	document.getElementById("text-indicator").innerHTML = "";
})


