import React from 'react';
import ItemComponent from './ItemComponent';

export default function ListComponent(){
    return (
    <div>
        <h2>Minha lista</h2>
        <ul>
            <ItemComponent name={'Item 1'} />
            <ItemComponent name={'Item 2'} />
        </ul>
    </div>
    );
    
}