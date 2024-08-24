import logo from './logo.svg';
import './App.css';
import TestImport from './component_test';

function App() {
  return (
    <div className="App">
      <header className={"App-header"}>

        <h1>
          First React Chalange -- by Bassel
        </h1>

      </header>
      <MainContainer />

    </div>

  );
}
function Post() {
  return (
    <div className={"Post-style "}>


      <h2>
        this is the Post Title
      </h2>
      <h2>
        this is the    Post Body
      </h2>
    </div>
  );
}

function MainContainer() {
  return (
    <div className='main-container'>
      <Posts />
      <Btns />
    </div>
  );
}
function Posts() {
  return (
    <div className='posts'>
      < Post />
      < Post />
      < Post />
      < Post />
      < Post />
    </div>
  );
}
function Btns() {
  return (
    <div>

    </div>
  );
}

export default App;
