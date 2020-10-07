const button = document.getElementById("button1");

function loadUsers() {
  let xhr = new XMLHttpRequest();
  let userField = document.getElementById("user");
  xhr.open("GET", "https://api.github.com/users", true);
  xhr.onload = function () {
    if (this.status == 200) {
      let users = JSON.parse(this.responseText);
      let out = "";
      users.map((i) => {
        out += `<ul> <li>Login: ${i.login}</li></ul>`;
      });

      userField.innerHTML = out;
    }
  };

  xhr.send();
}

button.addEventListener("click", loadUsers);
