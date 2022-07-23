let addBtn = document.querySelector("#add")

let subBtn = document.querySelector("#sub")

let qtyBtn = document.querySelector("#qtybox")


addBtn.addEventListener("click", () => {
    qtyBtn.value = parseInt(qtyBtn.value) + 1
})

subBtn.addEventListener("click", () => {
    if(qtyBtn.value <= 0){
        qtyBtn.value = 0
    }else {
        qtyBtn.value = parseInt(qtyBtn.value) -1
    }
});






