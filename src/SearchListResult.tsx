import React from "react";
import SearchListItem from "./SearchListItem";
import ProductList from "./domain/ProductList";

export default class SearchListResult extends React.Component {
    render(){
        const firstList : ProductList = {
            id: "234gdjfhs",
            name: "minhas compras semanais",
            listOfProducts: [
                {
                    quantity: 1,
                    name: "Kindle",
                    price: 400.00,
                    isPurchased: true
                }
            ]
        
        }
        const secondList : ProductList = {
            id: "234gdjfhs",
            name: "compras da semana",
            listOfProducts: [
                {
                    quantity: 1,
                    name: "Kindle",
                    price: 400.00,
                    isPurchased: true
                }
            ]
        
        }
        const thirdList : ProductList = {
            id: "234gdjfhs",
            name: "lista de 2020",
            listOfProducts: [
                {
                    quantity: 1,
                    name: "Kindle",
                    price: 400.00,
                    isPurchased: true
                }
            ]
        
        }

        return(
            <div>
                <SearchListItem productList={firstList}/>
                <SearchListItem productList={secondList}></SearchListItem>
                <SearchListItem productList ={thirdList}></SearchListItem>
            </div>
            
        
        )
    }
}
