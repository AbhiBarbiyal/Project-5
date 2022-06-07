import "./App.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { TodoForm } from "./TodoForm";
import {TodoList} from './TodoList'
// var tasks = [{ task: "Add your tasks", id: 1 }];

function App() {
  
  

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  // const [tasks.status, settasks.status] = useState(false);
  const [filterTask, setFilterTask] = useState("All tasks");
  // const [addTask, setAddTask] = useState(false);
  useEffect(() => {
    let tempTasks = localStorage.getItem('tasks');
    console.log(tempTasks)
    if(!tempTasks) {
      setTasks([]);
    }else {
      setTasks(JSON.parse(tempTasks))
    }

  }, [])

 
  const addTaskHandler = () => {
    let dum_tasks = [...tasks, { name: task, id: nanoid(), status: false }]
    setTasks(dum_tasks);
    
    // tasks.push({ task: task, id: nanoid(), status: false });
    // console.log(tasks);
    // setAddTask(!addTask);
    localStorage.setItem('tasks', JSON.stringify(dum_tasks));
    console.log(tasks);
    setTask("");
  };

  const taskChangeHandler = (e) => {
    setTask(e.target.value);
    console.log(task);
  };

  const deleteHandler = (id) => {
    const tasks_array = tasks.filter((task) => task.id != id);
    setTasks(tasks_array);
    localStorage.setItem('tasks', JSON.stringify(tasks_array));
  };

  const isDoneHandler = (id) => {
    const index = tasks.findIndex((object) => {
      return object.id === id;
    });
    let task_dum = tasks;
    // setTasks();
    task_dum[index].status = !tasks[index].status;
    setTasks([...task_dum]);
    console.log(task_dum[index]);
    localStorage.setItem('tasks', JSON.stringify(task_dum));

    
    // settasks.status((prevState) => (prevState = !prevState));

    //     setObject((prevState) => ({
    //   ...prevState,
    //   secondKey: 'value',
    // }));
    // setTimeout((), 10);
    // setTasks((prevState) => (prevState = task_dum));
  };

  // const taskFilterHandler = (e) => {
  //   setFilterTask(e.target.value);
  //   console.log(filterTask);
  //   // console.log(e.target.value);
  //   // if (e.target.value == "All Task") {
  //   //   let allTaskList = tasks.filter((task) => {
  //   //     task.status === e.target.value;
  //   //   });
  //   //   setTasks(allTaskList);
  //   // } else if (filterTask == "Done Task") {
  //   //   let allTaskList = tasks.filter((task) => {
  //   //     task.status === filterTask;
  //   //   });
  //   //   setTasks(allTaskList);
  //   // } else if (filterTask == "Yet To Be Done Tasks") {
  //   //   let allTaskList = tasks.filter((task) => {
  //   //     task.status === filterTask;
  //   //   });
  //   //   setTasks(allTaskList);
  //   // }
  // };

  // let tasksList =
  // if (filterTask == "Done Tasks") {
  //   tasksList = (
  //     <li className="todo-list">
  //       <input type="checkbox" onClick={tasks.statusHandler} />
  //       {!tasks.status ? <h3>{tasks.task}</h3> : <s>{tasks.task}</s>}
  //       <button
  //         onClick={() => {
  //           deleteHandler(tasks.id);
  //         }}
  //         className="btn"
  //       >
  //         Delete
  //       </button>
  //     </li>
  //   );
  // }

  const allTaskHandler = (e) => {
    setFilterTask(e.target.value);
    console.log(e.target.value);
  };
  const doneTaskHandler = (e) => {
    setFilterTask(e.target.value);
    console.log(e.target.value);
  };
  const yetTaskHandler = (e) => {
    setFilterTask(e.target.value);
    console.log(e.target.value);
  };

  const editHandler = (id) => {

    setTask(tasks)
  }

  return (
    <>
      <TodoForm task={task} taskChangeHandler={taskChangeHandler} addTaskHandler={addTaskHandler} allTaskHandler={allTaskHandler}  doneTaskHandler={doneTaskHandler} yetTaskHandler={yetTaskHandler}/>
      {/* <select onClick={taskFilterHandler}>
        <option>All tasks</option>
        <option>Done Tasks</option>
        <option>Yet To Be Done Tasks</option>
        <option></option>
      </select> */}
      {/* {tasks.map((task) => {
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
      })} */}
      <TodoList tasks={tasks} filterTask={filterTask} isDoneHandler={isDoneHandler} editHandler={editHandler} deleteHandler={deleteHandler}/>
      <br></br>
      <div className="counter">{/* <Counter /> */}</div>
    </>
  );
}

// function List({ task, id }) {

//   return (
//     <div className="card">
//       <ul>
//         <li className="todo-list">
//           <h3>{task}</h3>
//           <button
//             onClick={() => {
//               deleteHandler(id);
//             }}
//             className="btn"
//           >
//             Delete
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// }
// let cigarPrice = 10;
// let totalAmount = 500;

// const Counter = () => {
//   const [counter, setCounter] = useState(0);

//   const minusClickHandler = () => {
//     if (counter > 0) {
//       setCounter(counter - 1);
//       totalAmount += cigarPrice;
//     }
//   };

//   const plusClickHandler = () => {
//     setCounter(counter + 1);
//     totalAmount -= cigarPrice;
//   };
//   return (
//     <>
//       <h2>Total Amount</h2>
//       <p>{totalAmount}</p>
//       <h3>cigar</h3>
//       <p>${cigarPrice}</p>
//       <button className="btn" onClick={minusClickHandler}>
//         -
//       </button>
//       <input type="number" value={counter} />
//       <button className="btn" onClick={plusClickHandler}>
//         +
//       </button>
//     </>
//   );
// };

export default App;
