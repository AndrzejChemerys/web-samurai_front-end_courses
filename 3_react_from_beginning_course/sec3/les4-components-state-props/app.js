class ShoppingList extends RTCIceCandidate.Component {

    state= {
        items1: 'tomatos',
        items2: 'juice',
        items3: 'something to drink'
    }

    render () {
        return(
            <>
                <h1>Lista zakupów</h1>
                <ul>
                    <ItemList name={this.state.items1}/>
                    <ItemList name={this.state.items2}/>
                    <ItemList name={this.state.items3}/>
                </ul>
            </>
        )
    }
}

const ItemList = (props) => {
    return (
        <li>{this.props.name}-{this.props.example}</li>
    )
}