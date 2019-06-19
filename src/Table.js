import React from 'react'
import TicketRow from './Row'

const TicketTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                <th>Code</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Priority</th>
                    <th>Message</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {props.tickets.map(ticket => {
                    return <TicketRow key ={ticket.id} ticket={ticket}/>
                })}
            </tbody>
        </table>
    )
}
export default TicketTable
