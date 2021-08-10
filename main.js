let input = "a hard guy in technology"
const vowels = ["a","e","i","o","u"] 
let resultArray = []
for(let i=0; i < input.length; i++){
  // console.log(i)
  for(let j=0; j < vowels.length; j++){
    if(input.length[i]===vowels.length[i] ){
      resultArray.push(input.length[i])
    }
  }
  if(input.length[i] === "e"){
    resultArray.push(input.length[i])
  }
  if(input.length[i] === "u"){
    resultArray.push(input.length[i])
  }

}

console.log(resultArray)
