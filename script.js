 /* Switch Case --> switch ("Gwava") {
  case "Orange":
    console.log("Orange")
    break
  case "Grapes":
    console.log("Grapes")
    break
  case "Apple":
    console.log("Apple")
    break
  case "Mango":
    console.log("Mango")
    break
  case "Gwava":
    console.log("Gwava")
    break
  default:  
    
} */ 


let fnum = document.querySelector("#fnum")
let go = document.querySelector("#go")
let output = document.querySelector("#output")


go.addEventListener("click" , function(){
  let value = Number(fnum.value);
  let grade;

    if (isNaN(value) || fnum.value.trim() === "") {
    alert("Please enter your marks");
    output.textContent = ""; // clear previous result
    return;
  }

    if (value < 25) grade = "D";
    else if(value < 50) grade = "C";
    else if(value < 80) grade = "B";
    else grade = "A";
    
  output.textContent = "Your Grade Will Be: " + grade;
  
  
})

