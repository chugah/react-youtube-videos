import React from 'react';
import './VideoListItem.css';

const VideoListItem = ({ video, onSelectedVideo }) => {
  return (
    <div
      onClick={() => onSelectedVideo(video)}
      key={video.snippet.channelId}
      className="video-list-item item"
    >
      <img className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.channelTitle}
      />
      <div className="content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
}

export default VideoListItem;
