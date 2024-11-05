import '../styles/dashboard.css'

export const Home = () => {
    return (
        <div className="dashboard-wrapper">
            <div>
                <div className="dashboard-left">
                    <h2>Welcome, Alex</h2>
                    <div className="streak-card">
                        <div className="streak-number">1</div>
                        <div className="streak-instructions">Solve 3 problems to continue your streak</div>
                        <div className="streak-days">
                            <div className="streak-day active">T</div>
                            <div className="streak-day">W</div>
                            <div className="streak-day">Th</div>
                            <div className="streak-day">F</div>
                            <div className="streak-day">S</div>
                        </div>
                    </div>
                    <div className="unlock-box">
                        <img alt="" src="https://brilliant.org/cdn-cgi/image/width=128,quality=75,format=auto/images/loggedInHomepage/leagues-locked.svg" />
                        <div>
                            <p>UNLOCK LEAGUES</p>
                            <p>0 of 175 XP</p>
                        </div>
                    </div>
                </div>
                <div className="dashboard-right">
                    <h2>Jump Back In</h2>

                    <div className="continue-box">
                        <div className="continue-upper">
                            <img src="https://ds055uzetaobb.cloudfront.net/category-images/science-WrzOSf.png" alt="" />

                        </div>
                        <div className="progress">
                            <div className="prog-bar"></div>
                        </div>
                        <div className="continue-lower">
                            <p className="level">SCIENCE LEVEL 1</p>
                            <p className="c-heading">Scientific Thinking</p>
                            <button className="continue-btn">Continue path</button>
                        </div>
                    </div>
                    <h2>Recommended for you</h2>
                    <div className="rec-wrapper">
                        <div className="recommend-box">
                            <img className="recommend-img" src='https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-deduction-M7p41u.png' />
                            <p>Logic</p>
                        </div>

                        <div className="recommend-box">
                            <img className="recommend-img" src='https://ds055uzetaobb.cloudfront.net/category-images/computer-science-9mKBqy.png' />
                            <p>Computer Science Fundamentals</p>
                        </div>

                        <div className="recommend-box">
                            <img className="recommend-img" src='https://ds055uzetaobb.cloudfront.net/category-images/foundational-math-lI90N2.png' />
                            <p>Solving equations</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const Courses = () => {

    const courses = [{ title: 'Real-World Algebra', img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/VariablesCourseCard_960x960-75LzA9.png?width=204" },
    { title: "How LLMs Works", img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/how-llms-work-z7ovbF.png?width=204" },
    { title: "Clustering", img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/clusteringCourseCard_960x960-MMVpvJ.png?width=204" },
    { title: "Vectors", img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/vectors-Grpuo7.png?width=204" },
    { title: "Designing Programs", img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Designing_Programs_Course_Card-Bkn4k5.png?width=204" },
    { title: "Applied Python", img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Text_Analysis_in_Python-rcga5J.png?width=204" },
    { title: "Case Study : Unlocking Rental Value on Airbnb", img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/capstone-making-money-witih-airbnb-NDlGk9.png?width=204" },
    { title: "Case Study : Going Viral on X", img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/capstone-twitterx-viral-tracking-rt01GG.png?width=204" },
    { title: "Case Study : Topping the Charts with Spotify", img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/capstone-spotify-L7f7vf.png?width=204" },
    { title: "Case Study : Maximizing Electric Car Value", img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/capstone-pricing-electric-vehicles-5KzO8N.png?width=204" },
    ]
    const categories = ['New courses', 'Math', 'Data', 'Computer Science', 'Science']
    return (

        <div className="course-wrapper">
            <div>
                <h2>Browse all 70+ courses</h2>
                <div className="search-wrapper" >
                    <input type="text" placeholder="Search" />
                </div>
                <div className="category-wrapper">
                    {categories.map((item, idx) => { return <CourseCategory name={item} key={idx} /> })}
                </div>

                <h2 className="new-heading">New Courses</h2>
                <div className="courses-wrapper">
                    {courses.map((item, idx) => { return <Course key={idx} name={item.title} img={item.img} /> })}
                </div>
            </div>
        </div>
    )
}

const CourseCategory = ({ name }: { name: string }) => {
    return (
        <div className="course-category">
            <p>{name}</p>
        </div>
    )
}

const Course = ({ name, img }: { name: string, img: string }) => {
    return (
        <div className="course-outer">
            <div className="course">
                <img src={img} alt="" />
            </div>
            <p>{name}</p>
        </div>
    )
}