
function compute(){

  console.log("This function works")
  let opOne = document.getElementById('opOne');
  let opTwo = document.getElementById('opTwo');
  let operand = document.getElementById('operand');
  let out = document.getElementById('out');
  let result;
  if(isNaN(opOne.value) || isNaN(opTwo.value)){
    alert("Enter Valid Number")
    return;
  }

  else if(opOne.value.trim() == '' || opTwo.value.trim() ==''){
    alert('Please Fill both input fields');
    return;
  }
  else{

    let a = parseFloat(opOne.value);
    let b = parseFloat(opTwo.value);

   switch (operand.value) {
    case "x":
       result = a * b;
      break;

    case "+":
       result = a + b;
      break;

    case "-":
       result = a - b;
      break;

    case "/":
       result = (b === 0 ) ? "Can't divide by 0" : a / b;
      break;

    default:
      break;
  }
    
  }
  
  out.value = result;
}


export { compute }
