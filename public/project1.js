function RandomNumber() {
  let numLabel = document.getElementById("random-number");
  let num = Math.random() * 100;
  num = Math.ceil(num);
  numLabel.innerHTML = num;
}

async function NetworkRequest() {
  let response = await fetch("http://192.168.1.113:3000/");

  if (response.ok) {
    // if HTTP-status is 200-299
    // get the response body (the method explained below)
    console.log(response);
    let textOut = await response.text();
    console.log(textOut);
  } else {
    alert("HTTP-Error: " + response.status);
  }
}
