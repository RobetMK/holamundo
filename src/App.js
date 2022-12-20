import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactListComponentA from './components/container/contact_list';
/* import logo from './logo.svg';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import Gret from './components/pure/gret';
import  Header from './components/pure2/header'; */
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TaskListComponent></TaskListComponent>
      <ContactListComponentA></ContactListComponentA>
      </header>
    </div>
  );
}

export default App;
