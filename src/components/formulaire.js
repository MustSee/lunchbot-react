import React from 'react';
import axios from 'axios';
import path from './../settings/api-url-path.json';



export default class Formulaire extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name : "",
            adress : "",
            town : "Boulogne-Billancourt"
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onAdressChange = this.onAdressChange.bind(this);
        this.onTownChange = this.onTownChange.bind(this);
    }

    onNameChange(e) {
        this.setState({
            name : e.target.value
        })
    }

    onAdressChange(e) {
        this.setState({
            adress : e.target.value
        })
    }

    onTownChange(e) {
        this.setState({
            town : e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.name.value, e.target.adress.value, e.target.town.value);
        // Il faudrait récupérer aussi les valeurs longitude et lattitude..
        let post = JSON.stringify({
            "name" : e.target.name.value,
            "adress" : e.target.adress.value,
            "town" : e.target.town.value
        });

        let fullUrl = path.url + '/add_new_place_to_eat/' + post;
        axios.post(fullUrl).then(res => console.log(res)).catch( error => console.log(error));

    }

    render() {

        console.log(this.state.name, this.state.adress, this.state.town);


        return (
            <form className="addSpotFormula" onSubmit={this.handleSubmit}>

                <label>
                    Nom : <input type="text" name="name" placeholder={document.getElementById("mainInput").value} value={this.state.name} onChange={this.onNameChange} />
                </label>

                <label>
                    Adresse : <input  type="text" name="adress" value={this.state.adress} onChange={this.onAdressChange} />
                </label>

                <label>
                    Ville : <input type="text" name="town" value={this.state.town} onChange={this.onTownChange}/>
                </label>

                <input type="submit" />

            </form>
        )
    }
}