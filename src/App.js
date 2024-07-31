import logo from './logo.svg';
import './App.css';
import { Table } from './components/table';
import { getAll, get, post, put, deleteById } from './memdb';
import { useEffect, useState } from 'react';

function App() {
const [customers, setCustomers] = useState([]);

const getCustomers = () => {
  console.log('in getCustomers()')
  setCustomers(getAll());
}

useEffect(() => {
  getCustomers();
}, [])

  return (
    <div className="App">
      <Table customers={customers}/>
    </div>
  );
}

export default App;
