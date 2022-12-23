import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FriendsPage from "./components/Friends/FriendsPage/FriendsPage";
import './normalize.css'
import './App.css';

const App = (props) => {
    debugger;
    return (
        <BrowserRouter>
            <div className='container'>
                <div className="app-wrapper">
                    <Header/>
                    <Nav state={props.state}/>
                    <div className='content-wrapper'>
                        <Routes>
                            <Route path="/Profile/*" element={<Profile state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                            <Route path="/Messages/*" element={<Messages state={props.state} updateNewMessageText={props.updateNewMessageText} addMessage={props.addMessage}/>}/>
                            <Route path="/News/*" element={<News/>}/>
                            <Route path="/Music/*" element={<Music/>}/>
                            <Route path="/Settings/*" element={<Settings/>}/>
                            <Route path="/Friends/*" element={<FriendsPage/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
