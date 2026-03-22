
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

// let value = "";
  
// function pick(input) {
//   if (input === "." && value.includes(".")) return;

//   value += input;
//  display.value = value;
// }

// // function pick()
// // {
// //   if(input === "."){
// //     if(value.include("."))
// //     {
// //       return;
// //     }
// //   }
// //   value += input;
// // }


function pick(value) {
    // let display = document.getElementById("a");
    let current = display.value;

    let operators = ['+', '-', '*', '/'];

    // last character nikaalo
    let lastChar = current[current.length - 1];

    // agar starting me operator dabaya
    if (current === "" && operators.includes(value)) {
        return;
    }

    // agar last char bhi operator hai aur naya value bhi operator hai
    if (operators.includes(lastChar) && operators.includes(value)) {
        return;
    }

    // dot ke liye check
    if (value === ".") {
        let parts = current.split(/[\+\-\*\/]/);
        let lastPart = parts[parts.length - 1];

        // ek number me sirf ek hi dot
        if (lastPart.includes(".")) {
            return;
        }

        // agar start me ya operator ke baad dot dabaya
        if (lastPart === "") {
            display.value += "0.";
            return;
        }
    }

    display.value += value;
}