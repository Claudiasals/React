
import ToDoList from "./ToDoList";
import ToDoList2 from "./ToDoList2";
import TodoProvider from "./TodoProvider";

const Home = () => {

  return (
    <>
      <TodoProvider>
        <h2> To Do List</h2>
        <ToDoList />
        <h2> To Do List 2</h2>
        <ToDoList2 />
      </TodoProvider>
    </>
  )

};

export default Home;