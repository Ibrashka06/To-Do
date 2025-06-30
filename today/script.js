const todayInput = document.getElementById("todayInput");
const todayBtn = document.getElementById("todayBtn");
const todayList = document.getElementById("todayList");


todayBtn.addEventListener("click", () => {
    const text = todayInput.value.trim();

    if (text === "") return;

    const li = document.createElement("li");
    li.className = "today__li appearing";
    const content = document.createElement("div");
    content.className = "today__li-content";
const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "li__checkbox";

    checkbox.addEventListener("change", () => {
        li.classList.toggle("done", checkbox.checked);
    })

    const li__span = document.createElement("span");
    li__span.className = "li__content-span";
    li__span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "today__deleteBtn";
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "images/trash.svg";
    deleteIcon.alt = "Удалить";
    deleteBtn.appendChild (deleteIcon);
    deleteIcon.className = "today__deleteIcon";
    

    deleteBtn.addEventListener("click", () => {
        li.remove();
    })
    content.appendChild(checkbox);
    content.appendChild(li__span);

    li.appendChild(content);
    li.appendChild(deleteBtn);
    
    todayList.appendChild(li);
    requestAnimationFrame(() => {
        li.classList.remove("appearing");
    })
    todayInput.value = ("");

})

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", () => {
localStorage.removeItem("userEmail");
window.location.href = "../Login-page/index.html";  
})