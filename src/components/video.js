import React from 'react'

const Video = (props) => {
  const video = props.video;
  const onSelect = props.onSelect;
  // console.log(video);
  const imgUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onSelect(video)}>
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
