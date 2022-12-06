import '../App.css';
import Thumbnail from "./Thumbnail";

interface VideoCardProps {
    id: string;
    title: string;
    onClick: Function;
}

function VideoCard({id, title, onClick}: VideoCardProps) {
    return (
        <div className="videoCard" onClick={() => onClick(id, title)}>
            <Thumbnail id={id}/>
            <h3>{title}</h3>
        </div>
    );
}

export default VideoCard;
