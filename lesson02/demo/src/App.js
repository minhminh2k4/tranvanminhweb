//import logo from './logo.svg';
import './App.css';
import Func_JSX_Tranvanminh from './components/Func_JSX_Tranvanminh';
function App() {
  return (
   <section className="App">
     <h1>Demo JSX</h1>
     {/*function component demo*/}
     <Func_JSX_Tranvanminh/>
     <Func_JSX_Tranvanminh fullName="Tran Van Manh" age="20"/>
     <Class_Tranvanminh info="Hoc ReactJS" time="11" />
     <hr/>
   </section>
  );
}

export default App;
