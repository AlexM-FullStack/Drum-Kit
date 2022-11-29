let btns = document.querySelectorAll('.drum')

btns.forEach(item => {
    item.addEventListener('click', event => {
        let btnText = item.innerHTML
        let audio
        
        switch(btnText){
            case 'w':
                audio = new Audio('sounds/crash.mp3')
                audio.play()
            break

            case 'a':
                audio = new Audio('sounds/kick-bass.mp3')
                audio.play()
            break

            case 's':
                audio = new Audio('sounds/snare.mp3')
                audio.play()
            break

            case 'd':
                audio = new Audio('sounds/tom-1.mp3')
                audio.play()
            break

            case 'j':
                audio = new Audio('sounds/tom-2.mp3')
                audio.play()
            break

            case 'k':
                audio = new Audio('sounds/tom-3.mp3')
                audio.play()
            break

            case 'l':
                audio = new Audio('sounds/tom-4.mp3')
                audio.play()
            break

            default: console.log(btnText)
        }
    })
})


btns.forEach(item => item.addEventListener('keydown', e => {
    alert(`You pressed the ${e.key} key!`)
    item.style.color = 'white'
}))