import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [walletAddress, setWalletAddress] = useState('');
    const [balance, setBalance] = useState(null);
    const [conversionRate, setConversionRate] = useState(null);

    const fetchBalance = async () => {
        try {
            const response = await axios.get(`/api/ada/balance/${walletAddress}`);
            setBalance(response.data.balance);
        } catch (error) {
            console.error('Error fetching balance:', error);
        }
    };

    const fetchConversionRate = async () => {
        try {
            const response = await axios.get('/api/ada/convert');
            setConversionRate(response.data.adaToUsdRate);
        } catch (error) {
            console.error('Error fetching conversion rate:', error);
        }
    };

    return (
        <div>
            <h1>ADA Wallet</h1>
            <input
                type="text"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="Enter Wallet Address"
            />
            <button onClick={fetchBalance}>Get Balance</button>
            {balance !== null && <p>Balance: {balance} ADA</p>}

            <button onClick={fetchConversionRate}>Get ADA to USD Rate</button>
            {conversionRate !== null && <p>1 ADA = {conversionRate} USD</p>}
        </div>
    );
};

export default App;
