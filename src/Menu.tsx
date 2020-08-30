import React from 'react'
import SearchBar from './SearchBar'
import SearchListResult from './SearchListResult'
import {Titulo} from './Titulo'

export class Menu extends React.Component {
    render() {
        return (
            <div>
                <Titulo />
                <SearchBar />
                <SearchListResult />
            </div>
        )
    }
}
