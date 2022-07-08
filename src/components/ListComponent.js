import React from 'react';
import ItemComponent from './ItemComponent';

export default function ListComponent(props){
    const itens = props.itens
    return (
        <div>
            <h3>{props.listName}</h3>
            
            <ul>
                {itens.map(item => <ItemComponent key={item.id} 
                                                  nome={item.nome}
                                                  status={item.finalizado} />)}
            </ul>
        </div>
    )
}