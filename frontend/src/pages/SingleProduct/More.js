import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export const More = ({ product, rate, setRate, sendReview }) => {
    return (
        <div className="more">
            <h2>Reviews <span>{product.numRate}</span></h2>
            <div className="review">
                <div >
                    <div>
                        <h3>Your rating</h3>
                        <div>
                            <FontAwesomeIcon icon={faStar}
                                className={rate > 0 ? "avtive" : ""}
                                onClick={() => setRate(1)}
                            />
                            <FontAwesomeIcon icon={faStar}
                                className={rate > 1 ? "avtive" : ""}
                                onClick={() => setRate(2)}
                            />
                            <FontAwesomeIcon icon={faStar}
                                className={rate > 2 ? "avtive" : ""}
                                onClick={() => setRate(3)}
                            />
                            <FontAwesomeIcon icon={faStar}
                                className={rate > 3 ? "avtive" : ""}
                                onClick={() => setRate(4)}
                            />
                            <FontAwesomeIcon icon={faStar}
                                className={rate > 4 ? "avtive" : ""}
                                onClick={() => setRate(5)}
                            />
                        </div>
                    </div>
                    <div>
                        <h3>Your review</h3>
                        <textarea />
                    </div>
                    <div>
                        <h3>Name</h3>
                        <input type="text" />
                    </div>
                </div>
                <button
                    onClick={() => { sendReview() }}
                >Submit</button>
            </div>

        </div>
    )
}