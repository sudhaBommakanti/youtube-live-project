import React from 'react';

function Card() {
    const cards = require('../information.json');
    console.log("json data:",cards);
    const listItems = cards.map((card) => 
        <article key={card.id}>
            <h2>card.category</h2>
            <p>card.description</p>
        </article>     
    );

    return (
        
        <div>
            <h2>check</h2>
            {listItems.id}
        </div>
    );
    
}
export default Card;