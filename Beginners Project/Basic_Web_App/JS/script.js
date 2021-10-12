//Challenge 1: Age In Days 

function ageInDays(){
    var birthYear = prompt("In which year you were born.....Good friend ?"); 
    var ageInDayss = (2021 - birthYear) * 365;
    var h2 = document.createElement('h2');
    var textAnswer = document.createTextNode("You are " + ageInDayss + " days old.");
    h2.setAttribute('id' , 'ageInDays');
    h2.appendChild(textAnswer);
    document.getElementById('flexbox-result').appendChild(h2);

}

function reset(){
    document.getElementById('ageInDays').remove();
}



//Challenge 2:Cat generator

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('generate-cat');
    image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

