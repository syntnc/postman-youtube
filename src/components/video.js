import React from 'react'
import { Button, Icon, Item, Label } from 'semantic-ui-react'

const Video = (props) => {
  const video = props.video;
  const onSelect = props.onSelect;

  return (
    <Item>
      <Item.Image src={video.snippet.thumbnails.medium.url} />

      <Item.Content>
        <Item.Header>{video.snippet.title}</Item.Header>
        <Item.Meta>
          <Icon name='clock outline' />
          <span className='date'>
            {new Date(video.snippet.publishedAt).toLocaleString('en-GB', { timeZone: 'GMT', hour12: true })}
          </span>
        </Item.Meta>
        <Item.Description>
          {video.snippet.description}
        </Item.Description>
        <Item.Extra>
          <Button primary floated='right' onClick={() => onSelect(video)}>
            Play Video
            <Icon name='right chevron' />
          </Button>
          <Label>
            <Icon name='address card' />
            {video.snippet.channelTitle}
          </Label>
        </Item.Extra>

      </Item.Content>
    </Item>
  );
}

export default Video;
