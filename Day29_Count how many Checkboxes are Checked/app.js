var inputs = document.querySelectorAll('form .input_field input'),
    allSelect = document.querySelector('form .selectAll input'),
    quantity = document.querySelector('.quantity'),
    skills = document.querySelector('.skills'),
    quantityText = "<span>Number of Skills: </span>",
    skillText = "<span>Name of Skills: </span>"


let listArray = []

inputs.forEach(input => {

    allSelect.addEventListener('click', ()=> {
        if(allSelect.checked){
            input.checked = true
            input.classList.add("checked")
        }
        else{
            input.checked = false
            input.classList.remove("checked")
        }

        var checked = document.querySelectorAll('.checked')
        quantity.innerHTML = quantityText + checked.length


        if(input.checked){
            listArray.push(input.value)
        }
        else{
            listArray = listArray.filter(val => val !== input.value)
        }

        let newUniqueArr = [...new Set(listArray)] // Set always contains unique values. It is an ES6 methods.
        skills.innerHTML = skillText + newUniqueArr.join(', ')
    })

    input.addEventListener('click', ()=> {
        input.classList.toggle("checked")
        var checked = document.querySelectorAll('.checked')
        quantity.innerHTML = quantityText + checked.length


        if(input.checked){
            listArray.push(input.value)
        }
        else{
            listArray = listArray.filter(val => val !== input.value)
            allSelect.checked = false
        }
        let newUniqueArr = [...new Set(listArray)] // Set always contains unique values. It is an ES6 methods.
        skills.innerHTML = skillText + newUniqueArr.join(', ')
    })
})