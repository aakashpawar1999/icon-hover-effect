var img_1 = document.getElementById("img-1");
var img_2 = document.getElementById("img-2");
var img_3 = document.getElementById("img-3");

function mouseIn(ele) {
	if (ele == 1) {
		img_1.setAttribute("src", "img/facebook-color.png");
	} else if (ele == 2) {
		img_2.setAttribute("src", "img/twitter-color.png");
	} else {
		img_3.setAttribute("src", "img/linkedin-color.png");
	}
}

function mouseOut(ele) {
	if (ele == 1) {
		img_1.setAttribute("src", "img/facebook-gray.png");
	} else if (ele == 2) {
		img_2.setAttribute("src", "img/twitter-gray.png");
	} else {
		img_3.setAttribute("src", "img/linkedin-gray.png");
	}
}
