import { css } from '@emotion/css';

export default function PheaturedBook() {
    return (

        <section id="pheatured-book" className={css`background: radial-gradient(circle, rgba(255, 255, 255, 0.7) 30%, rgba(232, 232, 232, 0.7) 60%), url('./images/homepage/leaf-background.jpeg'); background-position: bottom right; background-repeat: no-repeat; margin: 90px auto; width: 95%; box-shadow: 5px 5px 5px 5px lightgrey;`}>
            <div className={css`display: flex; justify-content: space-evenly; align-items: center;`}>

                <div className={css`width: 60%`}>
                    <h3 style={{ marginTop: '40px', marginLeft: '80px', marginBottom: '10px' }}>Pheatured Book</h3>
                    <div><hr style={{ width: '50px', height: '5px', backgroundColor: '#97C159', border: 'none', marginTop: '-10px', marginLeft: '80px' }}></hr></div>
                    <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                        <div style={{ marginLeft: '75px', marginTop: '10px' }}>
                            <img style={{ height: '300px', width: '900px', boxShadow: '5px 5px 5px 5px lightgrey', marginBottom: '30px' }} src="./images/homepage/pheatured-book.jpeg" alt="Nature's Best Hope - Tallamy" title="Nature's Best Hope - Tallamy" loading="lazy" />
                        </div>
                        <div className='PheaturedB'>
                            <h4 style={{ marginBottom: '10px' }}>Nature’s Best Hope: A New Approach to Conservation That Starts in Your Yard</h4>
                            <div className={css`display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px;`}>
                                <p style={{ color: 'grey' }}>Douglas W. Tallamy</p>
                                <a href="https://www.goodreads.com/book/show/43212849-nature-s-best-hope?ac=1&from_search=true&qid=1MbdBR5Sns&rank=1" target="_blank" rel="noreferrer">
                                    <button id="view-goodreads-button" className={css`border-radius: 10px;height: 30px; cursor: pointer; padding: 5px 10px; border: 6px; font-size: big; background-color: #407D46; color: white;`}>View on Goodreads</button>
                                </a>                          
                            </div>
                            <p style={{ color: 'grey', marginBottom: '20px' }}>Douglas W. Tallamy’s first book, Bringing Nature Home, awakened thousands of readers to an urgent situation: wildlife populations are in decline because the native plants they depend on are fast disappearing. His solution? Plant more natives. In this new book, Tallamy takes the next step and outlines his vision for a grassroots approach to conservation.</p>
                            <a href="https://www.amazon.com/Natures-Best-Hope-Approach-Conservation-ebook/dp/B07NMH5GH5/ref=sr_1_1?crid=1L19EXTQQ1E73&dib=eyJ2IjoiMSJ9.4aXGeMZCe1nrJK6I1JHsjaAvqpH1F--eJImTzDE77_8x0RnIbBWr50GTC93R4ed-xzen1z9J79666gUIuXEYRx0waEpPfNfMSi1-EBQe7RWq6b7Ea0_y9NJ1gh9rxgsUnvy3yG0q_2u1ECqIt3eYCiZV3EadVGYA-XNU824t1fcy86hX4zoVNhXsmfwc3Gi8RAvTEHBeWnGW2Uqk9yxgHrb025EGkFVO3YNxCEZ54u0.BTiDE_BJ3KCfA8knKO1a0xvV-7nABwTOCeZHF-5jwfw&dib_tag=se&keywords=nature%27s+best+hope&qid=1713817516&sprefix=nature%27s+bes%2Caps%2C145&sr=8-1" target="_blank" rel="noreferrer">
                            <p className={css`color: var(--lightgreen); &:hover { color: var(--success); } `}>Read More</p></a>
                        </div>
                    </div>
                </div>

                <div id="similar-titles" className={css`width: 40%;`}>
                    <h4 style={{ marginBottom: '10px', marginTop: '30px' }}>Browse Similar Titles</h4>
                    <div><hr style={{ width: '50px', height: '5px', backgroundColor: '#97C159', border: 'none', marginTop: '-10px', marginBottom: '20px' }}></hr></div>

                    <div className='each-book'>
                        <img src="./images/homepage/book-1.jpeg" alt="The Living Landscape - Tallamy" title="The Living Landscape - Tallamy" loading="lazy" />
                        <div>
                            <h4 className='ph4'>The Living Landscape: Designing for Beauty and Biodiversity in the Home Garden</h4>
                            <p className='ph4b'>Rick Darke, Douglas W. Tallamy</p>
                            <a href="https://www.amazon.com/Living-Landscape-Designing-Beauty-Biodiversity/dp/1604694084/ref=sr_1_1?crid=3K7A5J92E15TS&dib=eyJ2IjoiMSJ9.Y0FalXe2WZ5GpsgXlsu84xUoBQ0t4Hyl84NSg4LLubv01fh7xeQSzWkB-n758lOhrmBRbH6_ZaSucX3U8AfRzmnGsJ__qVRM5R_tHR8X2EvBMWwbx8ppmMhekp4OF2yRi9hTXqzBK5NbZkT3adXuzmpdPEDPg45QwT073e7QnWWDwdMEnC8HVV4mDmleQUd1IIPa3uLuEMUpXoBnGtyOEICVW3tS1Yb1KRUGY72pbwg.7H_dapudMAuYkezSnGyYDorvfrZsi8EyO1kfuSoLf3Y&dib_tag=se&keywords=the+living+landscape&qid=1713818579&sprefix=the+living+land%2Caps%2C168&sr=8-1" target="_blank" rel="noreferrer">
                                <button className='view-amazon-button'>View on Amazon</button>
                            </a>
                        </div>
                    </div>

                    <div className='each-book'>
                        <img src="./images/homepage/book-2.jpeg" alt="Bringing Nature Home - Tallamy" title="Bringing Nature Home - Tallamy" loading="lazy"/>
                        <div>
                            <h4 className='ph4'>Bringing Nature Home: How You Can Sustain Wildlife with Native Plants</h4>
                            <p className='ph4b'>Douglas W. Tallamy</p>
                            <a href="https://www.amazon.com/Bringing-Nature-Home-Wildlife-Expanded-ebook/dp/B003UV8ZTE/ref=sr_1_1?crid=2JKBJLZEFQ5JC&dib=eyJ2IjoiMSJ9.BFYLsu7YmvK5-3QmLRv-0cWDlYumSTE8_0_G1svFm9TkbywR-8zagYk18-lZAyNZncqLlg1jgTJKqIWlGCv884aOLyEbAOw3eqlrNhS7dRZEVT06bCOote5LSMBFFg0UoNHkMRGuls5siGpKH8J-jZaoTOXNO878QzYnYjg29LdMSa4ZsL-kB4ytodYNK84TLinrH7NMnvoEG92yTSsS1XEW3rNMv87FNQq1vZTXQTc.eRlBOd7yp4Bp3XVKHNruxIiqPc6wd7euoCbMxialcDg&dib_tag=se&keywords=bringing+nature+home+by+doug+tallamy&qid=1713819464&sprefix=bringing+nat%2Caps%2C150&sr=8-1" target="_blank" rel="noreferrer">
                                <button className='view-amazon-button'>View on Amazon</button>
                            </a>
                        </div>
                    </div>

                    <div className='each-book'>
                        <img src="./images/homepage/book-3.jpeg" alt="Think Like An Ecosystem - Amélie des Plantes" title="Think Like An Ecosystem - Amélie des Plantes" loading="lazy"/>
                        <div>
                            <h4 className='ph4'>Think Like An Ecosystem: An Introduction to Permaculture, Water Systems, Soil Science and Landscape Design</h4>
                            <p className='ph4b'>Amélie des Plantes</p>
                            <a href="https://www.amazon.com/Think-Like-Ecosystem-Introduction-Permaculture-ebook/dp/B09RGBCVW9/ref=sr_1_1?crid=E5D2Y7MN9F6V&dib=eyJ2IjoiMSJ9.b8pXV-8lZvtAem-EgaAFLalWeX67hk91GplIUwbx_mlYuxjCuWTAYajeeTFvrCpR0zvFCMPtjvcEDHzXC1mqRewBNM93LJfU40hxvPbZmsA8IM1uzLVFjbtYQa7_EOYZ9jYwd7ddqYTq4m_KacIwY-u4JOx9Pwny49u-9xwn_-1yh9USUu7fBE1LoGlfORTYy-EkchRfPVr3qtd1k2FyQscaF5Fb1sA-p81zPPPyUxE.ckkthCuSvwbGmk9aYtKzXOloxjqhd3eGKJzubqCAwl8&dib_tag=se&keywords=think+like+an+ecosystem&qid=1713819486&sprefix=think+like+an+ec%2Caps%2C148&sr=8-1" target="_blank" rel="noreferrer">
                                <button className='view-amazon-button'>View on Amazon</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}