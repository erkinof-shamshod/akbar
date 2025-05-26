import React, {useEffect, useState} from 'react';
import Category from "../Category/Category";
import Box from "@mui/material/Box";
import {Container, Stack, Typography} from "@mui/material";
import {colors} from "../constants";
import {ApiServise} from "../Apiservise/ApiServise";
import Videos from "../video/video";

function Main() {
    const [selectCategory, setSelectCategory] = useState('New')




    const [videos, setVideos] = useState([]);
    const selectedCategory = category => {
        setSelectCategory(category)
    }

    console.log(selectCategory)

    useEffect(() => {
        ApiServise.fetching(`search?part=snippet&q=${selectCategory}`).then(data => setVideos(data.items))

    }, [selectCategory]);

    return (
        <Stack>
            <Category selectCategory={selectCategory} selectedCategory={selectedCategory}/>
            <Box p='2' sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant='h4' style={{fontWeight: 'bold', marginTop: '15px'}}>
                        {selectCategory} <span style={{color: colors.fontColor}}>videos</span>
                    </Typography>
                    <Videos videos={videos}/>
                </Container>

            </Box>
        </Stack>
    );
}

export default Main;


// useNavigate—bu React Router hook’i bo‘lib, kod orqali sahifani o‘zgartirishga yordam beradi.
// e.preventDefault()—bu hodisaning standart harakatini to‘xtatish uchun ishlatiladigan JavaScript metodi.
