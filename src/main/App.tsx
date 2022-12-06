import './App.css';
import Main from "./pages/Main";
import {useState} from "react";
import VideoDetail from "./pages/VideoDetail";
import VideoDetailInfo from "./class/VideoDetailInfo";

type Section = 'Main' | 'VideoDetail' | 'SongDetail' | 'KeywordDetail';

function App() {
    let [section, setSection] = useState<Section>("Main");
    let [videoDetailInfo, setVideoDetailInfo] = useState(new VideoDetailInfo("", ""));

    const showVideoDetails = (id: string, title: string) => {
        setSection("VideoDetail");
        setVideoDetailInfo(new VideoDetailInfo(id, title));
    }

    return (
        <div className="App">
            { section === "Main" && <Main onVideoClick={showVideoDetails}/> }
            { section === "VideoDetail" && <VideoDetail videoDetail={videoDetailInfo} /> }
        </div>
    );
}

export default App;
