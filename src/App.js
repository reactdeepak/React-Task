import "./App.css";
import { AiOutlineDelete, AiOutlineSwap } from "react-icons/ai";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [done, setDone] = useState([]);
  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };

    setTodos([...allTodos, newTodoItem]);
    toast.success("🧾 Item Added", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const swapAll = () => {
    toast.success("Thank you modi ji", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    let buffer = [...allTodos];
    setTodos([...done]);
    setDone(buffer);
  };
  const addItemTodo = (index) => {
    setDone((prevTodo) => {
      setTodos([...allTodos, { ...done[index] }]);
      return prevTodo.filter((item, i) => i !== index);
    });
    toast("😄 Moved to Todo", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleDeleteTodo = (index) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((item, i) => i !== index);
    });
    toast.error("🗑️ Item removed", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const handleDone = (index) => {
    setDone([...done, { ...allTodos[index] }]);
    setTodos((prevTodo) => {
      return prevTodo.filter((item, i) => i !== index);
    });
    toast("😄 Moved to Done", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="App">
      <div className="header">
        <h1>ToDo List</h1>
        <button className="dev" onClick={swapAll}>
          Swap All
        </button>
      </div>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
              placeholder="Task"
            />
          </div>

          <div className="todo-input-item">
            <label>Description</label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => {
                setNewDescription(e.target.value);
              }}
              placeholder="Description"
            />
          </div>

          <div className="todo-input-item">
            <button onClick={handleAddTodo} className="primaryBtn">
              Add
            </button>
          </div>
        </div>
        <div className="btn-area">
          <button
            className={`secondaryBtn ${isCompleteScreen === false && "active"}`}
            onClick={() => setIsCompleteScreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondaryBtn ${isCompleteScreen === true && "active"}`}
            onClick={() => setIsCompleteScreen(true)}
          >
            Done
          </button>
        </div>
        <div className="todo-list">
          {!isCompleteScreen &&
            allTodos.map((item, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div>
                    <AiOutlineDelete
                      onClick={() => handleDeleteTodo(index)}
                      className="icon"
                    />
                    <AiOutlineSwap
                      onClick={() => {
                        handleDone(index);
                      }}
                      className="check-icon"
                    />
                  </div>
                </div>
              );
            })}
          {isCompleteScreen === true &&
            done.map((item, index) => {
              return (
                <div className="todo-list-item" key={index}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <AiOutlineSwap
                    onClick={() => {
                      addItemTodo(index);
                    }}
                    className="check-icon"
                  />
                </div>
              );
            })}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
