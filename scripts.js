const main = document.getElementById("main");
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", changeTheme)

function changeTheme(){
	if(main.classList.contains("light")){
		main.classList.toggle("light");
		main.classList.toggle("dark");

		main.style.backgroundColor = "var(--dark-theme-bg)";
		main.style.color = "var(--dark-theme-text)";

		themeBtn.style.backgroundColor = "var(--dark-theme-button-bg)";
		themeBtn.style.color = "var(--dark-theme-button-text)";
		themeBtn.textContent = "Light Theme";
	} else {
		main.classList.toggle("light");
		main.classList.toggle("dark");

		main.style.backgroundColor = "var(--light-theme-bg)";
		main.style.color = "var(--light-theme-text)";

		themeBtn.style.backgroundColor = "var(--light-theme-button-bg)";
		themeBtn.style.color = "var(--light-theme-button-text)";
		themeBtn.textContent = "Dark Theme";
	}
}