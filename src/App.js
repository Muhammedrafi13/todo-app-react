import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setToDos] = useState([]);
  const [todo, setTodo] = useState();
  const handleSubmit = ()=>{
    if (todo.trim() === '') {
      alert('please add some task')
      return; 
    }
    const isDuplicate = todos.some((item) => item.text === todo);
    if (isDuplicate) {
      alert('Task already exists!');
      return;
    }

    setToDos([...todos, { id: Date.now(), text: todo, status: false }]);
    setTodo('');

  }
  console.log(todos);
  return (
    <>
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2> Lets have a Great Plan to Focus</h2>
        </div>
        <div className="input">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="🖊️ Add item..."
          />
          <i
            onClick={handleSubmit}
            className="fas fa-plus"
          ></i>
        </div>

        <div className="todos">
          {todos.map((obj) => {
            return (
              <div className="todo">
                <div className="left">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      console.log(e.target.checked);
                      console.log(obj);
                      setToDos(
                        todos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = e.target.checked;
                          }
                          return obj2;
                        })
                      );
                    }}
                    value={obj.status}
                    name=""
                    id=""
                  />
                  {obj.status ? <strike>{obj.text}</strike> : <p>{obj.text}</p>}
                </div>
                <div className="right">
                  <i
                    onClick={() =>
                      setToDos(
                        todos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2 = null;
                          }
                          return obj2;
                        })
                      )
                    }
                    className="fas fa-times"
                  ></i>
                </div>
              </div>
            );
          })}
          {/* <div className="completedtask">
            <h2>Completed Tasks:</h2>
            {todos.map((obj) => {
              if (obj.status) {
                return (
                  <h1 key={obj.id} style={{fontWeight: "bold" }}>
                    {obj.text}
                  </h1>
                );
              }
              return null;
            })}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default App;
