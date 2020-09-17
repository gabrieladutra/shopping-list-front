import React from 'react'
import SearchListItem from './SearchListItem'
import ProductList from './domain/ProductList'
import axios from 'axios'

export default class SearchListResult extends React.Component<
    SearchListResultProps,
    SearchListResultState
> {
    constructor(props: SearchListResultProps) {
        super(props)

        this.state = {
            productLists: [],
        }
    }

    componentDidMount = () => {
        this.searchLists('a')
    }

    render() {
        const results = this.state.productLists.map(currentList => (
            <SearchListItem productList={currentList} key={currentList.id} />
        ))

        return <div>{results}</div>
    }

    private searchLists = async (name: string) => {
        const response = await axios.get<ProductList[]>(
            'http://localhost:8080/list',
            {
                params: {name},
            }
        )
        if (response.status != 200) {
            console.log('Error getting lists')
        }
        const productLists = response.data
        this.setState({productLists})
    }
}

interface SearchListResultProps {}

interface SearchListResultState {
    productLists: ProductList[]
}
