import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { css } from '@emotion/css';
import blogPosts from '../assets/data/blogPosts';

export default function ArticlePage() {
    const [ID, setID] = useState(useParams())
    const [post, setPost] = useState();
    const [content, setContent] = useState();

    useEffect(() => {
        const findPost = blogPosts.find(post => post.id == ID.articleID);
        // console.log(post);
        if (findPost) {
            setPost(findPost);

            fetch(`/blog/${ID.articleID}.txt`)
                .then(data => data.text())
                .then(text => {
                    const postArray = (text.split('\n')).filter(item => item !== "");
                    setContent(postArray);
                })
        }
    }, [ID])

    return (
        <div className={css`margin: 30px 200px;`}>
            {post ? (
                <div>
                    <header className={css`height: 250px; display: flex; flex-direction: column; justify-content: center; line-height: 40px;`}>
                        <h1>{post.title}</h1>
                        <h2>By: {post.author}</h2>
                        <p>{post.date}</p>
                    </header>
                    <div className={css`margin: 20px 0; display: flex;`}>
                        {post.tags.length ? post.tags.map((tag, index) =>
                            <p key={index} className={css`padding: 10px; background-color: #F3F3F3; width: fit-content; border-radius: 10px; margin-right: 10px;`}>{tag}</p>
                        ) : null}
                    </div>
                    <div>
                        <img src={post.image} alt={post.title} />
                        <p>Image: {post.caption}</p>
                    </div>
                </div>
            ) : null}

            <article className={css`margin: 100px 0; line-height: 30px;`} >
                {content ? content.map((paragraph, index) =>
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} className={css`margin: 30px 0;`} />
                ) : null}
            </article>
        </div>

    )
}