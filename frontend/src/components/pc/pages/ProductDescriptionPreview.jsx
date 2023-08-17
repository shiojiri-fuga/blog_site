import React, { useEffect, useState } from 'react';
import { Content, ContentArea } from '../styles/CommonContainer';
import Grid from '@mui/material/Grid'
import parse from 'html-react-parser';
import { getRequest } from '../../../API';
import { useParams } from 'react-router-dom';
import { BlogTitleComponent } from '../styles/title';
import TableOfContents from '../styles/Menu';
import BoardGameInfoTable from '../styles/Table';
import { ParallaxTitleConmponent } from '../styles/title';
import { Parallax } from 'react-parallax';
<<<<<<< HEAD
import SideMenu from '../components/SideMenu';
=======
>>>>>>> ca6a59fe1f94056da0fd83238436a4f43ce4fb54


const ProductDescriptionPreview = () => {
  const params = useParams();
  const [productDescription, setProductDescription] = useState({
    author:"",
    category: "",
    content: "",
    id: "",
    published: true,
    tags: "",
    thumbnail_image: "",
    title: "",
  });
  const [tocData, setTocData] = useState([]);

  useEffect(() => {
    (async() => {
<<<<<<< HEAD
      const response = await getRequest(`/api/get-product-description-preview/${params.id}/`);
=======
      console.log(params.id);
      const response = await getRequest(`/api/get-product-description-preview/${params.id}/`);
      console.log('tt');
      console.log(response);
>>>>>>> ca6a59fe1f94056da0fd83238436a4f43ce4fb54
      setProductDescription(response.data.data);
      setTocData(response.data.toc)
    })()
   
  }, []);

  return (
    <Content>
      <Grid container spacing={0}>
        <Grid item md={3}></Grid>
        <ContentArea as={Grid} item md={5} >
          <Parallax
            bgImage={`http://localhost:8000${productDescription.thumbnail_image}`}
            strength={200}
            style={{ height: '400px', margin: '10px 0px' }}
          >
            <ParallaxTitleConmponent text={productDescription.title}/> 
          </Parallax>
          <BlogTitleComponent text={'基本情報'} />
          <BoardGameInfoTable data={productDescription}/>
          <TableOfContents tocData={tocData}/>

          <div>
            {parse(productDescription.content)}
          </div>
        </ContentArea>
        <Grid item md={2}>
<<<<<<< HEAD
          <SideMenu />
=======
          サイドバー
>>>>>>> ca6a59fe1f94056da0fd83238436a4f43ce4fb54
        </Grid>
        <Grid item md={3}></Grid>
        
      </Grid>
     
     
    </Content>
  );
};

export default ProductDescriptionPreview;

