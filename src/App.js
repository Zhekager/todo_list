import React, { Component } from "react";
import shortid from "shortid";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import Filter from "./components/TodoFilter";
import Modal from "./components/Modal";
import IconButton from "./components/IconButton";
// import initialTodos from './todos.json';
import Container from "./components/Container";
import { ReactComponent as AddIcon } from "./Icons/plus.svg";

class App extends Component {
  // в state храним todos
  state = {
    todos: [],
    filter: "",
    showModal: false,
  };

  // метод для удаления state
  // 1 - мы будем ожидать todoId того id который нужно удалить
  deleteTodo = (todoId) => {
    // здесь мы зделаем this.setState, изменяем состояние от прдыдущего prevState
    this.setState((prevState) => ({
      // и возвращаем todos, берем прдыдущее состояние и на базе него сделать следущее
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleComleted = (todoId) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),

      // todos: prevState.todos.map(todo => {
      //   if (todo.id === todoId) {
      //     return{
      //       ...todo,
      //       completed: !todo.completed,
      //     };
      //   }
      //   return todo;
      // }),
    }));
  };

  //метод добавления todo
  addTodo = (text) => {
    //создаем новую todo
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    //кидаем в state на базе предидущего
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
    // this.toggleModal();
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculeteTodosCompleted = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  componentDidMount() {
    console.log("App componentDidMount");
    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      console.log("обновилось");
      localStorage.setItem("todos", JSON.stringify(nextTodos));
    }

    if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
      this.toggleModal();
    }
  }

  render() {
    console.log("App render");
    // деструктуризация todos
    const { todos, filter, showModal } = this.state;

    //вычисляемые свойства (totalTodoCount - Общее кол-во)
    const totalTodoCount = todos.length;

    //вычисляемые свойства (comletedTodosCount - Кол-во выполненых)
    const comletedTodosCount = this.calculeteTodosCompleted();

    const visibleTodos = this.getVisibleTodos();

    return (
      <Container>
        <div>
          <p>Всего задач: {totalTodoCount}</p>
          <p>Выполнено: {comletedTodosCount}</p>
        </div>
        <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}
        <Filter value={filter} onChange={this.changeFilter} />

        {/* в TodoList прокидываем todos  */}
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleComleted}
        />
      </Container>
    );
  }
}

export default App;
