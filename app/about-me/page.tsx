import {Navbar} from "@/components/Navbar";
import {Content} from "@/components/Content";
import CobourgBesidesTorontoMap from './Cobourg-besides-Toronto.png'
import collegeGraduation from './college-graduation.jpg'
import {TextAroundImage} from "@/components/TextAroundImage";

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Content>
                <div className="sm:flex mb-4">
                    <div className="w-full">
                        <TextAroundImage image={<img className="w-full" src={CobourgBesidesTorontoMap.src} alt="Google Maps showing Cobourg alongside Toronto" />}
                                         tailwindImageWrapperClasses="w-2/3"
                                         text={
                                             <>
                                                 <div className="font-bold text-2xl lg:text-4xl lg:mb-4">My name is Mike DiDomizio.</div>
                                                 <div className="font-bold lg:text-2xl mb-4">I was born in 1985 in Cobourg, Ontario, Canada.</div>
                                                 I spent the first 28 years of my life living in Cobourg or neighbouring city Port Hope.
                                                 <br/>
                                                 We had a computer in our home, which was not all that common in the late 1980s.
                                                 <br/>
                                                 I spent a lot of time messing with it (and breaking it).
                                                 My Mom would set up these small programs where it would ask you the input of verbs, nouns, adjectives and then would take those and form a sentence.
                                                 The sentences would end up goofy and the point of it was to teach. I spent a lot of time writing my own, writing
                                             </>
                                         }/>
                    </div>
                    {/*<div className="w-1/2">*/}
                    {/*    <img src={CobourgBesidesTorontoMap.src} alt="Google Maps showing Cobourg alongside Toronto" />*/}
                    {/*</div>*/}
                </div>

                <h2 className="font-bold text-2xl">
                    Early Age
                </h2>

                <p>
                We had a computer in our home, which was not all that common in the late 1980s. I spent a lot of time messing with it (and breaking it).
                My Mom would set up these small programs where it would ask you the input of verbs, nouns, adjectives and then would take those and form a sentence.
                The sentences would end up goofy and the point of it was to teach. Eventually I would build my own

                In high school I took a computer sciences class where I had my first real introduction into software development.
                </p>

                <div className="w-full">
                    <TextAroundImage image={<img className="w-full" src={collegeGraduation.src} alt="College Graduation pic" />}
                                     tailwindImageWrapperClasses="w-1/2"
                                     text={
                                         <>
                                             After high school I enrolled in the Police Foundations course at Fleming College, with a goal of becoming a Police Officer.
                                             <br/>
                                             My goal has always been the same, to help people and make the world a better place.
                                             <br/>
                                         </>
                                     }/>
                </div>

                <div>
                    After College I struggled a lot making ends meet. I spent my days working 7am-2pm pouring concrete, and 3pm-11pm working security 5 days a week. After work and on the weekends I would spend time coding.

                    I bought a book on ASP.NET and went through tutorials and quickly threw together websites.  I struggled quite a bit with ASP.NET, there was a lot to learn and I had very little background in software development.

                    Eventually I switched to learning PHP.  I loved working with PHP and running XAMPP locally (this is me giving a little throwback), and deploying my websites through HostGator.

                    JavaScript had begun picking up steam and I remember quite clearly making my first AJAX request and knowing we were hitting a golden era of the Internet.  No longer would a page need an entire refresh to fetch data, it blew my mind.

                    It was around this time I started building and hosting other company&apos;s websites. It was a time where everyone wanted an internet presence and I wanted to be there. I was not very successful at this, it was tough and I wasn&apos;t a great salesman.

                    - SearchNorthumberland

                    I wanted to help my community as much as possible.  I felt like a lot times people would travel to bigger neighbouring cities
                    to buy goods when we had them at home.  I created a search engine that would crawl websites, determine if it was locally, collect keywords, and then follow links and continue.
                    In total it collected around ~750 websites, which is a lot for a small city.

                    I can&apos;t recall how but I was interviewed by the newspaper which was the first time I was interviewed for software development.
                    That lead to me after being interviewed by CBC Radio 1 which was pretty exciting as how often do you get your story broadcast across the entire country.

                    In the end though, SearchNorthumberland didn&apos;t pan out.

                    - MideoMe

                    I had hit a slump both mentally and financially. I stumbled upon a Reddit post from a user that was interested in finding someone that would want to collaborate on a project called MideoMe.

                    The plan was to have a social media website that allowed you to record 30 second videos, called mideos. It was the Vine/Tiktok before them.

                    We developed a beautiful fully fleshed out website and an iOS app to go with it. Today it seems normal that you would be able to record videos to a social media site on an iPhone, but we were doing that in 2012.

                    I think some bad planning, burnout, lack of business sense/direction, lack of funding, and the Twitter/X based competitor Vine eventually had development stop on MideoMe and eventually it was shut down.

                    - Spoonity

                    PhoneGap had a website that allowed you to add your name and location to a world map to find developers. I had added my name at some point and had thought nothing of it.

                    I received an email from a person named Max who had seen my profile and asked if I was interested in applying for a position.

                    I ended up doing an interview, coding something up and got the job. This required me to move to Ottawa, a city I had only previously visited for a day. I had no money and my Mom let me borrow $1000 to get me back on my feet.

                    I packed everything into my car and drove to Ottawa to live in a which I shared with 3 other roommates.

                    - IDS North America

                    - Gemalto/Thales Canada

                    - Boxing project

                    - COVID project

                    - Coveo

                    - theScore
                </div>
            </Content>
        </div>
    )
}
