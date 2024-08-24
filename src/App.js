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
function Post({ title, body }) {
  return (
    <div className={"Post-style "}>


      <h2>
        {title}
      </h2>
      <h2>
        {body}
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
      < Post title={'Web programming is a vkm lrkfrf'} body={" do you know ......................"} />
      < Post title={'Front End programming is a vkm lrkfrf'} body={" do you know ......................"} />

      < Post title={'Mobile App programming is a mmmmm lrkfrf'} body={" do you know ......................"} />

      < Post title={'React Js is a mmd,md lrkfrf'} body={" do you know ......c................"} />
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
