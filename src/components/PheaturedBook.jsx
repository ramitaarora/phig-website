import { css } from '@emotion/css';

export default function PheaturedBook() {
    return (
        
        <section id="pheatured-book" className={css`margin: 90px auto; width: 95%; box-shadow: 5px 5px 5px 5px lightgrey;background-color: white;background-image: radial-gradient(circle, #ffffff 30%, #f0f0f0 60%);`}>
            <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                
                <div className={css`width: 60%`}>
                    <h3 style={{marginTop: '40px', marginLeft:'80px', marginBottom:'10px'}}>Pheatured Book</h3>
                    <div><hr style={{width:'50px',height:'5px',backgroundColor:'#97C159',border: 'none', marginTop:'-10px',marginLeft:'80px'}}></hr></div>
                    <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                        <div style={{marginLeft: '75px', marginTop:'10px'}}>
                            <img style={{height:'300px',width:'900px', boxShadow:'5px 5px 5px 5px lightgrey',marginBottom:'30px'}} src="./images/homepage/pheatured-book.jpeg" alt="pheatured-book" />
                        </div>
                        <div className='PheaturedB'>
                        <h4 style={{marginBottom:'10px'}}>Bringing Nature Home: How You Can Sustain Wildlife with Native Plants</h4>
                            <p style={{color:'grey',marginBottom:'40px'}}>Douglas W. Tallamy</p>
                            {/*<button>View on Goodreads</button>*/}
                            <p style={{color:'grey',marginBottom:'20px'}}>As urbanization and habitat loss advance, wildlife populations face growing pressures. However, a crucial and straightforward measure to counter this concerning trend exists: Anyone with access to a patch of land can make a substantial contribution to preserving biodiversity.</p>
                            <p style={{color:'#97C159'}}>Read More</p>
                        </div>
                    </div>
                </div>

                <div className={css`width: 40%`}>
                    <h4 style={{marginBottom:'10px',marginTop:'30px'}}>Browse Similar Titles</h4>
                    <div><hr style={{width:'50px',height:'5px',backgroundColor:'#97C159',border: 'none', marginTop:'-10px',marginBottom:'20px'}}></hr></div>
                    <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                        <img src="./images/homepage/book-1.jpeg" alt="pheatured-book" className={css`height: 60px;margin: 5px`} />
                        <div>
                            <h4 className='ph4'>The Living Landscape: Designing for Beauty and Biodiversity in the Home Garden</h4>
                            <p className='ph4b'>Rick Darke, Douglas W. Tallamy</p>
                            {/*<button>View on Amazon</button>*/}
                        </div>
                    </div>
                    <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                        <img src="./images/homepage/book-2.jpeg" alt="pheatured-book" className={css`height: 80px; margin: 5px`} />
                        <div>
                            <h4 className='ph4'>Nature’s Best Hope: A New Approach to Conservation That Starts in Your Yard</h4>
                            <p className='ph4b'>Douglas W. Tallamy</p>
                            {/*<button>View on Amazon</button>*/}
                        </div>
                    </div>
                    <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                        <img src="./images/homepage/book-3.jpeg" alt="pheatured-book" className={css`height: 90px;margin: 5px`} />
                        <div>
                            <h4 className='ph4'>Think Like An Ecosystem: An Introduction to Permaculture, Water Systems, Soil Science and Landscape Design</h4>
                            <p className='ph4b'>Amélie des Plantes</p>
                            {/*<button>View on Amazon</button>*/}
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}