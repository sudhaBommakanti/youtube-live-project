import React from 'react';
import information from '../information.json';

function Card() {
    console.log("json data:",information);
   /*  const listItems = cards.map((card) => 
        <article key={card.id}>
            <h2>card.category</h2>
            <p>card.description</p>
        </article>    
    );*/  

    return (
        
        <article>
            <h2>{information[0].category}</h2>
            </article>
           
        
    );
    
}
export default Card;