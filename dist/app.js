const burgers = [
    {
        name: 'Bacon Extreme',
        img: 'img/menu/bacon extreme.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, eum!',
        cost: '$12.90',
    },
    {
        name: 'Big Bacon',
        img: 'img/menu/big bacon.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, eum!',
        cost: '$9.90',
    },
    {
        name: 'Chicken Burger',
        img: 'img/menu/chicken.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, eum!',
        cost: '$6.90',
    },
    {
        name: 'Double Cheese',
        img: 'img/menu/double cheese.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, eum!',
        cost: '$7.90',
    },
    {
        name: 'Crispy Fries',
        img: 'img/menu/fries.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, eum!',
        cost: '$4.90',
    },
    {
        name: 'Falavoured Fries',
        img: 'img/menu/flavoured fries.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, eum!',
        cost: '$5.90',
    }
]

const burger = document.querySelector('.nav__burger');
burger.addEventListener('click', function(){
    const navList = document.querySelector('.nav__list')
    navList.classList.toggle('open');
})

for (let i = 0; i < burgers.length; i++){
    let menuWrapper = document.querySelector('.menu__wrapper')
    let currentBurger = burgers[i]

    //menu__items
    let menuItems = document.createElement('div')
    menuItems.className = 'menu__items'
    
    menuItems.innerHTML = `
        <div class="menu__items__img"><img src="${currentBurger.img}" alt="Big Bacon"></div>
        <div class="menu__items__item">
            <h3>${currentBurger.name}</h3>
            <div class="line"></div>
            <div>
                <p>${currentBurger.description}</p>
                <p class="align-right">${currentBurger.cost}</p>
            </div>
        </div>
    `

    //append
    menuWrapper.appendChild(menuItems)
}


