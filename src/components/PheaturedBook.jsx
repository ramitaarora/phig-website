import { css } from '@emotion/css';

export default function PheaturedBook() {
    return (
        <section id="pheatured-book" className={css`margin: 90px auto; width: 95%; box-shadow: 5px 5px 5px 5px lightgrey;`}>
            <div className={css`display: flex; justify-content: space-between; align-items: center;`}>

                <div className={css`width: 60%`}>
                    <h3>Pheatured Book</h3>
                    <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                        <div>
                            <img src="./images/homepage/pheatured-book.jpeg" alt="pheatured-book" />
                        </div>
                        <div>
                            <h4>Bringing Nature Home: How You Can Sustain Wildlife with Native Plants</h4>
                            <p>Douglas W. Tallamy</p>
                            <button>View on Goodreads</button>
                            <p>As urbanization and habitat loss advance, wildlife populations face growing pressures. However, a crucial and straightforward measure to counter this concerning trend exists: Anyone with access to a patch of land can make a substantial contribution to preserving biodiversity.</p>
                            <p>Read More</p>
                        </div>
                    </div>
                </div>

                <div className={css`width: 40%`}>
                    <h4>Browse Similar Titles</h4>
                    <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                        <img src="./images/homepage/book-1.jpeg" alt="pheatured-book" className={css`height: 150px;`}/>
                        <div>
                            <h4>The Living Landscape: Designing for Beauty and Biodiversity in the Home Garden</h4>
                            <p>Rick Darke, Douglas W. Tallamy</p>
                            <button>View on Amazon</button>
                        </div>
                    </div>
                    <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                        <img src="./images/homepage/book-2.jpeg" alt="pheatured-book" className={css`height: 150px;`}/>
                        <div>
                            <h4>Nature’s Best Hope: A New Approach to Conservation That Starts in Your Yard</h4>
                            <p>Douglas W. Tallamy</p>
                            <button>View on Amazon</button>
                        </div>
                    </div>
                    <div className={css`display: flex; justify-content: space-between; align-items: center;`}>
                        <img src="./images/homepage/book-3.jpeg" alt="pheatured-book" className={css`height: 150px;`}/>
                        <div>
                            <h4>Think Like An Ecosystem: An Introduction to Permaculture, Water Systems, Soil Science and Landscape Design</h4>
                            <p>Amélie des Plantes</p>
                            <button>View on Amazon</button>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}