import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AddOther from './components/AddOther';
import AllOther from './components/AllOther';
import FinanceDash from './components/financeDash';
import Bill from './components/bill';
import CreateBill from './components/createBill';
import UpdateOther from './components/updateOther';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UpdateBill from './components/updateBill';
import BillPreview from './components/billPreview';
import AddProfit from './components/AddProfit';
import ProfitDetails from './components/viewProfit';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>
      <br></br>
      <br></br><br></br>
      <br></br>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/otherExpense/add" element={<AddOther/>}/>
        <Route path="/otherExpense" element={<AllOther/>}/>
        <Route path="/CreateBill" element={<CreateBill/>}/>
        <Route path="/otherExpense/update/:id" element={<UpdateOther/>}/>
        <Route path="/finance" element={<FinanceDash/>}/>
        <Route path="/profit/:month" element={<AddProfit/>}/>
        <Route path="/profit/get/:id" element={<ProfitDetails/>}/>

        <Route path="/bill" element={<Bill/>}/>
        <Route path="/bill/update/:id" element={<UpdateBill/>}/>
        <Route path="/bill/preview/:id" element={<BillPreview/>}/>
      </Routes>  
    
  </div>
  </BrowserRouter>
    
  );
}

export default App;