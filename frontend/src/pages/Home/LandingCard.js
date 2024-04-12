import card_1 from "../../image/card_1.png"
import card_2 from "../../image/card_2.png"
import card_3 from "../../image/card_3.png"
import card_4 from "../../image/card_4.png"

export const LandingCard = () => {
    return (
        <div className="landing-card">
            <div className="container">
                <div className="card">
                    <img src={card_1} />
                    <h2>Worldwide Shipping</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="card">
                    <img src={card_2} />
                    <h2>Best Quality</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="card">
                    <img src={card_3} />
                    <h2>Best Offers</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="card">
                    <img src={card_4} />
                    <h2>Secure Payments</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
        </div>
    )
}