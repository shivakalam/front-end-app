import { useState } from "react";

// Sample Data for demonstration purposes
let data = [
    {name: 'Jack Jackson', email: 'jackj@abc.com', password: 'jackj', id: 1},
    {name: 'Katie Kates', email: 'katiek@abc.com', password: 'katiek', id: 2},
    {name: 'Glen Glenns', email: 'gleng@abc.com', password: 'gleng', id: 3}
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
        <div>
            <div className="boxed">
                <h4>Customer List</h4>
                    <table id="customer-list">
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
                </div>
                <div className="boxed">
                    <h4>Update</h4>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="#name">Name:</label></td>
                                <td><input id="name" type="text"/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="#email">Email:</label></td>
                                <td><input id="email" type="email"/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="#pass">Pass:</label></td>
                                <td><input id="pass" type="password"/></td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button type="button" onClick={onDeleteClick}>Delete</button>
                                    <button type="button" onClick={onSaveClick}>Save</button>
                                    <button type="button" onClick={onCancelClick}>Cancel</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}