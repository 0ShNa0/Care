import React,{useState} from 'react'
import listOfBlogs from "../utils/ListBlogs";
import BlogCard from '../components/BlogCard';
import {Link} from "react-router-dom";
import { Typography } from '@mui/material';
const Blogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleClose = () => {
    setSelectedBlog(null);
  };
  return (
    <div>
{ selectedBlog===null && listOfBlogs.map(blog=>(
<BlogCard author={blog.author} title={blog.title} img={blog.img} text={blog.text} selectedBlog={selectedBlog} OnBlogClick={()=>handleBlogClick(blog)}
/>
))}
{selectedBlog && (
        <div display="flex" style={{maxWidth:"88%",alignContent:"center",justifyContent:"center",marginLeft:"6vw"}}>
          <Typography variant="h4" mt="60px" color= '#2196f3' fontFamily={'Playfair Display'}>{selectedBlog.title}</Typography>
          <button onClick={handleClose} style={{ marginTop: '4px', padding: '8px 16px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer',marginRight:'20px',float:'right' }}> CLOSE </button>
          <Typography variant="h6" mt="10px" color="grey"> Written by {selectedBlog.author}</Typography>
          <Typography variant="body1" mt="5px" fontFamily={'Playfair Display'}>{selectedBlog.text}</Typography>
         
        </div>
      )}



</div> 
  )
}

export default Blogs;