import React, { useContext } from 'react';
import { Badge } from '@material-ui/core';
import { db } from '../store/storeSettings';

const TodoCategory = (props) => {
    const { item } = props;
    const { state, dispatch } = useContext(db);

    return (
        <div id="TodoCategory" className="TodoCategory" onClick={() => dispatch({ type: 'CATSELECTION', payload: { id: item.id } })}>
            <div id={item.id}>{item.CatName}</div>
            <div>
                <Badge badgeContent={item.BadgeNumber} max={999} color="primary" ></Badge>
            </div>
        </div >
    )
}

export default TodoCategory;