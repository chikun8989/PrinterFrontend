import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Dashboard/Login';
import Home from './Home';
import HelpDesk from './Dashboard/HelpDesk';
import AddMoney from './Dashboard/AddMoney';
import Complain from './Dashboard/Complain';
import Term from './Dashboard/Term';
import Order from './Dashboard/Order';
import Transaction from './Dashboard/Transaction';
import Invoice from './Dashboard/Invoice';
import Changp from './Dashboard/Changp';
import Dashclip from './Dashboard/Dashclip';
import Dash from './Dashboard/Dash';
import Dashlast from './Dashboard/Dashlast';
import Createorder from './Dashboard/Createorder';
import Inv from './Dashboard/inv';
// import Dashboard from './Dashboard';
import Dashboard from './Dashboard/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/helpdesk" element={<HelpDesk />} />
        <Route path="/addmoney" element={<AddMoney />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/term" element={<Term />} />
        <Route path="/changep" element={<Changp />} />
        <Route path="/createorder" element={<Createorder />} />
        <Route path="/inv" element={<Inv />} />
        <Route path="/dashclip" element={<Dashclip />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/dashlast" element={<Dashlast />} />
        <Route path="/order" element={<Order />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </Router>
  );
}

export default App;


