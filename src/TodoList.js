import React, { useEffect } from 'react'

export const TodoList = ({tasks, filterTask, isDoneHandler, editHandler, deleteHandler}) => {

    // if(filterTask == "All tasks" && (tasks.status || !tasks.status)){
        
    // }




  return (
    <>
    {tasks.map((task) => {
        if (filterTask == "All tasks") {
          return (
            <li key={task.id} className="todo-list">
              <input
                type="checkbox"
                checked={task.status ? 'checked' : ''}
                onChange={() => {
                  {
                    isDoneHandler(task.id);
                  }
                }}
              />
              <h3>{task.name}</h3>
              <button onClick={() => {editHandler(task.id)}}>Edit</button>
              <button
                onClick={() => {
                  deleteHandler(task.id);
                }}
                className="btn"
              >
                Delete
              </button>
            </li>
          );
        }
        if (filterTask == "Done Tasks") {
          if (task.status == true) {
            return (
              <li key={task.id} className="todo-list">
                <input
                  type="checkbox"
                  checked={task.status ? 'checked' : ''}
                  onChange={() => {
                    {
                      isDoneHandler(task.id);
                    }
                  }}
                />
                <h3>{task.name}</h3>
                <button
                  onClick={() => {
                    deleteHandler(task.id);
                  }}
                  className="btn"
                >
                  Delete
                </button>
              </li>
            );
          }
        }
        if (filterTask == "Yet to be") {
          if (task.status == false) {
            return (
              <li key={task.id} className="todo-list">
                <input
                  type="checkbox"
                  onChange={() => {
                    {
                      isDoneHandler(task.id);
                    }
                  }}
                />
                <h3>{task.name}</h3>
                <button
                  onClick={() => {
                    deleteHandler(task.id);
                  }}
                  className="btn"
                >
                  Delete
                </button>
              </li>
            );
          }
        }
      })}
    </>
  )
}
