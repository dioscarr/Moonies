import React, { useState, useContext, useEffect } from 'react';
import { db } from '../store/storeSettings';
import { getInitialMode } from '../utility/Locals';
const visible =
{
    isHeaderVisible: true
    , isSummaryVisible: true
    , isAddViewVisible: false
    , isToolBarVisible: false
    , isAccountView: false
}
const Header = () => {
    const [darkMode, setDarMode] = useState(getInitialMode());
    const { state, dispatch } = useContext(db);
    useEffect(() => {
        console.log("render");
        localStorage.setItem('dark', JSON.stringify(darkMode));
        dispatch({ type: 'THEMEMODE', payload: { mode: darkMode } });
    }, [darkMode]);
    return (
        <div data-theme={state.dataTheme.theme} id="HeaderRoot">
            <div data-theme={state.dataTheme.theme} className="App_Title" >
                <span className="moonies">
                    <span>M</span>
                    <span>o</span>
                    <span>o</span>
                    <span>n</span>
                    <span>i</span>
                    <span>e</span>
                    <span>$</span>
                </span>
            </div>
            <div className="toggle-container">
                <span style={darkMode ? { color: 'black' } : { color: 'yellow' }}>☼</span>
                <span className="toggle">
                    <input
                        checked={darkMode}
                        onChange={() => { setDarMode(prevState => !prevState); }}
                        type="checkbox"
                        className="checkbox"
                        id="checkbox"
                    />
                    <label htmlFor="checkbox" />
                    <span style={!darkMode ? { color: 'black' } : { color: 'Purple' }}>☽</span>
                </span>
            </div></div>
    );
}
export default Header;