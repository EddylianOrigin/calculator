import React, { useState } from 'react';
import './layout.css'
import Output from './output';

const Layout = (props) => {
    let [input, setInput] = useState('')
    let [result, setResult] = useState('0')
    const handleClick = (event) => {
        const value = event.target.value;
        if (value === '=') {
            if (input !== '') {
                let res = ''
                try {
                    res = eval(input)
                } catch (err) {
                    setResult('Math error')
                }
                if (res === undefined) {
                    setResult('Math error')
                }
                else {
                    setResult(input + '=')
                    setInput(res)
                }
            }
        }
        else if (value === 'C') {
            setInput('')
            setResult('0')
        }
        else if (value === 'DEL') {
            let str = input
            str = str.substr(0, str.length - 1)
            setInput(str)
        }

        else {
            setInput((input += value))
        }

    };
    return (
        <div className='frame'>
            <div className='calculator'>
                <h2>MINI-CALCULATOR</h2>
                <br></br>
                <Output user={input} answer={result} />
                <h6 className='calculator-logo'>by EDDYLIAN</h6>
                <div className='keys'>
                    <input type='button' value={'C'} className='button clear' onClick={handleClick}></input>
                    <input type='button' value={'DEL'} className='button clear' onClick={handleClick}></input>
                    <input type='button' value={'%'} className='button operator' onClick={handleClick}></input>
                    <input type='button' value={'/'} className='button operator' onClick={handleClick}></input>

                    <input type='button' value={'7'} className='button ' onClick={handleClick}></input>
                    <input type='button' value={'8'} className='button ' onClick={handleClick}></input>
                    <input type='button' value={'9'} className='button ' onClick={handleClick}></input>
                    <input type='button' value={'*'} className='button operator' onClick={handleClick}></input>

                    <input type='button' value={'4'} className='button ' onClick={handleClick}></input>
                    <input type='button' value={'5'} className='button ' onClick={handleClick}></input>
                    <input type='button' value={'6'} className='button ' onClick={handleClick}></input>
                    <input type='button' value={'-'} className='button operator ' onClick={handleClick}></input>

                    <input type='button' value={'1'} className='button ' onClick={handleClick}></input>
                    <input type='button' value={'2'} className='button ' onClick={handleClick}></input>
                    <input type='button' value={'3'} className='button ' onClick={handleClick}></input>
                    <input type='button' value={'+'} className='button operator' onClick={handleClick}></input>

                    <input type='button' value={'0'} className='button ' onClick={handleClick}></input>
                    <input type='button' value={'.'} className='button ' onClick={handleClick}></input>
                    <input type='button' value={'='} className='equal-sign' onClick={handleClick}></input>
                </div>
            </div>
        </div >
    )
};

export default Layout;