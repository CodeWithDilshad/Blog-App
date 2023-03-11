import React from 'react'
import BlogCard from '../Components/BlogCard'
import LatestBlog from '../Components/LatestBlog'
import Navbar from '../Components/Navbar'

function Bloglist() {
    return (
        <div className="container mx-auto mt-5">
            <LatestBlog />
            <div className="row">
                {/* <Navbar/>    */}
                <BlogCard /> 
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />


            </div>
        </div>
    )
}

export default Bloglist
