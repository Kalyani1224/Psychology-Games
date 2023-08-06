const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        //  top of the next bos ix less than then trigger bottom point which is a little less than the entire view port 
        
        if(boxTop < triggerBottom){
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }
    })
}