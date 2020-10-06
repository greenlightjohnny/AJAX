const button = document.getElementById("button");

function water() {
  let xhr = new XMLHttpRequest();
  /// Open function, takes in type, url/file, async or not;
  xhr.open("GET", "boring.text", true);
  console.log("READYSTATE", xhr.readyState);

  ////Optional loaders, spinny wheels!
  //   xhr.onprogress = function () {
  //     console.log("ppp", xhr.readyState);
  //   };

  xhr.onload = function () {
    if (this.status == 200) {
      document.getElementById("text").innerHTML = this.responseText;
      console.log(this.responseText);
    } else if ((this.status = 404)) {
      document.getElementById("text").innerHTML = "ooops ";
    }
  };

  //   xhr.onreadystatechange = function () {
  //     console.log("A", xhr.readyState);
  //     if (this.readyState == 4 && this.status == 200) {
  //       //console.log(this.responseText);
  //     }
  //   };
  //   xhr.onerror = function() {
  //       console.log('errrrr')
  //   }
  xhr.send();
  console.log(xhr);
}

button.addEventListener("click", water);
