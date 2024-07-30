import { useState } from "react";

// Sample Data for demonstration purposes
let data = [
    {name: 'Jack Jackson', email: 'jackj@abc.com', password: 'jackj'},
    {name: 'Katie Kates', email: 'katiek@abc.com', password: 'katiek'},
    {name: 'Glen Glenns', email: 'gleng@abc.com', password: 'gleng'}
]

export const Table = () => {

    // To manage new customer entry
    const [newCust, setNewCust] = useState({});

    const onSaveClick = () => {
        console.log('in onSaveClick()')
    }

    const onDeleteClick = () => {
        console.log('in onDeleteClick()')
    }

    const onCancelClick = () => {
        console.log('in onCancelClick()')
    }

    const handleListClick = () => {
        console.log('in handleListClick()')
    }

    return (
        <form name="Customer List">
            <fieldset>
                <legend>Customer List</legend>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Pass</th>
                        </tr>
                    </thead>
                    <tbody onClick={handleListClick}>
                        {data.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.name}</td>
                                <td>{entry.email}</td>
                                <td>{entry.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <legend>Update</legend>
                <label htmlFor="#name">Name</label>
                <input id="name" type="text"/><br/>
                <label htmlFor="#email">Email</label>
                <input id="email" type="email"/><br/>
                <label htmlFor="#pass">Password</label>
                <input id="pass" type="password"/> <br />
                <button type="button" onClick={onDeleteClick}>Delete</button>
                <button type="button" onClick={onSaveClick}>Save</button>
                <button type="button" onClick={onCancelClick}>Cancel</button>
            </fieldset>
        </form>
    )
}