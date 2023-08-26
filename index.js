let count = "";
for(i = 1 ; i<=168; i++){
	let bn = Math.floor(Math.random()*10)
	count += `<div id="bubble">${bn}</div>`;
}

let output = document.querySelector("#pbtm");
output.innerHTML = count;