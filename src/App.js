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
    { id: 1, title: 'first article content', body: 'Web Programimmmmmm' },
    { id: 2, title: 'second article content', body: 'Web Programimmmmmm' },
    { id: 3, title: 'third article content', body: 'Web Programimmmmmm', }
  ];

  const postList = articles.map((post) => {
    return <Post key={post.id} title={post.title} body={post.body}> </Post>
  });

  return (

    <div> {postList} </div>
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
