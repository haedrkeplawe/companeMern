import { Navbar } from "../../components/Navbar"
import "./style.css"

import { ImageTop } from "./ImageTop"
import { WeAre } from "./WeAre"
import { Team } from './Team'
import { Follow } from "./Follow"
import { LandingCard } from "../Home/LandingCard"

export const About = () => {
    return (
        <>
            <Navbar />
            <div className="about-bage">
                <ImageTop />
                <WeAre />
                <Team />
                <Follow />
                <LandingCard />
            </div>
        </>
    )
}