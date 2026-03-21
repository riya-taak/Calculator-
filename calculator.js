
    var display= document.getElementById("a")

    function pick(val)
    {
         let num = display.value;
         num = num + val;
         display.value = num;
    }


     function solve()
    {
         let x = display.value;
         let y = eval(x);
        display.value = y
    }

    function clr()
    {
       display.value= " ";
    }

function dlt() {
  
  display.value = display.value.slice(0, -1);
}

let value = "";
  
function pick(input) {
  if (input === "." && value.includes(".")) return;

  value += input;
 display.value = value;
}

// function pick()
// {
//   if(input === "."){
//     if(value.include("."))
//     {
//       return;
//     }
//   }
//   value += input;
// }