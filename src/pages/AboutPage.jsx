import ContactForm from "../components/ContactForm";
import { css } from '@emotion/css';
import Timeline from "../components/Timeline";
import timelineData from '../data/timelineData.json';

const AboutPage = () => {
    return (
        <div>
            <header className={css`height: 500px; width: 100%; background-color: #081821; color: white; text-align: center; display: flex; flex-direction: column; align-items: center; line-height: 60px;`}>
                <h1 className={css`margin-top: 40px;`}>Who we are</h1>
                <h2 >The History of Nature</h2>
                <p className={css`line-height: 30px; margin: 30px 20%; 30px 20%;`}>To educate students, staff, and community members in the need for water conservation with a demonstration garden using no pesticides, water recycling methods, drought tolerant and native plantings.</p>
            </header>

            <main className={css`border-radius: 100px 100px 0 0; position: relative; top: -105px; background-color: white;`}>
                <div id="timeline" className={css`padding: 50px; 200px;`}>
                    {timelineData.map((timelineItem, index) => (
                        <div key={index}>
                            <Timeline date={timelineItem.date}
                                firstImage={timelineItem.firstImage}
                                secondImage={timelineItem.secondImage}
                                header={timelineItem.header}
                                description={timelineItem.description}
                                mainImage={timelineItem.mainImage}
                                caption={timelineItem.caption}
                                index={index}
                            />
                        </div>
                    ))}

                </div>

                <div className={css`margin: 5% 0; background-color: #E9FEFF; display: flex;`}>
                    <div className={css`padding: 5%; margin: auto;`}>
                        <h1>The Garden Today</h1>
                        <p className={css`margin-top: 50px;`}>A former wasteland transformed into a thriving wildlife habitat and water-conserving garden through the collaborative efforts of volunteers, students, scouts, and community members in Pleasant Hill. Established in 2007 as a landscape design class project, the garden promotes sustainable practices, featuring drought-tolerant and native plants, and serves as a valuable learning resource.</p>
                    </div>
                    <img src="/images/about-page/phig-map.png" alt="phig-map" />
                </div>

                <div className={css`width: 100%`}>
                    <ContactForm />
                </div>
            </main>
        </div>

    );
};

export default AboutPage;