import "./style.css";
import imgg from "./istockphoto-1174818077-612x612.jpg";
function App() {
  return (
    <div className="app">
      <div className="main">
        <h1 className="red">{"Your name here"}</h1>
        <br />
        <div className="imgg">
          <img src="/istockphoto-1148380677-612x612.jpg" alt="Egypt" />
          <br />
          <img src={imgg} alt="Egypt" />
          <br />
        </div>
        <video controls width="320" height="240" src="/got.mp4" alt="got" />
        <div className="coppy">
          <p>© 2021 All rights reserved. for Mohamed_Essam.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
