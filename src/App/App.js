import './App.css';
import React from "react";
import Search from "../search";
import Main from "../main/main";
import Channel from "../Channel/channel";
import {Routes, Route} from "react-router";
// import Navbar from "../navbar/navbar";
import Box from "@mui/material/Box";

import Navbar from "../navbar/navbar";
import VideoDetail from "../video-detail/video-detail";
import ChannelCards from "../Channel-cards/Channel-cards";

const App = () => {
    return (
        <Box sx={{textAlign: 'center', fontWeight: "bold"}}>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/search/:id' element={<Search/>}/>
                <Route path='/video/:id' element={<VideoDetail/>}/>
                <Route path='/channel/:id' element={<ChannelCards/>}/>

            </Routes>

        </Box>


    );
};

export default App;
