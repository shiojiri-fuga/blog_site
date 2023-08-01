import React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { BlogCard } from '../styles/Card';

const HomeNewBlog = () => {

  return (
    <Container>
        <Grid container spacing={0} minHeight={680}>
            <Grid item md={2}></Grid>
            <Grid item md={8}>
              <Grid container spacing={2}>
                <Grid item md={4}>
                  <BlogCard/>
                </Grid>
                <Grid item md={4}>
                  <BlogCard/>
                </Grid>
                <Grid item md={4}>
                  <BlogCard/>
                </Grid>
                <Grid item md={4}>
                  <BlogCard/>
                </Grid>
                <Grid item md={4}>
                  <BlogCard/>
                </Grid>
                <Grid item md={4}>
                  <BlogCard/>
                </Grid>
                
              </Grid>
            </Grid>
            <Grid item md={2}></Grid>
        </Grid>
      
    </Container>
  );
};

export default HomeNewBlog;

const Container = styled.div`
    width: 100%;
    padding: 32px 0px 24px 0px;
`