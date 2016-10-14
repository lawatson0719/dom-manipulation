document.querySelector("#thanks button").addEventListener('click',function(){
	 alert('yowch! don\'t click me so hard!');
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  	var el = document.getElementById('compoundInvestment');
  	// el.textContent = parseInt(el.textContent) * 2;
  	el.textContent *= 2;

})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circle = document.getElementById('circle-bw');
  if (circle.style.backgroundColor === 'black') {
  	circle.style.backgroundColor = '#fff';
  } else {
  	circle.style.backgroundColor ='black';
  }

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var redCircle = document.getElementsByClassName('circle-red')[0];
  var width = redCircle.clientWidth;

  if (width >= 320) {
  	redCircle.style.width = '40px';
  	redCircle.style.height = '40px';
  } else {
  	redCircle.style.width = width * 2 + 'px';
  	redCircle.style.height = width * 2 + 'px';
  }

  
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var list = document.getElementById('userList');
  for (var i = list.children.length - 1; i >= 0; i--) {
  		if (list.children[i].textContent[0] === 'i') {
  			list.children[i].parentElement.removeChild(list.children[i]);
  		}
  }
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var reverseSquares = document.getElementById('reverse-squares');
  var squares = reverseSquares.getElementsByClassName('answer-box')[0];
  for (var i = squares.children.length - 1; i >= 0; i--) {
  	squares.appendChild(squares.children[i]);
  }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
	// TASK #7
	var list = document.getElementById('tasks');
	// var arr = list.children;
 	var result;

	for (var i = 0; i < list.children.length; i++){ 
		result = '';
		for (var j = list.children[i].textContent.length - 1; j >= 0; j--) {
			result += list.children[i].textContent[j];
		}
		list.children[i].textContent = result;
	}
})


document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  var images = document.getElementById('city-img');
  var splitString = images.src.split('/');
  var n = parseInt(splitString[splitString.length - 1]);

  if (n >= 10) {
  	n = 1;
  } else {
  	n += 1;
  }

  splitString[splitString.length - 1] = n;
  
  images.src = splitString.join('/');
})














