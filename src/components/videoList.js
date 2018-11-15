import React from 'react';
import Video from './video';
import { Item } from 'semantic-ui-react';

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
    <Item.Group divided>
      {videoList}
    </Item.Group>
  );
};

export default VideoList;