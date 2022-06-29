const reviews = [
    {
        id: 1,
        name: "jonah godina",
        job: "runner",
        img: "resources/bitmoji/straight.PNG", 
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quasi nostrum explicabo, hic sed mollitia ipsam ea quae? Iusto, velit."
    }, 
    {
        id: 2,
        name: "sammy kopecky",
        job: "photographer",
        img: "resources/bitmoji/sad.PNG", 
        text: "ooh, I fall apart \nOooh, yeah, mmhmm\t\tShe told me that I'm not enough, yeah\nAnd she left me with a broken heart, yeah\nShe fooled me twice and it's all my fault, yeah\nShe cut too deep, now she left me scarred, yeah\nNow there's too many thoughts goin' through my brain, yeah"
    }, 
    {
        id: 3,
        name: "andrew bergmeier",
        job: "teacher",
        img: "resources/bitmoji/straight.PNG", 
        text: "Dopn't complain you signed for that shit. Sequi quasi nostrum explicabo, hic sed mollitia ipsam ea quae? Iusto, velit."
    }, 
    {
        id: 4,
        name: "heidi cossins",
        job: "graphic designer",
        img: "resources/bitmoji/straight.PNG", 
        text: "The point of dance is to look effortless. Sequi quasi nostrum explicabo, hic sed mollitia ipsam ea quae? Iusto, velit."
    }
]

const img = document.getElementById('person-img');
const person = document.getElementById('person');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentItem = 0;

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    person.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

window.addEventListener('DOMContentLoaded', function() {
    showPerson();
})

prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
})