let count = "";
for(i = 1 ; i<=120; i++){
	count += `<div id="bubble">${Math.floor(Math.random()*10)}</div>`;
}

let output = document.querySelector("#pbtm");
output.innerHTML = count;