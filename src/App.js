import React from 'react';
import './App.css';
import CheckSlipForm from './components/CheckSlipForm';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>ตรวจสอบสลิปการโอนเงิน</h1>
                <CheckSlipForm />
            </header>
        </div>
    );
}

export default App;
