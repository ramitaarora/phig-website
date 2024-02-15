import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from '../assets/data/blogPosts';

export default function ArticlePage() {
    const [ID, setID] = useState(useParams())
    const [title, setTitle] = useState('Title');
    const [author, setAuthor] = useState('Author');
    const [date, setDate] = useState('Date');
    const [image, setImage] = useState('');
    const [tags, setTags] = useState([])
    const [content, setContent] = useState();

    useEffect(() => {
        const post = blogPosts.find(post => post.id == ID.articleID);
        // console.log(post);
        if (post) {
            setTitle(post.title);
            setAuthor(post.author);
            setDate(post.date);
            setTags(post.tags);
            setImage(post.image);

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
            <header>
                <h1>{title}</h1>
                <h2>By: {author}</h2>
                {tags ? tags.map((tag, index) =>
                    <p key={index}>{tag}</p>
                ) : null}
                <p>{date}</p>
                <img src={image} alt={title} />
                <p>Image caption</p>
            </header>

            <article>
                {content ? content.map((paragraph, index) =>
                    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ) : null}
            </article>


        </div>
    )
}