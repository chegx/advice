const apiUrl = 'https://api.adviceslip.com/advice';

async function genAdvice() {
  const response = await fetch(apiUrl, {cache: "no-cache"});
  const data = await response.json();
  
  document.getElementById("number").textContent = data.slip.id;
  document.getElementById("quote").textContent = data.slip.advice;
}

document.getElementById("btn").onclick = () => genAdvice();

genAdvice();

//firefox doesn't refresh server data without cache option
