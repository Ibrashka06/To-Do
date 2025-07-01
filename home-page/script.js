const email = localStorage.getItem("userEmail");

if (!email) {
  window.location.href = "../Login-page/index.html";
} else {
  const userElement = document.getElementById("userEmail");
  userElement.textContent = `Добро пожаловать, ${email}`;
}
const todayBtn = document.getElementById("today__btn");
todayBtn.addEventListener("click", () => {
  window.location.href = "../today/index.html"
})
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
localStorage.removeItem("userEmail");
window.location.href = "../login-page/index.html";  
})
