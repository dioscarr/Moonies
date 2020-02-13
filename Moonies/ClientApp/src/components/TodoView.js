import React, { useContext } from 'react'
import TodoTemplate from './TodoTemplate';
import { db } from '../store/storeSettings';
import TodoCategoryView from './TodoCategoryView';
import '../css/TodoCategoryView.css';

const TodoView = () => {

  const { state, dispatch } = useContext(db);
  const GroceryTodoList = state.dataGroceryTodo;

  return (<div id='TodoView' className="GroceryShoppingRow">
    <TodoCategoryView />
    <div>Groceries Shopping</div>
    <input type="text" onChange={() => { }} /><button>Add</button>
    {GroceryTodoList.filter(item => item.CategoryId === state.Selections.SelectedCategoryId).map(todo => <TodoTemplate key={todo.id} todo={todo} />)}
  </div>);
}
export default TodoView;