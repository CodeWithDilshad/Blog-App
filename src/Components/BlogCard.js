import React from 'react'
import bgAI from '../img/AI.jpg'
function BlogCard() {
    return (

        <div className="col-lg-3 col-md-6 col-12">
            <div className="card" >
                <img src={bgAI} className="card-img-top" alt="Background image for AI " />
                <div className="card-body row">
                    <div className='col-12'>
                        <h1 className="card-title">Title of the block</h1>

                    </div>
                    <div className='col-12'>
                        <p className="card-text">Here will be the explanation of the blog. Wich should be in English language. Else that will not be accepted.</p>

                    </div>
                    {/* <a href="/" className="btn btn-primary">Go to the blog with the help of this button </a> */}
                </div>
            </div>
        </div>
    )
}

export default BlogCard

