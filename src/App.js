import React, {} from 'react';
import Navbar from './components/Navbar';
import QuestionList from './components/QuestionList';
import data from './data';

function App() {

    return (
        <main>
            <Navbar />
            <QuestionList questions={data}/>
        </main>
    )
}

export default App;