import React from 'react';
import axios from 'axios';
import path from './../settings/api-url-path.json';
import Formulaire from './formulaire';



export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spots : [],
            pressedEnter : false
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

    }

    handleTextChange(event) {
        this.setState({pressedEnter : false});
        if(event.target.value.length > 0) {
            let fullUrl = path.url + '/autocomplete/' + event.target.value;
            axios.get(fullUrl)
                .then(res => {
                    this.setState({
                        spots : res.data.places
                    })
                });
        } else {
            this.setState({spots : [] });
        }
    }

    handleKeyPress(event) {
        if(event.charCode === 13) {
            this.setState({pressedEnter : true})
        }
    }



    render() {

        console.log(this.state.spots);

        return(
            <div>
                <input
                    id="mainInput"
                    type="text"
                    placeholder="Entrez une bonne adresse"
                    onChange={this.handleTextChange}
                    onKeyPress={this.handleKeyPress}
                />
                {
                    this.state.spots.length > 0 ?
                        <ul>
                            {
                                this.state.spots.slice(0, 10).map( (element, index) => {
                                    return (
                                        <li key={element.denomination}
                                            value={element.denomination}
                                            onClick={this.changeInputValue}
                                        >
                                            {element.denomination}
                                        </li>
                                        )
                                })
                            }
                        </ul>

                    : this.state.pressedEnter ?
                        <Formulaire />
                        : <span></span>
                }

            </div>
        )
    }
}