import "./App.css"
import cube from "./assets/cube-still.png" 
import marked from './assets/marked-still.png'
import tiu from './assets/TIU-still.png'
import live from './assets/live-still.jpg'
import stuffies from './assets/stuffies-still.png'
import koda from './assets/koda-still.png'
import gnocchi from './assets/gnocchi.png'
import smoothscroll from "smoothscroll-polyfill"
import React, {useState, useEffect, useRef} from 'react'

function Home () {
    smoothscroll.polyfill();

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
        const hash = window.location.hash;
        if (hash) {
            const section = document.getElementById(hash.substring(1));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                setActiveItem(hash.substring(1).charAt(0).toUpperCase() + hash.substring(1).slice(1));
            }
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    const navItem = document.querySelector(`.nav-item[data-section="${sectionId}"]`);

                    if (navItem) {
                        const navItems = document.querySelectorAll('.nav-item');
                        navItems.forEach(item => item.classList.remove('active'));

                        navItem.classList.add('active');
                        setActiveItem(sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
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
                            <p className="Description">Pursuing a BS in Computational Media @ Georgia Tech (Concentrations in Film and Media), Minor in Psychology<br></br>Contact: madelinegrsimpson@gmail.com,<br></br>
                                <div class="links">
                                    <a href="https://www.linkedin.com/in/madeline-simpson-286604203/" target="_blank">LinkedIn<img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img></a>
                                    <div class="separator" role="presentation"></div> 
                                    <a href="https://github.com/madelinesimpson" target="_blank">Github<img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img></a>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="nav-container">
                        <div className="nav">
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
                                    <p>3.741 GPA | Zell Miller Scholar | Dean's List | Georgia Tech Musician's Network</p>
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
                                    <p>3.784 GPA | Phi Eta Sigma Honors Society | Dean's List | Division 1 Varsity Soccer Player (May 2021 - May 2022)</p>
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
                                        <p>Shadowed director RZA on set throughout the process of shooting feature film One Spoon of Chocolate.
                                        Assisted with script supervising for continuity, labeled takes and alterations for the editors, and created special FX props
                                        </p>
                                        <div className="edu-bubble">
                                            <p>Directing</p>
                                            <p>Script Supervising</p>
                                            <p>Prop Making</p>
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
                                        <p>Wrote and recorded a song with Atlanta producer Tomás Uribe and two other selected musicians at Maze Studios in an experience designed to unite talented musicians across Atlanta. Selected by the program as one of the top four groups to perform the new song live at City Winery in downtown Atlanta.</p>
                                        <div className="edu-bubble">
                                            <p>Songwriting</p>
                                            <p>Guitar</p>
                                            <p>Singing</p>
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
                                                <h5>AI Engineering Intern</h5>
                                            </div>
                                        <p>Independently researched, designed, and implemented multiple deep learning computer vision models using Python, Keras, and TensorFlow to analyze and extract key metadata from microscope images of C. Elegans worms, saving graduate biology students 6 hours of manual labor per week. Collaborated with other students to research and design a computer vision model to analyze specific qualities of Ugandan children’s art work for a study on the educational effects of implementing storytelling and art therapy into low income education systems.</p>
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
                                                <h5>Software Engineering Intern</h5>
                                            </div>
                                        <p>Designed the full-stack architecture for the company’s transition from a WordPress site to a Ruby on Rails application. Worked in a team of software engineers in sprints to implement this architecture with Ruby</p>
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
                        <div className="experience-block-stuffies">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>AUG 2024 - PRESENT</p>
                                        <img src={stuffies}></img>
                                    </div>
                                    <div className="edu-desc">
                                        <div className="header-link">
                                            <div className="header-img">
                                                <h4>Stuffies Short Film</h4>
                                            </div>
                                            <h5>Writer, Director, and Editor</h5>
                                        </div>
                                        <p>Writing and gathering resoures to create a comedic short film called Stuffies. The film explores the Interal Family Systems model of psychology by personifying the different parts of the personality through stuffed animals from different eras of the protagonist's life. However, once a bitter ex-partner steals some of these stuffed animals, we embark on a wild goose chase to recollect them, and thus, reclaim the protagonist's personality from this ex as a whole.</p>
                                        <div className="edu-bubble">
                                            <p>Writing</p>
                                            <p>Directing</p>
                                            <p>Premiere Pro</p>
                                            <p>After Effects</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="experience-block">
                            <a href = "https://github.com/madelinesimpson/3DRenderer" target="_blank">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>SEPT 2024</p>
                                        <img src={cube}></img>
                                    </div>
                                    <div className="edu-desc">
                                        <div className="header-link">
                                            <div className="header-img">
                                                <h4>3D Rendering Engine with Apple Metal and C++</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
                                            </div>
                                        </div>
                                        <p>Developed a custom 3D renderer from scratch using C++ and Apple's Metal API to render 3D objects. Implemented shader functions, optimized vertex data, and designed the rendering pipeline to support keyboard and mouse input for interactive 3D object manipulation.</p>
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
                                        <img src={tiu}></img>
                                    </div>
                                    <div className="edu-desc">
                                            <div className="header-link">
                                                <div className="header-img">
                                                    <h4>Them in Uniform Website</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
                                                </div>
                                                <h5>Full Stack Developer</h5>
                                            </div>
                                        <p>Built and deployed a responsive website using React to showcase information about my band Utilized Javascript and CSS, incorporating some of my own pixel art to create a nostalgic, video game inspired, interactive and dynamic user interface. Integrated the BandsInTown API to dynamically showcase data about upcoming shows on the website</p>
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
                            <a href = "https://linktr.ee/theminuniform?fbclid=PAZXh0bgNhZW0CMTEAAaamh7_9T1gUZtlxUKGm7omEuK8K_u2xVnAHnDUTaM0Q5rzWoJ9spgUNqEY_aem_oFFukku4fEAq4lL-YVuECQ" target="_blank">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>NOV 2023 - PRESENT</p>
                                        <img src={live}></img>
                                    </div>
                                    <div className="edu-desc">
                                            <div className="header-link">
                                                <div className="header-img">
                                                    <h4>Them in Uniform Band</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
                                                </div>
                                                <h5>Lead Singer & Guitarist</h5>
                                            </div>
                                        <p>Write and record music, perform shows around Atlanta, create video content, and manage the social media for my indie rock band, Them in Uniform. Built and properly set up the Fender Stratocaster (or more technically a Partscaster) that I play daily.</p>
                                        <div className="edu-bubble">
                                            <p>Songwriting</p>
                                            <p>Guitar</p>
                                            <p>Singing</p>
                                            <p>Ableton</p>
                                            <p>Social Media Marketing</p>
                                            <p>Film: Content Creation</p>
                                            <p>Premiere Pro</p>
                                            <p>Guitar Teching</p>
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
                                        <img src={marked}></img>
                                    </div>
                                    <div className="edu-desc">
                                            <div className="header-link">
                                                <div className="header-img">
                                                    <h4>Marked Short Film</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
                                                </div>
                                                <h5>Writer, Director, and Editor</h5>
                                            </div>
                                        <p><b>The Emmys - National Student Production Award Winner: Best Director (2021) <br></br><br></br> All American High School Film Festival Nominee: Best Screenplay, Female Rising Star (2020)</b></p>
                                        <p>Created and utilized my high school's film club, StudioW, to produce a short film I had written with my friend, Sam Cohn. Casted actors, 
                                            scouted locations, raised funding, sourced equipment, shot listed, directed, operated the camera for, and edited the film in After Effects and Premiere Pro. </p>
                                        <div className="edu-bubble">
                                            <p>Writing</p>
                                            <p>Directing</p>
                                            <p>Premiere Pro</p>
                                            <p>After Effects</p>
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
                                                    <h4>Portfolio Site</h4><img src="https://raw.githubusercontent.com/madelinesimpson/port-final/refs/heads/main/src/assets/external-link.svg"></img>
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
                                        <img src={koda}></img>
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
                            <a href = "https://www.instagram.com/madeline_simpson_cooks" target="_blank">
                                <div className="exp-div">
                                    <div className="exp-date">
                                        <p>2016 - PRESENT</p>
                                        <img src={gnocchi}></img>
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
                                        <p>Certainly not a skill but an interest (I am notoriously terrible at video games). Some of my favorite games throughout the years include Minecraft, Skate 3, Super Smash Bros, The Amazing Spiderman 2, Fortnite, Fall Guys, and Overwatch. 
                                            I'm currently obsessing over the Zelda series and just finished Breath of the Wild. I spent my middle school years making javascript games, and I participated in the Student Game Developers club at UVA.
                                            I've always wanted to dive into making a full 3D game but have not found the time. </p>
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