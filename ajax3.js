const button = document.getElementById("button1");
const ajaxClass = document.querySelector(".ajax");
const allC = document.querySelector(".allc");

function loadUsers() {
  allC.style.display = "none";
  ajaxClass.style.display = "block";
  let xhr = new XMLHttpRequest();
  let userField = document.getElementById("user");
  xhr.open("GET", "https://api.github.com/users", true);
  xhr.onload = function () {
    if (this.status == 200) {
      let users = JSON.parse(this.responseText);
      let out = "";
      users.map((i) => {
        out += `<div class="user"> <img src="${i.avatar_url}" ></img></div>`;
      });

      userField.innerHTML = out;
    }
  };

  xhr.send();
}

button.addEventListener("click", loadUsers);
