import React from 'react';
import VideoListItem  from './VideoListItem';

const VideoList = ({ videos, onSelectedVideo }) => {
  const videoListItems = videos.map((video) => {
    console.log('video', video);
    return <VideoListItem
      key={video.snippet.channelId}
      video={video}
      onSelectedVideo={onSelectedVideo}
    />
  });
  return <div className="ui relaxed divided list">{videoListItems}</div>
};

export default VideoList;
