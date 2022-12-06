import "../App.css";
import Util from "../common/util";

interface ThumbnailProps {
    id: string;
}

function Thumbnail({ id }: ThumbnailProps) {
    return (
        <img src={Util.getYoutubeThumbnailUrl(id)} alt={"thumbnail"}/>
    );
}

export default Thumbnail;
