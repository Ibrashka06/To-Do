const form = document.getElementById("form");
const input_email = document.getElementById("email");
const input_password = document.getElementById("password");
const input_btn = document.getElementById("signin_btn");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form_email = input_email.value.trim();
    const form_password = input_password.value.trim();

    if (form_email === "" || form_password === ""){
         alert("Пожалуйста, заполните все поля");
        return;
    }
    if (form_password < 6) {
    alert("Пароль должен быть не короче 6 символов");
    return;
  }

  localStorage.setItem("userEmail", form_email);

  window.location.href = "../home-page/index.html";
})