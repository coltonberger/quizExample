function showResults() {
   document.getElementById('results').style.display = "block";
}

function getRadioValue(name) {
let array = []
let selected = document.querySelectorAll('input[type=radio]:checked')

for (let i = 0; i < selected.length; i++) {
  array.push(selected[i].value)
}
//console.log(array)
return array
}

function countColorFequency(array) {
  let selectedValues = getRadioValue(array)
  let colors = {}

  for (let j = 0; j < selectedValues.length; j++){
  let color = selectedValues[j];
  if (colors[color] === undefined) {
    colors[color] = 1;
  } else {
    colors[color]++;
  }
}
console.log(colors)
return colors;
}

function changeProgressBar(){
  
}




// function checkArrayLength(array){
//   let pickedArray = getRadioValue(array);
//   if (pickedArray.length < 10) {
//     console.log ("System need all sections anwsered. Please complete quiz.")
//   } else {
//     return largestCount(pickedArray);
//   }
// }
