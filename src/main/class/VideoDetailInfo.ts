export default class VideoDetailInfo {
    id: string;
    title: string;
    songs: Array<string>;
    keywords: Array<string>;


    constructor(id: string,
                title: string,
                songs: Array<string> = [],
                keywords: Array<string> = []) {
        this.id = id;
        this.title = title;
        this.songs = songs;
        this.keywords = keywords;
    }
}