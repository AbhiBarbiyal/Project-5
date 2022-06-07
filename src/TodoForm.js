import React from 'react'

export const TodoForm = ({task, taskChangeHandler, addTaskHandler, allTaskHandler, doneTaskHandler, yetTaskHandler}) => {
  return (
      <>
    <input value={task} onChange={taskChangeHandler} className="input" />
      <button onClick={addTaskHandler} className="btn">
        Add Task
      </button>
      <button onClick={allTaskHandler} value="All tasks">
        All Task
      </button>
      <button onClick={doneTaskHandler} value="Done Tasks">
        Done Tasks
      </button>
      <button onClick={yetTaskHandler} value="Yet to be">
        Yet to be Done
      </button>
      </>
  )
}
