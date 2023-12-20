import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function Services () {
    return(
        <div className='services'>
            <div className='container' >
            <p>OUR SERVICES</p>
            <h3>What Service We Offer</h3>
            <span>Vostertech Consultancy is a leading provider of business registration services in Zimbabwe. 
                <br/>
                We offer a wide range of services including:
            </span>

            <div className='boxPaper'>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  '& > :not(style)': {
                    m: 1,
                    width: 416,
                    height: 528,
                  },
                }}
              >
                <Paper elevation={12} />
                <Paper elevation={12} />
                <Paper elevation={12} />
                <Paper elevation={12} />
                <Paper elevation={12} />
                <Paper elevation={12} />
              </Box>
            </div>
  
          

        </div>
        </div>
        

    )
}

export default Services;