import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { getRequest } from '../../../API';


const SidebarContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
`;

const SidebarSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

const RecentEvents = ({ events }) => (
  <SidebarSection>
    <SectionTitle>直近のイベント</SectionTitle>
    <ul>
        <li>{events.title}</li>
    </ul>
  </SidebarSection>
);

const PopularPosts = ({ posts }) => (
  <SidebarSection>
    <SectionTitle>人気記事</SectionTitle>
    <div>
      {posts.map((post, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <img src={`http://localhost:8000${post.thumbnail_image}`} alt={post.title} style={{ width: '40%', height: '60px', marginRight: '10px' }} />
          <div>
            <h3 style={{ marginBottom: '5px' }}>{post.title}</h3>
            <p style={{ fontSize: '0.8em' }}>{post.catch_copy}</p>
          </div>
        </div>
      ))}
    </div>
  </SidebarSection>
);

const RecentArticles = ({ articles }) => (
  <SidebarSection>
    <SectionTitle>新着記事</SectionTitle>
    <div>
      {articles.map((article, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <img src={`http://localhost:8000${article.thumbnail_image}`} alt={article.title} style={{ width: '40%', height: '60px', marginRight: '10px' }} />
          <div>
            <h3 style={{ marginBottom: '5px' }}>{article.title}</h3>
            <p style={{ fontSize: '0.8em' }}>{article.catch_copy}</p>
          </div>
        </div>
      ))}
    </div>
  </SidebarSection>
);

const Categories = ({ categories }) => (
  <SidebarSection>
    <SectionTitle>カテゴリ</SectionTitle>
    <ul>
      {categories.map((category, index) => (
        <li key={index}>{category.name}</li>
      ))}
    </ul>
  </SidebarSection>
);

const SideMenu = () => {
  const [events, setEvents] = useState({'title':''});
  const [popularPosts, setPopularPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [recentArticles, setRecentArticles] = useState([]);

  useEffect(() => {
    (async() => {
      const response = await getRequest('/api/get-sideBar-date');
      setEvents(response.data.closest_event)
      setRecentArticles(response.data.new_descriptions)
      setPopularPosts(response.data.popular_descriptions)
    })()
  }, []);
  return (
  <SidebarContainer>
    <RecentEvents events={events} />
    <PopularPosts posts={popularPosts} />
    {/* <Categories categories={categories} /> */}
    <RecentArticles articles={recentArticles} />
  </SidebarContainer>
  )
};

export default SideMenu;