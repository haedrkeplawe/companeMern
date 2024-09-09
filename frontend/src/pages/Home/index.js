import { Offers } from "./Offers"
import { Logos } from "./Logos"
import { MainOffers } from "./MainOffers"
import { Featured } from "./Featured"
import { Limited } from "./Limited"
import { LandingCard } from "./LandingCard"
import { MainNavbar } from "../../components/MainNavbar"
import "./style.css"


export const Home = () => {
    return (
        <>
            <MainNavbar ismain={true} />
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