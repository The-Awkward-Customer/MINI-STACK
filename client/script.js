// call my api
console.log("hello world");

async function getMessage() {
  // call api with fetch
  const response = await fetch("http://localhost:8080/message");
  console.log("the response is " + JSON.stringify(response));

  // turn the response into json
  const json = await response.json();
  console.log("the json is" + JSON.stringify(json));

  //put message on the page
  const p = document.getElementById("message");
  p.textContent = json.message;
  console.log("the text content is " + p.textContent);
}

getMessage();
