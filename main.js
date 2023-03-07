import './style.css'; 

const img = document.getElementById("img"); 

getRandomPerson();
async function getRandomPerson() {
    const data  = await fetch("https://randomuser.me/api/"); 
    const person = await data.json(); 
    img.src = person.results[0].picture.large; 
}

