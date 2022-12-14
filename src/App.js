import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import './normalize.css'
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className='container'>
                <div className="app-wrapper">
                    <Header/>
                    <Nav/>
                    <div className='content-wrapper'>
                        <Routes>
                            <Route path="/Profile/*" element={<Profile/>}/>
                            <Route path="/Messages/*" element={<Messages/>}/>
                            <Route path="/News/*" element={<News/>}/>
                            <Route path="/Music/*" element={<Music/>}/>
                            <Route path="/Settings/*" element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
