import React from 'react';
import ListComponent from './ListComponent';

export default class UserLists extends React.Component{
    state = { listas: [], loading: true }

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token ' + localStorage.getItem('token');

        var url = "http://127.0.0.1:8000/Lista/";
        
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data) 
        this.setState({listas: data, loading: false})
    }

    render()
    {
        const listasApi = this.state.listas;
        return (
            <div>
                {listasApi.map(lista =>
                    <ListComponent key={lista.id} 
                                    listName={lista.nome} 
                                    itens={lista.item_set}/> )}
            </div>
        )
    }
}