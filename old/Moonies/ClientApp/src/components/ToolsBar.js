import React,{useEffect, useContext} from 'react';
import {db} from '../store/storeSettings';
import {MdViewList} from 'react-icons/md';
import {IoIosCard} from 'react-icons/io';


const ViewType = {
    List:'list',
    Card:'card'
}
const ToolsBarItems = [
    {id:1, viewType:ViewType.List, name:ViewType.List, icon:"MdViewList"}
    ,{id:2, viewType:ViewType.Card, name:ViewType.Card, icon:"IoIosCard"}
]

const ToolsBar = (props) =>
{
    const {state, dispatch} = useContext(db);

    useEffect(()=>{

    },[]);


    return(
        <div id="ToolsBar_Root">
           {ToolsBarItems.map(item=>
            <div key={item.id} className={`ToolsBarItem${item.id}`}>

                     {(item.icon==="MdViewList"&&state.dataTheme.acts_theme==="")&& (<MdViewList className="acts_layout" onClick={()=>{dispatch({type:'UPDATEACTSTHEME',payload:{theme:'list'}});}} />)}
                     {(item.icon==="IoIosCard"&&state.dataTheme.acts_theme==="list")&& (<IoIosCard className="acts_layout" onClick={()=>{dispatch({type:'UPDATEACTSTHEME',payload:{theme:''}});}} />)}


            </div>
           )}
        </div>
    )
}
export default ToolsBar;