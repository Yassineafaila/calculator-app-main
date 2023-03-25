const change = document.getElementById("range");
change.addEventListener("input", function () {
    console.log(change.value)
    document.body.className = ""
    if (change.value === "2") {
        document.body.classList.add("Theme3")
    } else {
        if (change.value === '1') {
            document.body.classList.add("Theme2")
        }
    }
})
const btn = document.querySelectorAll(".box");
const result=document.querySelector("#result")
console.log(btn);
btn.forEach(function (e) {
    e.addEventListener("click", function () {
        console.log(e.value)
        
        if (e.value === 'reset') {
            result.value=''
        } else {
            if (e.value === "del") {
                result.value=result.value.toString().slice(0,-1)
            } else {
                result.value += e.value;
            }
        }
        if (e.classList.contains("equal")) {
            result.value=eval(result.value)
        }
    })
})