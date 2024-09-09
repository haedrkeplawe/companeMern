import "./style.css"

import { ImageTop } from "./ImageTop"
import { WeAre } from "./WeAre"
import { Team } from './Team'
import { Follow } from "./Follow"
import { LandingCard } from "../Home/LandingCard"
import { MainNavbar } from "../../components/MainNavbar"

export const About = () => {
    return (
        <>
            <MainNavbar ismain={true} />
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