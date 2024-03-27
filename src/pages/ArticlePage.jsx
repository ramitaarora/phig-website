import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts';

export default function ArticlePage() {
    const [ID, setID] = useState(useParams())
    const [post, setPost] = useState();
    const [content, setContent] = useState();

    useEffect(() => {
        const findPost = blogPosts.find(post => post.id == ID.articleID);
        // console.log(post);
        if (findPost) {
            setPost(findPost);

            fetch(`/phig-website/blog/${ID.articleID}.txt`)
                .then(data => data.text())
                .then(text => {
                    const postArray = (text.split('\n')).filter(item => item !== "");
                    setContent(postArray);
                })
        }
    }, [ID])

    return (
        <div id="article">
            {post ? (
                <div>
                    <header className='article-header'>
                        <h1>{post.title}</h1>
                        <h2 className="article-metadata">By: {post.author}</h2>
                        <p className="article-metadata">{post.date}</p>
                    </header>
                    <div className='article-tags'>
                        {post.tags.length ? post.tags.map((tag, index) =>
                            <p key={index} className='article-tag'>{tag}</p>
                        ) : null}
                    </div>
                    <div>
                        <img src={post.image} alt={post.title} />
                        <p className='article-image-caption'>Image: {post.caption}</p>
                    </div>
                </div>
            ) : null}

            <article id="article-content">
                {content ? content.map((paragraph, index) =>
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ) : null}
            </article>
        </div>

    )
}