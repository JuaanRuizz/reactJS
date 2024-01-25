import logo from './logo.svg';
import './App.css';
import Ejemplo4 from './hooks/ejemplo4';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/containers/task_list';
// import Ejemplo1 from './hooks/ejemplo1';
// import Ejemplo2 from './hooks/ejemplo2';
// import MyComponentWithContext from './hooks/ejemplo3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greeting.jsx*/}
        {/* <Greeting name = "Juan"></Greeting> */}
        {/* Componente ejemplo función */}
        {/* <GreetingF name = "Juan"></GreetingF> */}
        {/* Componente de listado de tareas  */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* Ejemplos de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MyComponentWithContext></MyComponentWithContext> */}
        <Ejemplo4 name = "Juan">
        {/* Todo lo que hay aquí dentro es tratado como props.children */}
          <h3>
            Contenido del prop.children
          </h3>
        </Ejemplo4>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
