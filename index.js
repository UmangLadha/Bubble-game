let hit = 0;
let timer = 60;
let score = 0;
let hitEle = document.querySelector("#rElem");
let timeEle = document.querySelector("#tElem");
let scoreEle= document.querySelector("#sElem");
let output = document.querySelector("#pbtm"); 

function newBubbles(){
	let count = "";
	for(i = 1 ; i<=180; i++){
		let rn = Math.floor(Math.random()*10);
		count += `<div id="bubble">${rn}</div>`;
	}
    output.innerHTML = count;
}

function hitNo(){
	hit = Math.floor(Math.random()*10);
	hitEle.innerHTML= hit;
}

function timerval(){
	let timeInt = setInterval( () => {
		if(timer>0){
		timer--;
		timeEle.innerHTML = timer;
		}
		else
		{
			clearInterval(timeInt);
			output.innerHTML= 
			`<h1>GAME OVER</h1>
			<h2>Your Score : ${score}</h2>`	
			hitEle.innerHTML= 0;
		}
	}, 1000)
}

function increaseScore(){
	score += 10;
    scoreEle.innerHTML= score;
}

output.addEventListener("click", (n) => {
	let value = +n.target.innerHTML;
	if( value === hit){
		increaseScore();
		newBubbles();
		hitNo();
	}

	// else{
	// 	output.innerHTML= 
	// 		`<h1>Ohhoo! Thats a Wrong Number</h1>
	// 		<h3>Your Score : ${score}</h3>`	
	// }
})

// increaseScore()
newBubbles();
timerval();
hitNo();

alert("After clicking okay your timer will be start !")