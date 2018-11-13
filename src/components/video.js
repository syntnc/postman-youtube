import React from 'react'

const Video = (props) => {
  const video = props.video;
  console.log(video);
  const imgUrl = video.snippet.thumbnails.default.url;

  return (
    <li>
      <div>
        <div>
          <img src={imgUrl}/>
        </div>
        <div>
          <div>
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
}

export default Video;
