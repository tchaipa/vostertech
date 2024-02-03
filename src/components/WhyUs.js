import React, { useState } from 'react';
import image1 from '../assets/public.svg';


export default function WhyUs () 
{

return(
    <div className='whyus container'>
     <h3>Why Us ?</h3>
     <span>If you are thinking of starting a business, Vostertech Consultancy is the perfect partner for you. <br/> We can help you take your business to the next level. <br/> Here are some of the benefits of using Vostertech Consutlancy:</span>
    
     <div className='row'>
     <div className='col-lg-4'>
        <img
                    className='mt-4 mb-4'
                    src= {image1}
                    height='100'
                    width= 'auto'
                    alt=''
                    loading='lazy'
                    
                    />
                    <br/>
        <span>We have over 2 years in the business registration industry</span>
        </div>

        <div className='col-lg-4'>
        <img
                    className='mt-4 mb-4'
                    src= {image1}
                    height='100'
                    width= 'auto'
                    alt=''
                    loading='lazy'
                    
                    />
                    <br/>
        <span>We have a team of experienced professionals who are dedicated to helping our clients succeed</span>
        
        </div>
        <div className='col-lg-4'>
        <img
                    className='mt-4 mb-4'
                    src= {image1}
                    height='100'
                    width= 'auto'
                    alt=''
                    loading='lazy'
                    
                    />
                    <br/>
        <span>We offer a wide range of services to meet your needs.</span>
        </div>
        <div className='col-lg-4'>
        <img
                    className='mt-4 mb-4'
                    src= {image1}
                    height='100'
                    width= 'auto'
                    alt=''
                    loading='lazy'
                    
                    />
                    <br/>
        <span>We are committed to providing our clients with the highest level of customer service.</span>
        
        </div>
        <div className='col-lg-4'>
        <img
                    className='mt-4 mb-4'
                    src= {image1}
                    height='100'
                    width= 'auto'
                    alt=''
                    loading='lazy'
                    
                    />
                    <br/>
        <span>We offer a free consultation so that we can understand your specific needs and provide you with the best possible advice.</span>
        </div>
        <div className='col-lg-4'>
        <img
                    className='mt-4 mb-4'
                    src= {image1}
                    height='100'
                    width= 'auto'
                    alt=''
                    loading='lazy'
                    
                    />
                    <br/>
        <span>kajpjpaujpoaspouaspodupapi ioahioyiahd ioahioyoah oahiohao ioahihioah</span>
        </div>
    </div>
    </div>

)
}