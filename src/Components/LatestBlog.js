import React from 'react'
import bg from '../img/androidlogo.png'

function LatestBlog() {
  return (
    <div className='row'>
        <div className='col-lg-8'>
            <img src={bg} alt=" Background Logo" className='imglogo' />

        </div>
        <div className='col-lg-4'>
            <div className='row'>
                <div className='col-12'>
                    <h1> 
                        Blog title: This is all about the Blog 
                    </h1>
                </div>
                <div className='col-12'>
                    
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus recusandae nobis necessitatibus, ipsam a quia consequuntur blanditiis impedit minus accusamus quod quos velit hic quibusdam, dolores repudiandae nulla corrupti magni.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus recusandae nobis necessitatibus, ipsam a quia consequuntur blanditiis impedit minus accusamus quod quos velit hic quibusdam, dolores repudiandae nulla corrupti magni.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus recusandae nobis necessitatibus, ipsam a quia consequuntur blanditiis impedit minus accusamus quod quos velit hic quibusdam, dolores repudiandae nulla corrupti magni.
                    </p>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default LatestBlog
