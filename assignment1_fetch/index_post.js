function buttonSend() {
    let now = new Date();

    let data = new FormData();
    data.append("value",document.getElementById("value").innerText);
    data.append("type",document.getElementById("type").innerText);
    data.append("unit",document.getElementById("unit").innerText);
    data.append("time",`${now}`);
    data.append("place",document.getElementById("place").innerText);

    fetch(`http://localhost:8080/data`,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then(r => r.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
}


document.getElementById('sendData').onclick = (e) => buttonSend();