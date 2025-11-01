import {useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);



    useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100"
                    }
                }
            )
        })
        gsap.fromTo(sectionRef.current, {opacity: 0}, {opacity: 1, duration: 1.5})
    }, [])

    return (<section ref={sectionRef} id="work" className="app-showcase">
        <div className="w-full">
            <div className="showcaselayout">
                <div ref={project1Ref} className="first-project-wrapper">
                    <div className="image-wrapper">
                        <img src="/images/project1.png" alt="Ryde"/>
                    </div>
                    <div className="text-content">
                        <h2>
                            On-Demand Rides Made Simple with a Powerful, User-Friendly App
                            called Ryde
                        </h2>
                        <p className="text-white-50 md:text-xl">
                            An app built with react Native, Expo, & TailwindCSS for a fast,
                            user-friendly experience.
                        </p>
                    </div>
                </div>

                <div className="project-list-wrapper overflow-hidden">
                    <div ref={project2Ref} className="project">
                        <div className="image-wrapper bg-[#ffefdb]">
                            <img src="/images/project2.png" alt="library management"/>
                        </div>
                        <h2>Library Management Platform</h2>
                    </div>
                    <div ref={project3Ref} className="project">
                        <div className="image-wrapper bg-[#ffe7eb]">
                            <img src="/images/project3.png" alt="YC Directory"/>
                        </div>
                        <h2>YC Directory - A Startup Showcase App</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>);
};

export default ShowcaseSection;
