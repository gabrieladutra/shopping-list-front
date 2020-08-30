import React from 'react'
import ProductList from './domain/ProductList'
import {Icon} from 'semantic-ui-react'
import './App.css'

export default class SearchListItem extends React.Component<
    SearchListItemProps
> {
    render() {
        return (
            <div className="listName">
                <Icon name="list" size="large" />
                <div>
                    <h3>{this.props.productList.name}</h3>
                </div>
            </div>
        )
    }
}

export interface SearchListItemProps {
    productList: ProductList
}
