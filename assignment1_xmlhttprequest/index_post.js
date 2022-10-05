function buttonSend() {
    let now = new Date();

    let data = new FormData();
    data.append("value",document.getElementById("value").innerText);
    data.append("type",document.getElementById("type").innerText);
    data.append("unit",document.getElementById("unit").innerText);
    data.append("time",`${now}`);
    data.append("place",document.getElementById("place").innerText);

    const xhr = new XMLHttpRequest();
    xhr.open("POST",`http://localhost:8080/data`);
    xhr.onload = function () {
      console.log(this.responseText);
    };
    xhr.send(data);
};


document.getElementById('sendData').onclick = (e) => buttonSend();