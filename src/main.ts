/* enum Behaviour {
    ki = 'kind',
    na = 'naughty',
    ne = 'neutral'
}

const behaviour = Behaviour.na
console.log(behaviour);
 */
// Vår egna typ
interface WishList {
    name: string;
    list: string[];
    behaviour: 'kind' | 'naughty' | 'neutral';
}

//Mockad data
const santasWishLists: WishList[] = [
    {
        name: 'David',
        list: ['Tesla', 'Värmetofflor'],
        behaviour: 'kind',
    },
    {
        name: 'My',
        list: ['Ponny', 'Barbie'],
        behaviour: 'naughty',
    },
    {
        name: 'Olivia',
        list: ['PS5', 'Ett pussel'],
        behaviour: 'neutral',
    }
];

// Här börjar programmet
window.addEventListener('load', main)

function main() {
    renderSantasWishLists();
    //Gör något annat
}

function renderSantasWishLists() {
   const main = document.querySelector('main');
   if (!main) return;

   main.innerText = ''; 
    for (const wishList of santasWishLists) {
        const div = createSingleWishListElement(wishList);
        main.append(div);
    }
}


/** Converts wishList data structure to a UI element representation */
function createSingleWishListElement(wishList: WishList) {
    // Skapa det omslutande elementet
    const div = document.createElement('div');
    div.className = 'wish-list-card';

    //Skapa rubrik
    const h3 = document.createElement('h3');
    h3.innerText = wishList.name;
    let emoji;
    switch(wishList.behaviour) {
        case 'kind': emoji = '😇'; break;
        case 'naughty': emoji = '😈'; break;
        case 'neutral': emoji = '😐'; break;
    }
    h3.innerText += ' ' + emoji;
    div.append(h3);
    
    // Skapa önskelistan
    const ul = document.createElement('ul');
    for (const wish of wishList.list) {
        const li = document.createElement('li');
        li.innerText = wish;
        ul.append(li);
    }
    div.append(ul);
    return div;
}