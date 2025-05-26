import React from 'react';
import Stack from "@mui/material/Stack";
import {In, colors} from "../constants";

function Category({selectCategory, selectedCategory}) {
    return (
        <Stack direction={'row'} style={{overflowX: 'scroll'}}>
            {In.map(item =>
                <button
                    onClick={() => selectedCategory(item.name)}
                    type='button' className='category-btn' key={item.name}
                    style={{
                        backgroundColor: selectCategory === item.name ? colors.fontColor : 'white',
                        color: selectCategory === item.name ? 'white' : colors.fontColor
                    }}
                >
                    <span>{item.icon}</span>
                    <span style={{marginLeft: '10px'}}>{item.name}</span></button>)}

        </Stack>
    );
}

export default Category;