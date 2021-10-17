import React from 'react'
import currency from '../../../images/currency.jpg'
import line from '../../../images/career-line.jpg'

function CurrencyConverter() {
    return (
        <div>
             <img className='aboutBg' src={currency} />
            <div className='container'>
                <div className='content-area'>
                    <h1 className='title' style={{ textAlign: 'start' }} >Currency Converter</h1>
                    <img width='100%' src={line} />
                </div>
                
            </div>
        </div>
    )
}

export default CurrencyConverter
