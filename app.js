const particles = document.querySelectorAll('.particles')
const body = document.querySelector('body')


//random width and height of particles
let width_2;

function randomWidth (){
    width_2 = Math.floor(Math.random() * 10 + 5)
}
randomWidth()


//random positon
let top_2;
let bottom_2;
let left_2;
let right_2;
function generateRandoms(){
top_2 = Math.floor(Math.random() * 100)
bottom_2 = Math.floor(Math.random() * 100)
right_2 = Math.floor(Math.random() * 100)
left_2 = Math.floor(Math.random() * 100)

}

particles.forEach(particle => {
    generateRandoms()
    randomWidth()

    particle.style.top = top_2 + '%';
    particle.style.bottom = bottom_2 + '%';
    particle.style.right = right_2 + '%';
    particle.style.left = left_2 + '%';
    particle.style.width = width_2 + 'px'
    particle.style.height = width_2 + 'px'
    
})

//moving particles using eventlistener
particles.forEach(particle => {
    particle.addEventListener('mouseover', () => {
    console.log('hey')
    generateRandoms()

    particle.style.top = top_2 + '%';
    particle.style.bottom = bottom_2 + '%';
    particle.style.right = right_2 + '%';
    particle.style.left = left_2 + '%';
        
        
    })
})


