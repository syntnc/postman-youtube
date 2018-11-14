import React from 'react'

const VideoData = (props) => {
  
  const video = props.video;
  if(!video){
    return (
      <div>Loading...</div>
    );
  }
  
  const id = video.id.videoId;
  const url = `https://www.youtube.com/embed/${id}`;
  
  return (
    <div>
      <div>
        <iframe src={url} frameborder="0"></iframe>
      </div>
      <div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoData;
