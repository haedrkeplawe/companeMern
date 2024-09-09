import { MainNavbar } from "../../components/MainNavbar"
import "./style.css"

export const ContactUs = () => {
    return (
        <>
            <MainNavbar ismain={true} />
            <div className="contact-page">
                <div className="image-top" >
                    <div className="img" >
                    </div>
                    <h1>Contact Us</h1>
                </div>
                <div className="queries">
                    <p>Have any queries?</p>
                    <h2>We're here to help.​</h2>
                    <div className="boxs">
                        <div className="box">
                            <h3>Sales</h3>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                            <span>1800 123 4567</span>
                        </div>
                        <div className="box">
                            <h3>Complaints</h3>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                            <span>1900 223 8899</span>
                        </div>
                        <div className="box">
                            <h3>Returns</h3>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                            <span>returns@mail.com</span>
                        </div>
                        <div className="box">
                            <h3>Marketing</h3>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                            <span>1700 444 5578</span>
                        </div>
                    </div>
                </div>
                <div className="tell">
                    <div className="container">
                        <div className="text">
                            <h4>Don't be a stranger!</h4>
                            <h1>You tell us. We listen.</h1>
                            <p>
                                Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem.
                                Proin dignissim libero lacus, ut eleifend magna vehicula et.
                                Nam mattis est sed tellus.
                            </p>
                        </div>
                        <form>
                            <input type="text" placeholder="NAME" />
                            <input type="text" placeholder="SUBJECT" />
                            <input type="text" placeholder="EMAIL" />
                            <textarea placeholder="MESSAGE" rows="7" />
                            <button>SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}