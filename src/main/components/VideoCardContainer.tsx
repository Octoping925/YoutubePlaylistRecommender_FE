import VideoCard from "./VideoCard";
import VideoDetailInfo from "../class/VideoDetailInfo";
import styled from "styled-components";

interface VideoCardContainerProps {
    videoDatas: Array<VideoDetailInfo>
    onVideoClick: Function
}

function VideoCardContainer({ videoDatas, onVideoClick }: VideoCardContainerProps) {
    return (
        <VideoCardList>
            {videoDatas.map(video => (
                <VideoCard
                    id={video.id}
                    title={video.title}
                    onClick={onVideoClick}
                />
            ))}
        </VideoCardList>
    );
}

const VideoCardList = styled.div`
    display: flex;
`;

export default VideoCardContainer;