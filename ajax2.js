const button1 = document.getElementById("button1");

function loadUser() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "user.json", true);

  xhr.onload = function () {
    if (this.status == 200) {
      let user = JSON.parse(this.responseText);
      let userField = document.getElementById("user");
      //userField.innerHTML = user.name;
      //let output = "";

      let output = `<ul>
      <li>ID: ${user.id}</li>
      <li>ID: ${user.name}</li>
      <li>ID: ${user.email}</li>
      </ul>

      `;
      userField.innerHTML = output;
    }
  };

  xhr.send();
}

function loadUsers() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);

  xhr.onload = function () {
    if (this.status == 200) {
      let usersField = document.getElementById("users");

      let users = JSON.parse(this.responseText);

      users.map((i) => {
        let tag = document.createElement("h2");
        tag.innerHTML = i.name;
        usersField.appendChild(tag);
      });
    }
  };

  xhr.send();
}

button1.addEventListener("click", loadUser);
button2.addEventListener("click", loadUsers);
