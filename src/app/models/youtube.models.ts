export interface YoutubeResponse {
    kind:          string;
    etag:          string;
    nextPageToken: string;
    items:         Item[];
    pageInfo:      PageInfo;
}

export interface Item {
    kind:    ItemKind;
    etag:    string;
    id:      string;
    snippet: video;
}

export enum ItemKind {
    YoutubePlaylistItem = "youtube#playlistItem",
}

export interface video {
    publishedAt:  Date;
    channelId:    ChannelID;
    title:        string;
    description:  string;
    thumbnails:   Thumbnails;
    channelTitle: ChannelTitle;
    playlistId:   PlaylistID;
    position:     number;
    resourceId:   ResourceID;
}

export enum ChannelID {
    UCEuOwB9VSL1OPKGNdONB4Ig = "UCEuOwB9vSL1oPKGNdONB4ig",
}

export enum ChannelTitle {
    RedHotChiliPeppers = "Red Hot Chili Peppers",
}

export enum PlaylistID {
    UUEuOwB9VSL1OPKGNdONB4Ig = "UUEuOwB9vSL1oPKGNdONB4ig",
}

export interface ResourceID {
    kind:    ResourceIDKind;
    videoId: string;
}

export enum ResourceIDKind {
    YoutubeVideo = "youtube#video",
}

export interface Thumbnails {
    default:   Default;
    medium:    Default;
    high:      Default;
    standard?: Default;
    maxres?:   Default;
}

export interface Default {
    url:    string;
    width:  number;
    height: number;
}

export interface PageInfo {
    totalResults:   number;
    resultsPerPage: number;
}
