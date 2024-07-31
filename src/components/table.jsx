import { useState } from "react";

// Sample Data for demonstration purposes
let customers = [
    {name: 'Jack Jackson', email: 'jackj@abc.com', password: 'jackj', id: 1},
    {name: 'Katie Kates', email: 'katiek@abc.com', password: 'katiek', id: 2},
    {name: 'Glen Glenns', email: 'gleng@abc.com', password: 'gleng', id: 3}
]

const newCustomer = {
    name: "",
    email: "",
    password: "",
    id: -1
}

export const Table = ({ customers }) => {

    // To manage new customer entry
    const [cust, setCust] = useState(newCustomer);

    const handleChange = (e) => {
        setCust({
            ...cust,
            [e.target.id]: e.target.value
        })
    }

    const onSaveClick = () => {
        console.log('in onSaveClick()')
    }

    const onDeleteClick = () => {
        console.log('in onDeleteClick()')
    }

    const onCancelClick = () => {
        console.log('in onCancelClick()')
        setCust(newCustomer)
    }

    const handleListClick = (index) => {
        console.log('in handleListClick()')
        if(customers[index].id === cust.id) {
            setCust(newCustomer)
        } else {
            setCust(customers[index])
        }
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
                        <tbody>
                            {customers.map((entry, index) => (
                                <tr key={index} onClick={() => handleListClick(index)}>
                                    {cust.id === entry.id?(
                                        <>
                                            <td><strong>{entry.name}</strong></td>
                                            <td><strong>{entry.email}</strong></td>
                                            <td><strong>{entry.password}</strong></td>
                                        </>
                                    ):(
                                        <>
                                            <td>{entry.name}</td>
                                            <td>{entry.email}</td>
                                            <td>{entry.password}</td>
                                        </>
                                    )}
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
                                <td><input id="name" type="text" value={cust.name} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="#email">Email:</label></td>
                                <td><input id="email" type="email" value={cust.email} onChange={handleChange}/></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="#pass">Pass:</label></td>
                                <td><input id="pass" type="password" value={cust.password} onChange={handleChange}/></td>
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