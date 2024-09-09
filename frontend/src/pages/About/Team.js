import team_1 from "../../image/team_1.png"
import team_2 from "../../image/team_2.png"
import team_3 from "../../image/team_3.png"
import team_4 from "../../image/team_4.png"
import team_5 from "../../image/team5.png"
import team_6 from "../../image/team6.png"

export const Team = () => {
    return (
        <div className="team">
            <div className="container">
                <h4>A Few Words About</h4>
                <h1>Our Team</h1>
                <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                <div className="boxs">
                    <div className="box">
                        <img src={team_1} />
                        <h2>Harvey Spector</h2>
                        <p>Founder - CEO</p>
                    </div>
                    <div className="box">
                        <img src={team_2} />
                        <h2>Jessica Pearson</h2>
                        <p>COO</p>
                    </div>
                    <div className="box">
                        <img src={team_3} />
                        <h2>Rachel Zain</h2>
                        <p>Marketing Head</p>
                    </div>
                    <div className="box">
                        <img src={team_4} />
                        <h2>Luise Litt</h2>
                        <p>Lead Developer</p>
                    </div>
                    <div className="box">
                        <img src={team_5} />
                        <h2>Katrina Bennett</h2>
                        <p>Intern Designer</p>
                    </div>
                    <div className="box">
                        <img src={team_6} />
                        <h2>Mike Ross</h2>
                        <p>Intern Designer</p>
                    </div>

                </div>
            </div>
        </div>
    )
}