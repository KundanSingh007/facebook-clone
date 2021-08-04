import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Widgets from "./Components/Widgets/Widgets";

function App() {
  return (
    <div className="app">
      <Header />
   
      <div className="app__body">
        <Sidebar/>
      </div>

      <div className="feed">
        <Feed />
      </div>

      <div className="widgets">
        <Widgets />
      </div>
    </div>
  );
}

export default App;
