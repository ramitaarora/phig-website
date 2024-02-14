import { useState, useEffect } from 'react';

export default function ArticlePage({articleID}) {
    const [title, setTitle] = useState('Title');
    const [author, setAuthor] = useState('Author');
    const [date, setDate] = useState('Date');
    const [content, setContent] = useState('Content');

    // useEffect(() => {
    //     fs.readFile('/1.txt', utf, (err, data) => {
    //         if (err) console.log(err);
    //         console.log(data);
    //     })
    // })

    return (
        <div>
            <header>
            </header>

            <section>
                <h1>{title}</h1>
                <h2>By: {author}</h2>
            </section>
        </div>
    )
}