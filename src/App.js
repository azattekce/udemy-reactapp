import './App.css';
import Users from './components/dersler/Users';
//import ComponentDidMount from './components/dongumetodlari/ComponentDidMount';
import MyClassComponent from './components/MyClassComponent ';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex">
      <MyClassComponent></MyClassComponent>
      {/* <ComponentDidMount></ComponentDidMount> */}
      <Users></Users>

    </div>
  );
}

export default App;
