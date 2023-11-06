import React from "react";
const VideoCard = ({info}) => {
    console.log(info);
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    return (
        <div className="p-2 m-2 w-72 shadow-lg">
        <img className="rounded-lg"  src={thumbnails.medium.url} alt="video-thumbnail"/>
        <ul>
            <li className="font-bold py-2">{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}  views</li>
        </ul>
        </div>
    );
};

//Higher order component is a function that takes component and return component
// here redbordervideocard is higher order component
export const RedBorderVideoCard = ({info}) => {
    return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard info={info}/>
    </div>
    );
};
export default VideoCard;