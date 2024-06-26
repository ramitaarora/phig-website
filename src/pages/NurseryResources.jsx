import { css } from '@emotion/css';
import NurseryResource from '../components/NurseryResource';
import nurseryResources from '../data/nurseryResources.json';
import { useEffect } from 'react';

export default function NurseryResources() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <div>
            <header>
                <h1 className='header'>Nursery Resources</h1>
            </header>

            <main className={css`display: flex; flex-wrap: wrap; justify-content: space-evenly;margin:100px;margin-top: 200px`}>
                {nurseryResources.map((resource, index) =>
                    <div key={index} className={css`height:233px;width: 580px; margin:10px;margin-bottom:20px;border: 2px solid lightgrey; padding: 40px; border-bottom:2px solid #97C159 `}>
                        <NurseryResource name={resource.name} description={resource.description} image={resource.image} link={resource.link} location={resource.location} days={resource.days} hours={resource.hours} phone={resource.phoneNumber}/>
                    </div>
                )}
            </main>
        </div>
    )
}