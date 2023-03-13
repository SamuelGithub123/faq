import React, {useState} from 'react';
import Navbar from './components/Navbar';
import QuestionList from './components/QuestionList';

function App() {

    return (
        <main>
            <Navbar />
            <QuestionList />
        </main>
    )
}

export default App;