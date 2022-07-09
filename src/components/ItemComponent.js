import React from 'react';

export default function ItemComponent(props){
    const status = props.status
    return (
        <div>         
            <li>
               { props.nome }
                <p> Status.: { status ? 'finalizado' : 'a fazer' }</p> 
            </li>

        </div>
    )
}