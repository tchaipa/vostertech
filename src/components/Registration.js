import React from 'react';
import Button from 'react-bootstrap/Button';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import image1 from '../assets/public.svg';
import image2 from '../assets/private.svg';



export default function Registration () 
{

return(
<div className='registration'>
    <div className='container'>
    <h3>Are you ready to Register Your Company?</h3>
    <span>Start by selecting a company registration package of your choice</span>

    <div className='boxPaper'>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 5,
                    width: 516,
                    height: 528,
                  },
                }}
              >
                <Paper elevation={12}>
                    <img
                    className='mt-4'
                    src= {image1}
                    height='100'
                    width= 'auto'
                    alt=''
                    loading='lazy'
                    
                    />
                    <h3 className= 'mt-4'>Public Ltd</h3>
                    <span> By far the most popular type of company registered in Zimbabwe is a company limited by shares, commonly known as a Private Limited Company or PLC. Its purpose is to make profit and distribute it to the owners of the company (shareholders). The main advantage of this type of corporate structure is to protect the personal assets of the owners as their liability is limited to the value of the shares issued.</span>
                    <br/>
                    <a href=''> Read More </a>
                </Paper> 
                <Paper elevation={12}>
                    <img
                    className='mt-4'
                    src= {image2}
                    height='100'
                    width= 'auto'
                    alt=''
                    loading='lazy'
                    /> 
                    <h3 className= 'mt-4'>Private Business Corporation</h3>
                    <span>Private Business Corporations (PBCs) are the second most popular company registered in Zimbabwe and are ideal for small businesses or professionals such as lawyers, accountants, architects or business consultants who wish to retain the flexibility of a traditional partnership but require the benefits of a Private Limited Company. Register Your Company can quickly and easily register your Private Business Corporation within 7-9 working days.</span> 
                    <br/>
                    <a href=''> Read More </a>                
                </Paper>
              </Box>
            </div>
    </div>
</div>
)
}
