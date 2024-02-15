import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../assets/data/blogPosts';

export default function ArticlePage() {
    const [ID, setID] = useState(useParams())
    const [post, setPost] = useState();
    // const [title, setTitle] = useState('Title');
    // const [author, setAuthor] = useState('Author');
    // const [date, setDate] = useState('Date');
    // const [image, setImage] = useState('');
    // const [caption, setCaption] = useState('')
    // const [tags, setTags] = useState([])
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
        <div>
            { post ? (
                <header>
                    <h1>{post.title}</h1>
                    <h2>By: {post.author}</h2>
                    <p>{post.date}</p>
                    {post.tags.length ? post.tags.map((tag, index) =>
                    <p key={index}>{tag}</p>
                ) : null}
                    <img src={post.image} alt={post.title} />
                    <p>Image: {post.caption}</p>
                </header>
            ) : null}

            <article>
                {content ? content.map((paragraph, index) =>
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ) : null}
            </article>
        </div>

    )
}