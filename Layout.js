import React, {useContext} from "react";
import ThemeColorBackground from "./ThemeContext";

const Layout = () => {

    const theme = useContext(ThemeColorBackground)

    return (
        <div style={theme}>
            <p id='theme'>Changing theme using useContext hook</p>
        </div>
    )
};

export default Layout