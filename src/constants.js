import React from "react";
import {
    Checkroom, DeveloperMode, FaceRetouchingNatural,
    FitnessCenter,
    GraphicEq,
    Home,
    LiveTv, MusicNote,
    OndemandVideo,
    School,
    SportsEsports,
    TheaterComedy
} from "@mui/icons-material";




export const logo="https://cdn1.iconfinder.com/data/icons/space-travel-flat/340/space_astronomy_universe_galaxy_alien_ufo_spaceship_invasion_spacecraft-256.png";
export  const  colors={
    bgColor: 'linear-gradient(90deg, rgba(201, 242, 15, 1) 0%, rgba(189, 38, 212, 1) 50%, rgba(207, 0, 0, 1) 100%)',
    fontColor:'#2A7B9B'
}


export const In = [
    {name: 'New', id:1, icon: <Home/>},
    {name: 'Movie',id:2, icon: <OndemandVideo/>},
    {name: 'Live',id:3, icon: <LiveTv/>},
    {name: 'Gaming',id:4, icon: <SportsEsports/>},
    {name: 'Education',id:5, icon: <School/>},
    {name: 'Sport',id:6, icon: <FitnessCenter/>},
    {name: 'Comedy',id:7, icon: <TheaterComedy/>},
    {name: 'Podcast',id:8, icon: <GraphicEq/>},
    {name: 'Fashion',id:9, icon: <Checkroom/>},
    {name: 'Crypto',id:10, icon: <DeveloperMode/>},
    {name: 'Gym',id:11, icon: <FitnessCenter/>},
    {name: 'Beauty',id:12, icon: <FaceRetouchingNatural/>},
    {name: 'Music',id:13, icon: <MusicNote/>},
]

