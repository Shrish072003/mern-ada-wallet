const axios = require('axios');

const getADABalance = async (req, res) => {
    const { walletAddress } = req.params;

    // Replace the URL with the actual Eternl wallet testnet API URL
    try {
        const response = await axios.get(`https://testnet-eternl-wallet-api/${walletAddress}`);
        const balance = response.data.balance;
        res.json({ balance });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching ADA balance', error });
    }
};

const convertADAToUSD = async (req, res) => {
    try {
        const response = await axios.get(process.env.ADA_USD_API_URL, {
            headers: {
                'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            },
        });
        const adaToUsdRate = response.data.rate;
        res.json({ adaToUsdRate });
    } catch (error) {
        res.status(500).json({ message: 'Error converting ADA to USD', error });
    }
};

module.exports = { getADABalance, convertADAToUSD };
