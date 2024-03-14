import React from "react";

const About = () => {
    return (
        <>
            <div>
                <h1>Who we are</h1>
                <h2>The History of Nature</h2>
                <p>To educate students, staff, and community members in the need for water conservation with a demonstration garden using no pesticides, water recycling methods, drought tolerant and native plantings.</p>
            </div>

            <div>
                <h3>September 2007</h3>
                <h4>PHIG Launched</h4>
                <p>Pleasant Hill's Volunteer Day marked a groundbreaking moment as Mt. Diablo Adult Education Gardening Program, led by teacher Monika Olsen, turned a water conservation demonstration garden into reality with an initial grant from the city.</p>
            </div>

            <div>
                <h3>??? 2008</h3>
                <h4>Planting Begins</h4>
                <p>The project involved soil preparation, mulching, and planting native and drought-tolerant species. Plant propagation included native meadow grasses. Eagle Scout Crosby Sperling built an information kiosk.</p>
                <p>Volunteers added paths and a dry streambed during Community Service Day and Chevron's Week of Caring in September. Ongoing work included path building and planting in prepared beds as the weather cooled.</p>
            </div>

            <div>
                <h3>??? 2009</h3>
                <h4>Major Milestones</h4>
                <p>Weeding, sheet-mulching, composting, and pruning continued in 2009, but a major accomplishment was bringing a micro spray and drip irrigation water conservation system to the garden with funding provided by several organizations in Pleasant Hill and Contra Costa County and labor supplied by many volunteer groups.</p>
            </div>

            <div>
                <h3>??? 2010</h3>
                <h4>Wildlife Housing</h4>
                <p>As a part of the requirements for the National Wildlife Federation's Habitat certification, PHIG volunteers provided food, water, shelter, and nesting areas for birds, bats, lizards, and insects in as many ways as possible. Bird shelters and houses, a bat house, and other shelters were designed, built, and installed in the garden.</p>
            </div>

            <div>
                <h1>The Garden Today</h1>
                <p>A former wasteland transformed into a thriving wildlife habitat and water-conserving garden through the collaborative efforts of volunteers, students, scouts, and community members in Pleasant Hill.</p>
                <p>Established in 2007 as a landscape design class project, the garden promotes sustainable practices, featuring drought-tolerant and native plants, and serves as a valuable learning resource.</p>
            </div>

            <div>
                <h1>Contact Form</h1>
                <form action="#" method="post">
                    <div>
                        <label for="first-name">First Name*  </label>
                        <input type="text" id="first-name" name="first-name" required />
                    </div>
                    <div>
                        <label for="last-name">Last Name  </label>
                        <input type="text" id="last-name" name="last-name" />
                    </div>
                    <div>
                        <label for="email">Email*  </label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label for="phone">Phone Number*  </label>
                        <select id="country-code" name="country-code" required>
                            <option value="+1">+1 (USA)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+91">+91 (India)</option>
                        </select>
                        <input type="text" id="phone" name="phone" required />
                    </div>
                    <div>
                        <label for="country">Country of Residence  </label>
                        <select id="country" name="country">
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="India">India</option>
                        </select>
                    </div>
                    <div>
                        <label for="message">Message  </label>
                        <textarea id="message" name="message" rows="4" cols="50"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default About;