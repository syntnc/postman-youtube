import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'
import { Card, Embed, Icon } from 'semantic-ui-react'

const VideoData = (props) => {
  
  const video = props.video;
  if(!video){
    return (
      <div>
        <Segment>
          <Dimmer active>
            <Loader indeterminate>Loading...</Loader>
          </Dimmer>
        </Segment>
      </div>
    );
  }
  
  return (
    <div>
      {/* <div>
        <iframe src={url} frameborder="0"></iframe>
      </div> */}
      <Embed
        brandedUI
        id={video.id.videoId}
        source='youtube'
      />
      <div>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              {video.snippet.title}
            </Card.Header>
            <Card.Meta>
              <Icon name='clock outline' /><span className='date'>{new Date(video.snippet.publishedAt).toLocaleString('en-GB', { timeZone: 'GMT', hour12: true })}</span>
              <br></br>
              <Icon name='address card'/><span>{video.snippet.channelTitle}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            {video.snippet.description}
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default VideoData;
