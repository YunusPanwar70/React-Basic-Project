import React, { useState } from 'react';
import { useEffect } from 'react';
import NewsItem from '../NewsItem/NewsItem';

function NewsBoard({ category }) {
    const [articles, setArticle] = useState([]);
    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category&=${category}apiKey=${import.meta.env.API_KEY}`;
        fetch(url).then(res => res.json()).then(data => setArticle(data.articles));
    }, [category]);
    return (
        <div>
            <h2 className="text-center">Latest <span className='badge bg-danger'>News</span></h2>
            {articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />;
            })}
        </div>
    );
}
export default NewsBoard;