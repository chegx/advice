
fetch('https://api.adviceslip.com/advice')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("number").textContent = data.slip.id;
    document.getElementById("quote").textContent = data.slip.advice;
  });

document.getElementById("btn").onclick = () => location.reload(true);
//Reloads the current page from the server
