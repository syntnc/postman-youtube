import React from 'react';
import Video from './video';

const VideoList = (props) => {
  const videoList = props.videoList.map((video) => {
    return (
      <Video
        key = {video.etag}
        video = {video}
        onSelect = {props.onVideoSelect}
      />
    );
  });
  return (
    <ul>
      {videoList}
    </ul>
  );
};

export default VideoList;