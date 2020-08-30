import React from "react";
import SearchBar from "./SearchBar"
import { SearchResult } from "semantic-ui-react";
import SearchListResult from "./SearchListResult"
import ProductList from "./domain/ProductList";
import SearchLisResult from "./SearchListResult";
import SearchListItem from "./SearchListItem";

export default class WebApp extends React.Component{
    render(){
        return <Menu> </Menu>
    }
}

class Titulo extends React.Component {
    render() {
        return (
            <div>
                <h1>Meu titulo</h1>
            </div>
        )
    }
}



class Menu extends React.Component {
    render() {
        

        return (
            <div>
                <Titulo/>
                <SearchBar></SearchBar>
                <SearchListResult></SearchListResult>
            

            

            </div>
        )
    }
}