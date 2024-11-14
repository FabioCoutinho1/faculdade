const grid = document.querySelector(".grid")

const cats = [
    "cat1",
    "cat2",
    "cat3",
    "cat4",
    "cat5",
    "cat6",
    "cat7",
    "cat8",
    "cat9",
    "cat10"
];

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

let fisrtCard = '';
let secundCard = '';

const checkEndGame = () => {
    const disableCard = document.querySelectorAll('.disable-card')

    if(disableCard.length === 20){
        alert("Parabens")
    };
};

const chackCards = () =>{
    const firstCat = fisrtCard.getAttribute('data-cat');
    const secundCat = secundCard.getAttribute('data-cat');

    if(firstCat === secundCat){
        
        fisrtCard.firstChild.classList.add('disable-card')
        secundCard.firstChild.classList.add('disable-card')

        fisrtCard = '';
        secundCard = '';

        checkEndGame();

    }else{

        setTimeout(() => {
            fisrtCard.classList.remove('reveal-card');
            secundCard.classList.remove('reveal-card');

            fisrtCard = '';
            secundCard = '';

        }, 500);
    };
}

const revelCard = ({target}) =>{

    if(target.parentNode.className.includes('reveal-card')){
        return;
    };

    if(fisrtCard === ''){
        target.parentNode.classList.add('reveal-card');
        fisrtCard = target.parentNode
    } else if (secundCard === ''){

        target.parentNode.classList.add('reveal-card');
        secundCard = target.parentNode
        chackCards();
    };
}

const creatCard = (cat) =>{
    const card = createElement('section', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face  back');

    front.style.backgroundImage = `url('img/${cat}.jpg')`;
    
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revelCard);
    card.setAttribute('data-cat', cat)

    return card;
};

const loadGame = () =>{

    const duplicationCats = [...cats, ...cats];

    const shuffle = duplicationCats.sort(() => Math.random() - 0.5);

    shuffle.forEach((cat) =>{
        const card  = creatCard(cat);
        grid.appendChild(card);
    });
};

loadGame();