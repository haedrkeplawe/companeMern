import logo from "../image/light_logo.png"
import facebook from "../image/facebook.svg"
import instagram from "../image/instagram.svg"
import tiktok from "../image/tiktok.svg"
import twitter from "../image/twitter.svg"

export const Footer = () => {
    return (
        <footer>
            <div className="best-look">
                <div className="clm">
                    <img src={logo} />
                    <h2>The best look anytime, anywhere.</h2>
                </div>
                <div className="clm">
                    <h3>For Her</h3>
                    <a>Women Jeans</a>
                    <a>Tops and Shirts</a>
                    <a>Women Jackets</a>
                    <a>Heels and Flats</a>
                    <a>Women Accessories</a>
                </div>
                <div className="clm">
                    <h3>For Him</h3>
                    <a>Men Jeans</a>
                    <a>Men Shirts</a>
                    <a>Men Shoes</a>
                    <a>Men Accessories</a>
                    <a>Men Jackets</a>
                </div>
            </div>
            <div className="end">
                <h4>Copyright © 2024 <span>Haedr.K</span>  Powered by Brandstore.</h4>
                <ul>
                    <li>
                        <a>
                            <img src={instagram} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={tiktok} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={twitter} />
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={facebook} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}