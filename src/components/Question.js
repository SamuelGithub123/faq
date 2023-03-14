import React, { useState } from 'react';

const Question = ({ title, answer }) => {

    const [show, setShow] = useState(false);


    return (
        <section className='question'>
            <h1>{title}</h1>
            
            {show ? <button className='button' onClick={() => setShow(!show)}><span className='button-text'>hide</span></button> : 
            <button className='button' onClick={() => setShow(!show)}><span className='button-text'>show</span></button> }
            {show ? <p>{answer}</p> : null}
        </section>
    )

}

export default Question;