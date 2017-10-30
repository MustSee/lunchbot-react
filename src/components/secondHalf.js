import React from 'react';
import SearchBar from './searchBar';

export default class SecondHalf extends React.Component {
    render() {
        return (
            <div className="secondHalf">
                <div className="top"></div>
                <div className="main">
                    <SearchBar />
                </div>
            </div>

        )
    }
}