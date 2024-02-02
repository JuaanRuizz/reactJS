// import logo from './logo.svg';
import './App.css';
// import Father from './components/containers/father';
// import GreeatingStyled from './components/pure/greeatingStyled';
// import Ejemplo4 from './hooks/ejemplo4';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/containers/task_list'; 
import AxiosCRUDExample from './components/pure/AxiosCRUDExample';
// import AxiosExample from './components/pure/AxiosExample';
// import FetchExample from './components/pure/FetchExample';
// import AsyncExample from './components/pure/AsyncExample';
// import ObservableExample from './components/pure/ObservableExample';
// import RegisterFormik from './components/pure/forms/registerFormik';
// import LoginFormik from './components/pure/forms/loginFormik';
// import OptionalRender from './components/pure/optionalRender';
// import Ejemplo1 from './hooks/ejemplo1';
// import Ejemplo2 from './hooks/ejemplo2';
// import MyComponentWithContext from './hooks/ejemplo3';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/*Componente propio Greeting.jsx*/}
        {/* <Greeting name = "Juan"></Greeting> */}
        {/* Componente ejemplo función */}
        {/* <GreetingF name = "Juan"></GreetingF> */}
        {/* Componente de listado de tareas  */}
        {/*<TaskListComponent></TaskListComponent>*/}
        {/* Ejemplos de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MyComponentWithContext></MyComponentWithContext> */}
        {/* Todo lo que hay aquí dentro es tratado como props.children */}
        {/* <Ejemplo4 name = "Juan">
          <h3>
            Contenido del prop.children
          </h3>
        </Ejemplo4> */}
        {/* <GreeatingStyled name = "Juan"></GreeatingStyled> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}

      {/* Ejemplo de renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}

      {/* Ejemplo de forms (Formik y Yup) */}
      {/* <LoginFormik></LoginFormik> */}

      {/* Ejemplo de procesos asíncronos */}
        {/* <AsyncExample></AsyncExample> */}

      {/* Ejemplo de Valores Observables */}
      {/* <ObservableExample></ObservableExample> */}

      {/* Ejemplo de Fetch para peticiones HTTP */}
      {/* <FetchExample></FetchExample> */}

      {/* Ejemplo de AXIOS para peticiones HTTP */}
      {/* <AxiosExample></AxiosExample> */}

      {/* Ejemplo AXIOS CRUD */}
      <AxiosCRUDExample></AxiosCRUDExample>

      {/* Proyecto final */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <RegisterFormik></RegisterFormik> */}

      {/* Gestión de eventos */}
      {/* <Father></Father> */}
    </div>
  );
}

export default App;
