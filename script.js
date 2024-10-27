let randomVal=Math.ceil(Math.random()*100);
function guessNumber(){
  
  let num=parseInt(document.getElementById("userInput").value);
  if (randomVal===num){
    document.getElementById("result").textContent="congratulation";
    document.getElementById("result").style.backgroundColor="green";
  }
  else if ( randomVal<num){
    document.getElementById("result").textContent="To high";
    document.getElementById("result").style.backgroundColor="red";
  }
  else{ 
    document.getElementById("result").textContent="To low";
    document.getElementById("result").style.backgroundColor="red";
  }
}