import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {

    return(
        <div style = {{textAlign : 'center', padding : '0 2%', lineHeight : '25px'}}>
            try saying: <br />
            ADD {isIncome ? ' Income ' : ' Expense '} 
            FOR {isIncome ? ' Rs 100 ' : ' Rs 50 '} 
            in Category {isIncome ? ' Salary ' : ' House '} 
            for {isIncome ? ' Monday ' : ' Saturday '} 
        </div>
    )
}

export default InfoCard