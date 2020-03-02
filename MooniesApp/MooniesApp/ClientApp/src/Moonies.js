import React, { useState, useReducer, useEffect } from 'react';
import './App.scss';
import './moonies.scss'
import { db } from './store/storeSettings';
import dataCollections from './store/data';
import dbReducer from './store/dbReducer';
import { getInitialMode } from './utility/Locals';
import authService from './components/api-authorization/AuthorizeService'



// import components
import AccountsView from './components/Accounts/AccountsView';
import AddView from './components/Accounts/AddView';
import FundsSummary from './components/FundsSummary'
import ToolsBar from './components/ToolsBar';
import Header from './components/Header';
import TodoView from './components/TodoView';

function Moonies() {

    const [darkMode, setDarMode] = useState(getInitialMode());
    const [state, dispatch] = useReducer(dbReducer, dataCollections)

    useEffect(() => {
        console.log("render");
        localStorage.setItem('dark', JSON.stringify(darkMode));
        dispatch({ type: 'THEMEMODE', payload: { mode: darkMode } });
    }, [darkMode]);

    useEffect(() => {
        dispatch({ type: 'UPDATETOTALS' });
        populateWeatherData();
    }, []);
    const populateWeatherData = async () => {
        debugger;
        const token = await authService.getAccessToken();
        console.log(token);
        setTimeout(async function () {
            debugger;
            await fetch('api/ProfileAccount/GetAccount', {
                headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
            }).then(r => {
                debugger;
                return r.json();
            }).then(r => {
                debugger;
                dispatch({ type: 'SET_FUNDS', payload: { AvailableFunds: r.availableFunds } });
            });
        }, 5000);

    }

    return (
        <db.Provider value={{ state, dispatch }} >
            <div data-theme={state.dataTheme.theme} id="todoGridParent" className={darkMode ? "Dark-Mode" : "Light-Mode"}>
                {(state.visible.isHeaderVisible) && <Header />}
                {(state.visible.isSummaryVisible) && (<div data-theme={state.dataTheme.theme} id="FundsSummaryRoot"><FundsSummary /></div>)}
                {/* {(state.visible.isAddViewVisible) && (<div data-theme={state.dataTheme.theme} id="ManageFundsRoot"><AddView /></div>)} */}
                {/* {(state.visible.isToolBarVisible) && (<div id="ToolsBarRoot"><ToolsBar /></div>)} */}
                {(state.visible.isAccountView) && (<div data-theme={state.dataTheme.theme} data-accounts-layout={state.dataTheme.acts_theme} id="FundsView" className="CollectionOfAvailFunds"><AccountsView /></div>)}
                <div id="todoViewContainer">
                    {/* <TodoView /> */}
                </div>
            </div>
        </db.Provider >
    );
}

export default Moonies;
