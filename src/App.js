import logo from './logo.svg';
import './App.css';
import TestImport from './component_test';
import MyBtn from './MyBtn';

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
function Post({ title, body, content, children }) {
  return (
    <div className={"Post-style "}>


      <h2>
        {title}
      </h2>
      <hr></hr>
      <h2>
        {body}
      </h2>
      <p>{content}</p>
      <div>{children}</div>
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
  const articles = [
    'first article content',
    'second article content',
    'third article content',
  ];

  return (

    <div className='posts'>
      <Post content={articles[0]} title={'Web programming is a vkm lrkfrf'} body={" do you know ......................"} >
        <div> <h1>
          children jsx 1
        </h1></div>
      </Post>
      <Post content={articles[1]} title={'Front End programming is a vkm lrkfrf'} body={" do you know ......................"}>
        <div> <h1>
          children jsx 2
        </h1></div>
      </Post>

      <Post content={articles[2]} title={'Front End programming is a vkm lrkfrf'} body={" do you know ......................"}>
        <div> <h1>
          children jsx 3
        </h1></div>

      </Post>
      < Post title={'React Js is a mmd,md lrkfrf'} body={" do you know ......c................"} />
    </div>
  );
}
function Btns() {
  return (
    <div className="Btn-class">
      <MyBtn title='First'></MyBtn>

      <MyBtn title='Second'></MyBtn>
      <MyBtn title='First'></MyBtn>
      <MyBtn title='Third'></MyBtn>
      <MyBtn title='First'></MyBtn>
      <MyBtn title='Third'></MyBtn>
      <MyBtn title='First'></MyBtn>
    </div>
  );
}

export default App;
