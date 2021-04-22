const textInputs = document.querySelectorAll(".text-input");

function toUpperCase(e){
    this.value = this.value.toUpperCase();
}

textInputs.forEach(node => {
    node.addEventListener('change', toUpperCase)
})
