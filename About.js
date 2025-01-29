const Card = document.getElementsByClassName("Textspace")[0];

Card.addEventListener("mousemove", (event) => {
    const pointerX = event.clientX;
    const pointerY = event.clientY;
    const cardRec = Card.getBoundingClientRect();
    
    const halfWidth = cardRec.width / 2;
    const halfHeight = cardRec.height / 2;
    
    const centerX = cardRec.left + halfWidth;
    const centerY = cardRec.top + halfHeight;
    
    const deltaX = centerX - pointerX;
    const deltaY = centerY - pointerY;
    
    const rotateX = deltaY / halfHeight;
    const rotateY = deltaX / halfWidth;
    
    const distanceFromCenter = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    const maxDistance = Math.max(halfWidth, halfHeight);
    const rotateDegree = (distanceFromCenter * 10) / maxDistance;
    
    Card.style.transform = `perspective(600px) rotate3d(${rotateX}, ${-rotateY}, 0, ${rotateDegree}deg)`;
});

Card.addEventListener("mouseleave", () => {
    Card.style.transform = '';
});

const prev = document.querySelector(' #Prev span');
const next = document.querySelector(' #Next span');

next.addEventListener('click', function() {
    const items = document.querySelectorAll('.TeamCard');
    document.querySelector('.OurTeam').appendChild(items[0]);
});

prev.addEventListener('click', function() {
    const items = document.querySelectorAll('.TeamCard');
    document.querySelector('.OurTeam').prepend(items[items.length -1]);
});
