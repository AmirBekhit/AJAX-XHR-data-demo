document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById("output").innerHTML = this.responseText;
    }
  };
  xhr.open("GET", "data.txt", true);
  xhr.send();
}
