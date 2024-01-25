function start1()
{
    let minutes=document.getElementById("min").value;

    let minutes1=Number(minutes);

    if(minutes1>0)
    {
        document.getElementById("min").value=minutes1-1;
        console.log(minutes1-1)
        start()
    }
    else
    {
        document.getElementById("min").value="";
    }
}



let button = document.querySelector(".btn");






function start() {

    let inp1 = document.getElementById("sec").value;
    let inp2 = document.getElementById("min").value;

    let s = Number(inp1)
    let m = Number(inp2)



    if (s != 0 && m >= 0) {
        document.getElementById("sec").value = --s;
    }

    else if (s != 0 && m == 0) {
        document.getElementById("sec").value = --s;
        document.getElementById("min").value = 0;
    }



    else if (s == 0 && m != 0) {
        document.getElementById("sec").value = 60;
        document.getElementById("min").value = --m;
    }



    else if (s == 0 && m == 0) {
        document.getElementById("sec").value = 0;
        document.getElementById("min").value = "";
        start1()
    }


    if (document.getElementById("min").value == "") {
        document.querySelector("button").disabled = false;
    }
    else{
        document.querySelector("button").disabled = true;

    }





    setTimeout(() => {
        start()
    }, 1000);
}
