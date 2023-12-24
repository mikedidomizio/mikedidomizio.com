import mideoMeInTheAppStore from './2013-11-20-building-my-first-phonegap-ios-app-and-what-i-learned/mideome-in-the-app-store.png'
import Link from "next/link";
import {Navbar} from "@/app/components/Navbar";
import {Content} from "@/app/components/Content";

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Content>
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                My name is Mike DiDomizio. I was born in 1985 in Cobourg, Ontario, Canada.

                At an early age we had a computer in our home. I spent a lot of time messing with it (and breaking it).

                After College I struggled a lot making ends meet.  I do not exactly remember why but I took up coding in my spare time.

                I bought a book on ASP.NET and went through tutorials and quickly threw together websites.  I struggled quite a bit with ASP.NET, there was a lot to learn and I had very little background in software development.

                Eventually I switched to learning PHP.  I loved working with PHP and running XAMPP locally, and deploying my websites through HostGator.

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
            </Content>
        </div>
    )
}
