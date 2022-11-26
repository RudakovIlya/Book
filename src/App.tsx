import React from 'react';
import './App.css';
import {Book} from "./Book/Book";
import Preloader from "./Preloader/Preloader";

type AppPropsType = {
    isLoading: boolean
}

function App(props: AppPropsType) {
    return (
        props.isLoading ?
        <div>
            <Book name={'JS for beginners'} price={200} year={2022}></Book>
            <hr/>
            <Book name={'React for beginners'} price={300} year={2015}/>
            <hr/>
        </div> : <Preloader/>
    )
}

export default App;
