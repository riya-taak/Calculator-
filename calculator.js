
    function pick(val)
    {
         let num = document.getElementById("a").value;
         num = num + val;
         document.getElementById("a").value = num;
    }


     function solve()
    {
         let x = document.getElementById("a").value;
         let y = eval(x);
        document.getElementById("a").value = y
    }

    function clr()
    {
         document.getElementById("a").value= " ";
    }
    
function dlt() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}