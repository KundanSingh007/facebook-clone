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

      <AppBody />

      <Sidebar />

      <Feed />

      <Widgets />
    </div>
  );
}

export default App;
