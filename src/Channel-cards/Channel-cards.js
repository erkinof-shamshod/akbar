import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import {useParams} from "react-router-dom";
import {ApiServise} from "../Apiservise/ApiServise";
import Video from "../video/video";
import ChannelCard from "../Channel-card/Channel-card";

const ChannelCards = () => {
    const [channelDetail, setChannelDetail] = useState();
    const [videos, setVideos] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                const dataChannelDetail = await ApiServise.fetching(`channels?part=snippet&id=${id}`)
                setChannelDetail(dataChannelDetail.items[0]);

                const dataVideo = await ApiServise.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`);
                setVideos(dataVideo.items);


            } catch (error) {
                console.log('error:', error);
            }
        };

        getData();
    }, [id]);
    return (
        <Box minHeight={'95vh'} mt={'1vh'}>
            <Box>

                <Box
                    width={'100%'}
                    height={'200px'}
                    zIndex={10}
                    sx={{
                        backgroundImage: `url(${channelDetail?.brandingSettings?.bannerExternalUrl})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        objectFit: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
              <ChannelCard video={channelDetail} marginTop={'-100px'} marginAuto={'0 auto'} />


            </Box>
            <Container maxWidth={'90%'} sx={{marginTop: '30px'}} >
                <Video videos={videos}/>
            </Container>
        </Box>
    );
};


export default ChannelCards;