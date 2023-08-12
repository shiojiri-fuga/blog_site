import React, { useEffect, useState } from 'react';
import { Content, ContentArea } from '../styles/CommonContainer';
import Grid from '@mui/material/Grid'
import parse from 'html-react-parser';
import { getRequest } from '../../../API';
import { useParams } from 'react-router-dom';
import { BlogTitleComponent } from '../styles/title';


const BlogPreview = () => {
  const params = useParams();
  const [blog, setBlog] = useState({
    author:"",
    category: "",
    content: "",
    id: "",
    published: true,
    tags: "",
    thumbnail_image: "",
    title: "",
  });

  useEffect(() => {
    (async() => {
      const response = await getRequest(`/api/get-blog-preview/${params.id}/`);
      setBlog(response.data);
    })()
   
  }, []);

  return (
    <Content>
      <Grid container spacing={0}>
        <Grid item md={3}></Grid>
        <ContentArea as={Grid} item md={5} >
          <BlogTitleComponent text={blog.title} /> 
          <div>
            {parse(blog.content)}
          </div>
        </ContentArea>
        <Grid item md={2}>
          サイドバー
        </Grid>
        <Grid item md={2}></Grid>
        
      </Grid>
     
     
    </Content>
  );
};

export default BlogPreview;
