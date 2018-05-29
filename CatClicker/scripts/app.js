
var pic1 = document.getElementById('cat1');
var pic2 = document.getElementById('cat2');
var counter1 = 0;
var counter2 = 0;

function displayClicks(target){
	var clickers = document.getElementsByClassName('clickLabel');

	if(target == pic1){
		counter1+=1;
		clickers[0].innerText=counter1;
	}else{
		counter2+=1;
		clickers[1].innerText=counter2;
	}
}

pic1.addEventListener('click',function(event){
	displayClicks(event.target);
	console.log('the element has been clicked ');
}, false);

pic2.addEventListener('click',function(event){
	displayClicks(event.target);
	console.log('the element has been clicked ');
}, false);