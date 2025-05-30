import React from 'react';
import {Avatar, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import moment from "moment";
import {CheckCircle} from "@mui/icons-material";
import {Link} from "react-router";

const VideoCard=({video}) => {
    return (
        <Card sx={{width: '310px', boxShadow: 'none', borderRadius: '5px'}}>
            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet?.title}
                    sx={{width: '310px', height: '180px'}}
                />
            </Link>

            <CardContent
                sx={{
                    background: 'linear-gradient(90deg, rgba(201, 242, 15, 1) 0%, rgba(189, 38, 212, 1) 50%, rgba(207, 0, 0, 1) 100%)',
                    height: '200px',
                    position: 'relative'
                }}>
          <Link to={`/video/${video.id.videoId}`}>
              <Typography my={'5px'} sx={{opacity: '.4'}}>
                  {moment(video?.snippet?.publishedAt).fromNow()}
              </Typography>
              <Typography variant='subtitle1' fontWeight={'bold'}>
                  {video?.snippet?.title.slice(0, 50)}
              </Typography>
              <Typography variant='subtitle2' sx={{opacity: '.6'}}>
                  {video?.snippet?.description.slice(0, 70)}
              </Typography>
          </Link>
                <Link to={`/channel/${video.id.channelId}`}>
                    <Stack
                        direction={'row'}
                        position={'absolute'}
                        bottom={'10px'}
                        alignItems={'center'}
                        gap={'5px'}
                    >
                        <Avatar src={video?.snippet?.thumbnails?.high?.url}/>
                        <Typography variant={'subtitle2'} color={'gray'}>
                            {video?.snippet?.channelTitle}
                            <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}/>
                        </Typography>
                    </Stack>
                </Link>

            </CardContent>
        </Card>
    );
}

export default VideoCard;