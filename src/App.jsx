import "./App.css";
import Header from "./Components/Header/Header";
import AppBody from "./Components/AppBody/AppBody";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import Widgets from "./Components/Widgets/Widgets";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="appbody">
        <AppBody />
      </div>

      <div className="sidebar">
        <Sidebar />
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
