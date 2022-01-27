import "./styles.css";
import "./badge.css";

const button2 = document.querySelector(".button2");
const count4 = document.querySelector(".count4");
// span.classList.toggle("count5");
button2.addEventListener("click", () => {
    count4.classList.toggle("hide");
});