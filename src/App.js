
import './App.css';
import Sid from './sidebar';
import Topbar from './topbar'
import Dash from './dash'


function App() {
  return (<>
   <div id="wrapper">
    <Sid></Sid>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Topbar></Topbar>
      <div class="container-fluid">
        <Dash></Dash>
        

      </div>
    </div>
    </div>
    
    </div>
    </>
  );
}

export default App;
