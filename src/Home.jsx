import "./App.css"
import React, {useState, useEffect, useRef} from 'react'

function Home () {

    const [activeItem, setActiveItem] = useState('Education');
    const sectionsRef = useRef([]);

    const handleItemClick = (item) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, null, `#${item.toLowerCase()}`);
        }
        setActiveItem(item);
    };
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const navItem = document.querySelector(`.nav-item[data-section="${entry.target.id}"]`);

                    const navItems = document.querySelectorAll('.nav-item');
                    navItems.forEach(item => item.classList.remove('active'));

                    if (navItem) {
                        navItem.classList.add('active');
                        setActiveItem(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
                    }
                }
            });
        }, {
            threshold: 0.5
        });

        sectionsRef.current.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);


    return (
     <>
        <div className="container">
            <div className="division">
                <div className="profile">
                    <div className = "profile-header">
                        <img className="headshot" src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/headshot.jpeg"></img>
                        <div class="profile-header-text">
                            <h1 className="Name">Madeline Simpson</h1>
                            <p className="Description">Pursuing a BS in Computational Media @ Georgia Tech (Concentrations in Film and Media)<br></br>Contact: msimpson63@gatech.edu,<br></br><a href="https://www.linkedin.com/in/madeline-simpson-286604203/" target="_blank">LinkedIn<img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img></a></p>
                        </div>
                    </div>
                    <div className="nav-container">
                        <div className = "nav">
                            <div className={`nav-item ${activeItem === 'Education' ? 'active' : ''}`} data-section="education" onClick={() => handleItemClick('Education')}>EDUCATION</div>
                            <div className={`nav-item ${activeItem === 'Experience' ? 'active' : ''}`} data-section="experience" onClick={() => handleItemClick('Experience')}>EXPERIENCE</div>
                            <div className={`nav-item ${activeItem === 'Projects' ? 'active' : ''}`} data-section="projects" onClick={() => handleItemClick('Projects')}>PROJECTS</div>
                            <div className={`nav-item ${activeItem === 'Skills' ? 'active' : ''}`} data-section="skills" onClick={() => handleItemClick('Skills')}>EXTRAS & INTERESTS</div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <section ref={el => sectionsRef.current[0] = el} className="education-content" id="education">
                        <h3>EDUCATION</h3>
                        <div className="education-block">
                            <div className="edu-div">
                                <div className="edu-date">
                                    <p>JAN 2024 - PRESENT</p>
                                </div>
                                <div className="edu-desc">
                                    <h4>Georgia Tech (Expected to graduate in May, 2026)</h4>
                                    <p>3.741 GPA | Zell Miller Scholar | Member of Georgia Tech Musician's Network</p>
                                    <p>Relevant Coursework: Data Structures and Algorithms (Javascript), Linear Algebra, Multivariable Calculus, Intro to Film, Animation</p>
                                    <div className="edu-bubble">
                                        <p>Java</p>
                                        <p>Film</p>
                                        <p>Animation</p>
                                        <p>Linear Algebra</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="education-block">
                            <div className="edu-div">
                                <div className="edu-date">
                                    <p>MAY 2021 - MAY 2023</p>
                                </div>
                                <div className="edu-desc">
                                    <h4>University of Virginia (Pursued a BA in Computer Science, Minor in Entrepreneurship)</h4>
                                    <p>3.784 GPA | Member of Phi Eta Sigma Honors Society | Division 1 Varsity Soccer Player (May 2021 - May 2022)</p>
                                    <p>Relevant Coursework: Advanced Software Development Methods (Python and Django),
                                        Software Development Methods (Java), Program and Data Representation (C++), Computer Architecture (C), 
                                        Introduction to Entrepreneurship, Foundations of Commerce</p>
                                    <div className="edu-bubble">
                                        <p>Python</p>
                                        <p>C++</p>
                                        <p>C</p>
                                        <p>Java</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="education-block">
                            <div className="edu-div">
                                <div className="edu-date">
                                    <p>AUG 2017 - MAY 2021</p>
                                </div>
                                <div className="edu-desc">
                                    <h4>The Westminster Schools</h4>
                                    <p>96 GPA (on 100 scale) | AP Scholar with Distinction | National Honors Society | 2020 Goizueta Spanish Award Winner | Founder of Wesminster StudioW Film Club | Varsity Soccer Player</p>
                                    <p>Relevant Coursework: AP Computer Science A (Java), AP Computer Science Principles</p>
                                    <div className="edu-bubble">
                                        <p>Java</p>
                                        <p>Film</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section ref={el => sectionsRef.current[1] = el} className="experience-content" id="experience">
                    <h3>EXPERIENCE</h3>
                        <div className="experience-block">
                            <a href = "https://en.wikipedia.org/wiki/One_Spoon_of_Chocolate" target="_blank">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>MAY 2024 - JUN 2024</p>
                                    </div>
                                    <div className="edu-desc">
                                            <div className="header-link">
                                                <div className="header-img">
                                                    <h4>One Spoon of Chocolate Film</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
                                                </div>
                                                <h5>Production Intern</h5>
                                            </div>
                                        <p>Shadowed director RZA on set throughout the process of shooting the feature film One Spoon of Chocolate (expected release August, 2025). Helped with script supervising and special FX on set.</p>
                                        <div className="edu-bubble">
                                            <p>Film</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="experience-block">
                            <a href = "https://www.instagram.com/p/C_wobTJOxjk/?img_index=1" target="_blank">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>MAY 2024</p>
                                    </div>
                                    <div className="edu-desc">
                                            <div className="header-link">
                                                <div className="header-img">
                                                    <h4>ATL Camp Collective</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
                                                </div>
                                                <h5>Song Writer</h5>
                                            </div>
                                        <p><b>Selected for the Song Writer's Showcase</b></p>
                                        <p>Spent 3 days writing a song with Atlanta producer, Tomas Uribe, and two other selected musicians in an experience meant to unite talented and upcoming musican's across Atlanta. The song we created was ultimately selected for performance and showcase of the overall expereince.</p>
                                        <div className="edu-bubble">
                                            <p>Music</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="experience-block">
                            <a href = "https://github.com/madelinesimpson/CElegan-Classification" target="_blank">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>AUG 2023 - DEC 2023</p>
                                    </div>
                                    <div className="edu-desc">
                                            <div className="header-link">
                                                <div className="header-img">
                                                    <h4>Emory University Center for AI Learning</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
                                                </div>
                                                <h5>Student Fellow</h5>
                                            </div>
                                        <p>As a student fellow of the AI Center, I was assigned a computer vision project for a graduate biology student at Emory working with C. Elegan worms. The student came to the center desiring for the worm counting and classification process to be automized with AI.
                                        I spent the semester aiming to tackle that problem with this project.</p>
                                        <div className="edu-bubble">
                                            <p>Python</p>
                                            <p>Keras</p>
                                            <p>Tensorflow</p>
                                            <p>AI</p>
                                            <p>Computer Vision</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="experience-block">
                            <a href = "https://plumcoownership.com/" target="_blank">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>MAY 2022 - AUG 2022</p>
                                    </div>
                                    <div className="edu-desc">
                                            <div className="header-link">
                                                <div className="header-img">
                                                    <h4>Plum Co-Ownership</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
                                                </div>
                                                <h5>Full Stack Developer</h5>
                                            </div>
                                        <p>Worked in a team of Software Engineers at a startup using Agile Development to
                                        transition the company website from Wordpress to a full stack Ruby on Rails application.</p>
                                        <div className="edu-bubble">
                                            <p>HTML</p>
                                            <p>CSS</p>
                                            <p>Ruby</p>
                                            <p>Agile Development</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </section>
                    <section ref={el => sectionsRef.current[2] = el} className="projects-content" id="projects">
                        <h3>PROJECTS</h3>
                        <div className="experience-block">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>AUG 2024 - PRESENT</p>
                                    </div>
                                    <div className="edu-desc">
                                        <div className="header-link">
                                            <div className="header-img">
                                                <h4>Stuffies Short Film</h4>
                                            </div>
                                            <h5>Writer, Director, and Editor</h5>
                                        </div>
                                        <p>Writing and gathering resoures to produce another short film that I plan to direct and edit.</p>
                                        <div className="edu-bubble">
                                            <p>Film</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="experience-block">
                            <a href = "https://github.com/madelinesimpson/3DRenderer" target="_blank">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>SEPT 2024</p>
                                    </div>
                                    <div className="edu-desc">
                                        <div className="header-link">
                                            <div className="header-img">
                                                <h4>3D Rendering Engine with Apple Metal and C++</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
                                            </div>
                                        </div>
                                        <p>Created a 3D rendering engine in C++ with the goal of developing an understanding of graphics rendering before diving into game development and animation.</p>
                                        <div className="edu-bubble">
                                            <p>C++</p>
                                            <p>Objective-C</p>
                                            <p>Objective-C++</p>
                                            <p>Apple Metal</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="experience-block">
                            <a href = "https://github.com/madelinesimpson/theminuniformsite" target="_blank">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>MAR 2024 - AUG 2024</p>
                                    </div>
                                    <div className="edu-desc">
                                            <div className="header-link">
                                                <div className="header-img">
                                                    <h4>Them in Uniform Website</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
                                                </div>
                                                <h5>Full Stack Developer</h5>
                                            </div>
                                        <p>Developed a React application from scratch for my band's website. Created some of the pixel art myself and sourced other pieces online. Set up online hosting with GoDaddy and AWS.</p>
                                        <div className="edu-bubble">
                                            <p>React</p>
                                            <p>Javascript</p>
                                            <p>HTML</p>
                                            <p>CSS</p>
                                            <p>AWS Hosting</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="experience-block">
                            <a href = "https://theminuniform.com/epk/" target="_blank">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>NOV 2023 - PRESENT</p>
                                    </div>
                                    <div className="edu-desc">
                                            <div className="header-link">
                                                <div className="header-img">
                                                    <h4>Them in Uniform Band</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
                                                </div>
                                                <h5>Lead Singer & Guitarist</h5>
                                            </div>
                                        <p>Write and record music, perform shows around Atlanta, and manage the social media for my band. Our music is out on all streaming platforms, and you can find some of the promotional videos I've created on our Instagram: @TheminUniform. I built the stratocaster that I play daily and at every show, and I love the technical aspects of guitars.</p>
                                        <div className="edu-bubble">
                                            <p>Music</p>
                                            <p>Marketing</p>
                                            <p>Film: Content Creation</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="experience-block">
                            <a href = "https://www.youtube.com/watch?v=3Gn1eLF2rDc&t=127s" target="_blank">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>JAN 2020 - SEPT 2020</p>
                                    </div>
                                    <div className="edu-desc">
                                            <div className="header-link">
                                                <div className="header-img">
                                                    <h4>Marked Short Film</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
                                                </div>
                                                <h5>Writer, Director, and Editor</h5>
                                            </div>
                                        <p><b>The Emmys - National Student Production Award Winner: Best Director (2021) <br></br><br></br> All American High School Film Festival Nominee: Best Screenplay, Female Rising Star (2020)</b></p>
                                        <p>Created and utilized my high school's film club, StudioW, to produce a film I had written with my friend, Sam Cohn. Casted actors, 
                                            scouted locations, raised funding, sourced equipment, shot listed, directed, operated the camera for, and edited the film in After Effects and Premiere Pro. </p>
                                        <div className="edu-bubble">
                                            <p>Film</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="experience-block">
                            <a href = "https://www.youtube.com/watch?v=3Gn1eLF2rDc&t=127s" target="_blank">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>SEPT 2024</p>
                                    </div>
                                    <div className="edu-desc">
                                            <div className="header-link">
                                                <div className="header-img">
                                                    <h4>This Site</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
                                                </div>
                                                <h5>Full Stack Developer</h5>
                                            </div>
                                        <p>This site is a React application created from scratch and hosted on AWS with a GoDaddy domain.</p>
                                        <div className="edu-bubble">
                                            <p>React</p>
                                            <p>Javascript</p>
                                            <p>HTML</p>
                                            <p>CSS</p>
                                            <p>AWS Hosting</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </section>
                    <section ref={el => sectionsRef.current[3] = el} className="skills-content" id="skills">
                        <h3>EXTRAS & INTERESTS</h3>
                        <div className="experience-block">
                            <a href = "https://github.com/madelinesimpson/port-final/tree/main/src/assets/Koda.png" target="_blank">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>MAY 2023- PRESENT</p>
                                    </div>
                                    <div className="edu-desc">
                                            <div className="header-link">
                                                <div className="header-img">
                                                    <h4>Koda</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
                                                </div>
                                                <h5>Dog Mom</h5>
                                            </div>
                                        <p>I became a dog mom to an Australian Shepherd named Koda in May of 2023. I take the chance to show him off every chance I get. Click here to see some pictures.</p>
                                        <div className="edu-bubble">
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="experience-block">
                            <a href = "https://www.instagram.com/grippysockgrub/" target="_blank">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>2016 - PRESENT</p>
                                    </div>
                                    <div className="edu-desc">
                                            <div className="header-link">
                                                <div className="header-img">
                                                    <h4>Cooking</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
                                                </div>
                                            </div>
                                        <p>I have had a passion for cooking since middle school. I post some of my creations on an Instagram account for my friends. I have also made some videos of me cooking for fun as well</p>
                                        <div className="edu-bubble">
                                            <p>Cooking</p>
                                            <p>Film: Content Creation</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="experience-block">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>2010 - PRESENT</p>
                                    </div>
                                    <div className="edu-desc">
                                            <div className="header-link">
                                                <div className="header-img">
                                                    <h4>Video Games</h4>
                                                </div>
                                            </div>
                                        <p>Certainly not a skill but an interest (I am notoriously terrible at video games). Some of my favorite games throughout the years include Minecraft, Skate 3, Super Smash Bros, The Amazing Spiderman 2, Fortnite, and Overwatch. 
                                            I'm currently obsessing over the Zelda series and just finished Breath of the Wilde (very late). My middle school years were spent making javascript games, and I participated in the Student Game Developers club at UVA.
                                            I've always wanted to dive into making a full 3D game but have not found the time yet. </p>
                                        <div className="edu-bubble">
                                            <p>Video Games</p>
                                            <p>Javascript</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
     </>
    );
}

export default Home;