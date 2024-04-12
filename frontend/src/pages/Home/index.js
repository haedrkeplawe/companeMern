import { Offers } from "./Offers"
import { Logos } from "./Logos"
import { MainOffers } from "./MainOffers"
import { Featured } from "./Featured"
import { Limited } from "./Limited"
import { LandingCard } from "./LandingCard"
import { Navbar } from "../../components/Navbar"
import "./style.css"


export const Home = () => {
    return (
        <>
            <Navbar />
            <div className="landing_page">

                <Offers />
                <Logos />
                <MainOffers />
                <Featured />
                <Limited />
                <LandingCard />
            </div></>
    )
}