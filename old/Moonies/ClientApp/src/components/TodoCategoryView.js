import React, { useState, useContext } from 'react';
import { db } from '../store/storeSettings';

import TodoCategory from './TodoCategory';
import Fab from '@material-ui/core/Fab';
import { FaPiggyBank } from 'react-icons/fa';

const TodoCatData = [
    { id: 1, BadgeNumber: '25', CatName: "Groceries" },
    { id: 2, BadgeNumber: '$245', CatName: "Bedroom Budget" },
    { id: 3, BadgeNumber: '25', CatName: "Groceries" },
    { id: 4, BadgeNumber: '45', CatName: "Bedroom Budget" },
    { id: 5, BadgeNumber: '65', CatName: "Groceries" },
    { id: 6, BadgeNumber: '28', CatName: "Bedroom Budget" },
    { id: 7, BadgeNumber: '245', CatName: "Home Depot" }
]

const useCategoryForm = initial => {
    const [fields, setFields] = useState(initial)
    function setState(props) {
        debugger;
        setFields({ ...fields, [props.name]: props.value });
    }
    return [fields, setState];
}

const TodoCategoryView = () => {
    const [fields, setState] = useCategoryForm({ catname: '' })
    const { dispatch } = useContext(db);
    return (<div id="TodoCategoryView" className="TodoCategoryView">
        <Fab style={{ gridColumn: '1/8', justifySelf: 'start', fontSize: '33px' }} className="AddCat" onClick={() => dispatch({ type: 'ADDCAT', payload: { categorName: 'wsds' } })} color="primary" aria-label="add">
            +
        </Fab>
        <input type="text" name="catname" onChange={e => setState({ name: e.target.value })} value={fields.catname} />
        {TodoCatData.map(item => <TodoCategory key={item.id} item={item} />)}
    </div>)
}
export default TodoCategoryView;