import React from 'react'

const TodoTemplate = (props) => {
  const { todo } = props;
  return (<div className="GroceryItem">
    <div>
      <label>
        <input type="checkbox" onChange={() => { }} /></label></div>
    <div>{todo.Name}</div>
    <div>${todo.Budget}</div>
    <div><input type="text" /></div>
    <div>${todo.Price}</div>
    <div><input type="text" /></div>
  </div>);
}

export default TodoTemplate;