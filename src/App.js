import React from 'react'
import axios from 'axios'

import TicketTable from './Table'

class App extends React.Component{
    constructor(){
        super()
        this.state ={ 
            tickets : []
        }
    }
    componentDidMount(){
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=2ecc8ca09b16ab52')
        .then(response => {
            console.log(response.data)
            this.setState(() => ({
                tickets : response.data

            }))
        })
    }

    render(){
        return(
            <div>
                <h1> Ticket Handle </h1>
                <h2>Listing Tickets - {this.state.tickets.length} </h2>
                <TicketTable tickets = {this.state.tickets} />
            </div>
        )
    }
}
export default App