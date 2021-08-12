import React from "react"


export default class Items extends React.Component{

    state = {
        count: 0 
    }

    render(){

        const allItems = this.props.item.map((item) => {
            return(<>
                <h1>{item.id}</h1>
                <h1>{item.name}</h1>
                <h1>{item.age}</h1>
                <h1>{item.count}</h1>
            </>)

            
        })
        return (
            <div>
            {allItems}
            <h1>{this.state.count}</h1>
            </div>
        )
    }
}