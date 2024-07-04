import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing:border-box;
    padding-bottom: 3rem;
    width:768px;
    margin: 0 auto;
    margin-top : 2rem;
    @media screen and (max-width : 768px){
        width: 100%;
        padding-left : 1rem;
        padding-right : 1rem;
    }
`;

const sampleArticle = {
    title: '제목',
    description : '내용',
    url:'https://google.com',
    urlToImage : 'https://via.placeholder.com/160',

};


const NewsList = ({category}) => {
    const [loading,response,error] = usePromise(() =>{
        const query = category === 'all' ? '' : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
    },[category]);

    //대기중 일 때 
    if(loading){
        return <NewsListBlock>대기 중...</NewsListBlock>
    }
    // 아직 response값이 설정 되지 않았을 때
    if(!response){
        return null;
    }
    if(error){
        return <NewsListBlock>에러 발생</NewsListBlock>
    }
    //return 값이 유요할 때
    const {articles} = response.data;
    return (
        <NewsListBlock>
            {articles.map(article =>(
                <NewsItem key={article.url} article={article}/>
            ))}
        </NewsListBlock>
    );
}
export default NewsList;