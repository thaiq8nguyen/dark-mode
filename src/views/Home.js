import React from 'react'
import Charts from '../components/Charts';
import useCoinGecko from '../hooks/useCoinGecko';

const Home = () => {
    const [coinData, setCoinData] = useCoinGecko();

    return (
        <section className="section">
            <div className="container">
                <Charts coinData={coinData}/>
            </div>
        </section>
    )
}

export default Home
