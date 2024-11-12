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

const creatCard = (cat) =>{
    const card = createElement('section', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face  back');

    front.style.backgroundImage = `url('img/${cat}.jpg')`;
    
    card.appendChild(front);
    card.appendChild(back);

    return card;
};

const loadGame = () =>{

    const duplicationCats = [...cats, ...cats]

    duplicationCats.forEach((cat) =>{
        const card  = creatCard(cat);
        grid.appendChild(card)
    });
};

loadGame()