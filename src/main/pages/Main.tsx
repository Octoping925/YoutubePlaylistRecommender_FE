import "../App.css";
import Title from "../components/Title";
import VideoCardContainer from "../components/VideoCardContainer";
import VideoDetailInfo from "../class/VideoDetailInfo";

interface MainProps {
    onVideoClick: Function
}

function Main({ onVideoClick }: MainProps) {
    const videoDatas = [
        new VideoDetailInfo("ke8XOqlb1N0", "서정적인 피아노가 만들어내는 노스텔지아 | 브리티쉬 락밴드 ‘킨’"),
        new VideoDetailInfo("ghxHAy3LH28", "React 에서 key 가 중요한 이유는? 그냥 index 를 쓰면 왜 안될까?"),
        new VideoDetailInfo("yYSfZNOmSIs", "[Playlist] 해리 스타일스와 함께라면 두렵지 않은 여름🏖｜Harry Styles All Songs")
    ];

    return (
        <div className="MainPage">
            <Title>유튜브 플레이리스트 추천기</Title>
            <VideoCardContainer
                videoDatas={videoDatas}
                onVideoClick={onVideoClick}
            />
        </div>
    );
}

export default Main;
