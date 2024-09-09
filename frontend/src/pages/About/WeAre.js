import about_2 from "../../image/about_2.jpg"
export const WeAre = () => {
    return (
        <div className="we-are">
            <div className="container">
                <div className="left" >
                    <h1>Who We Are</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus
                        a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
                    </p>
                </div>
                <div className="right" >
                    <img src={about_2} />
                </div>
            </div>
        </div>
    )
}