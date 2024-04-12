import facebook from "../../image/facebook.svg"
import instagram from "../../image/instagram.svg"
import tiktok from "../../image/tiktok.svg"
import twitter from "../../image/twitter.svg"

export const Follow = () => {
    return (
        <div className="follow">
            <div className="container" >
                <h1>Follow Us</h1>
                <div>
                    <img src={facebook} />
                    <img src={twitter} />
                    <img src={tiktok} />
                    <img src={instagram} />
                </div>
            </div>

        </div>
    )
}