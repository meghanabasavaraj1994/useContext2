import React from 'react';
import Layout from "./Layout";
import ThemeContext, {themes} from "./ThemeContext";
import './App1.css'

function UseContext2() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Layout/>
        </ThemeContext.Provider>
    );
}

export default UseContext2