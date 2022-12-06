import "../App.css";
import Thumbnail from "../components/Thumbnail";
import VideoDetailInfo from "../class/VideoDetailInfo";

interface VideoDetailProps {
    videoDetail: VideoDetailInfo
}

function VideoDetail({ videoDetail }: VideoDetailProps) {
    return (
        <div className="VideoDetail">
            <h1>{videoDetail.title}</h1>
            <Thumbnail id={videoDetail.id} />
        </div>
    );
}

export default VideoDetail;
