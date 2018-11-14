// function showResults() {
//    document.getElementById('results').style.display = "block";
// }

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
//console.log(colors)
return colors;
}

function changeProgressBar(object) {
  let redColor = document.getElementById("red")
  let blueColor = document.getElementById("blue")
  let tealColor  = document.getElementById("teal")
  let goldColor  = document.getElementById("golden")
  let greenColor  =  document.getElementById("green")
  console.log("redColor", redColor)

  let colorCountObj = countColorFequency(object)
  console.log("colorCountObj", colorCountObj)

  for(let color in colorCountObj) {
    console.log("color", color)
    let percentage = colorCountObj[color] * 10
    console.log("percentage", percentage)
    if (color === 'red') {
      redColor.style.width = `${percentage}%`;
      redColor.innerHTML = `${percentage}%`
    }
    if (color === 'blue') {
      blueColor.style.width = `${percentage}%`;
      blueColor.innerHTML = `${percentage}%`
    }
    if (color === 'teal') {
      tealColor.style.width = `${percentage}%`;
      tealColor.innerHTML = `${percentage}%`
    }
    if (color === 'golden') {
      goldColor.style.width =  `${percentage}%`;
      goldColor.innerHTML = `${percentage}%`
    }
    if (color === 'green') {
      greenColor.style.width =  `${percentage}%`;
      greenColor.innerHTML = `${percentage}%`
    }
  }

}




// function checkArrayLength(array){
//   let pickedArray = getRadioValue(array);
//   if (pickedArray.length < 10) {
//     console.log ("System need all sections anwsered. Please complete quiz.")
//   } else {
//     return largestCount(pickedArray);
//   }
// }
