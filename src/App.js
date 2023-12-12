import Navbar from "./components/Navbar";
import NewsBody from "./components/NewsBody";
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App" style={{ backgroundColor: '#34495E', width: '100%',height:'100%'}}>
        <Navbar></Navbar>
          <Routes>
            <Route path="/"  key='general' element={<NewsBody category='general' name=''></NewsBody>}></Route>
            <Route path="/business" key='business' element={<NewsBody category='business' name='Business'></NewsBody>}></Route>
            <Route path="/entertainment" key='entertainment'  element={<NewsBody category='entertainment' name='Entertainment'></NewsBody>}></Route>
            <Route path="/health" key='health' element={<NewsBody category='health' name='Health'></NewsBody>}></Route>
            <Route path="/science" key='science' element={<NewsBody category='science' name='Science'></NewsBody>}></Route>
            <Route path="/sports" key='sports' element={<NewsBody category='sports' name='Sports'></NewsBody>}></Route>
            <Route path="/technology" key='technology' element={<NewsBody category='technology' name='Technology'></NewsBody>}></Route>


          </Routes>

    </div>
  );
}

export default App;
