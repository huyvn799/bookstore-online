let password = document.getElementById("password");
let show = document.querySelector(".fa-eye");

let state = true;

function showPassword() {
	if (state) {
		show.style.color = "var(--secondary-color)";
		password.setAttribute("type", "text");
		state = false;
	} else {
		show.style.color = "var(--black-color)";
		password.setAttribute("type", "password");
		state = true;
	}
}
