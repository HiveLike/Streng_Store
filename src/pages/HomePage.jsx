

import Product_1 from "../assets/product_1.png";
import Slider from "../components/Slider/Slider";

const HomePage = () => {
    return(
        <>
            <Slider/>

            {/* promo section */}
            <section className="section">
                <header className="section-header">
                    <h2 className="section__title">
                        Акции    
                    </h2>
                </header>

                <div className="products">
                    <div className="product">
                        <img src={Product_1} alt="product_img"/>

                        <h3>Пиджак DRAGO (Италия)</h3>

                        <div className="product__footer">
                            <span className="value">19 909 руб.</span>
                        </div>
                    </div>

                    <div className="product">
                        <img src={Product_1} alt="product_img"/>

                        <h3>Пиджак DRAGO (Италия)</h3>

                        <div className="product__footer">
                            <span className="value">19 909 руб.</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Product_1} alt="product_img"/>

                        <h3>Пиджак DRAGO (Италия)</h3>

                        <div className="product__footer">
                            <span className="value">19 909 руб.</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Product_1} alt="product_img"/>

                        <h3>Пиджак DRAGO (Италия)</h3>

                        <div className="product__footer">
                            <span className="value">19 909 руб.</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Product_1} alt="product_img"/>

                        <h3>Пиджак DRAGO (Италия)</h3>

                        <div className="product__footer">
                            <span className="value">19 909 руб.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* catalog section */}
            <section className="section">
                <header className="section-header">
                    <h2 className="section__title">
                        Каталог    
                    </h2>
                </header>

                <div className="products">
                    <div className="product">
                        <img src={Product_1} alt="product_img"/>

                        <h3>Пиджак DRAGO (Италия)</h3>

                        <div className="product__footer">
                            <span className="value">19 909 руб.</span>
                        </div>
                    </div>

                    <div className="product">
                        <img src={Product_1} alt="product_img"/>

                        <h3>Пиджак DRAGO (Италия)</h3>

                        <div className="product__footer">
                            <span className="value">19 909 руб.</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Product_1} alt="product_img"/>

                        <h3>Пиджак DRAGO (Италия)</h3>

                        <div className="product__footer">
                            <span className="value">19 909 руб.</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Product_1} alt="product_img"/>

                        <h3>Пиджак DRAGO (Италия)</h3>

                        <div className="product__footer">
                            <span className="value">19 909 руб.</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Product_1} alt="product_img"/>

                        <h3>Пиджак DRAGO (Италия)</h3>

                        <div className="product__footer">
                            <span className="value">19 909 руб.</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Product_1} alt="product_img"/>

                        <h3>Пиджак DRAGO (Италия)</h3>

                        <div className="product__footer">
                            <span className="value">19 909 руб.</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Product_1} alt="product_img"/>

                        <h3>Пиджак DRAGO (Италия)</h3>

                        <div className="product__footer">
                            <span className="value">19 909 руб.</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Product_1} alt="product_img"/>

                        <h3>Пиджак DRAGO (Италия)</h3>

                        <div className="product__footer">
                            <span className="value">19 909 руб.</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Product_1} alt="product_img"/>

                        <h3>Пиджак DRAGO (Италия)</h3>

                        <div className="product__footer">
                            <span className="value">19 909 руб.</span>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Product_1} alt="product_img"/>

                        <h3>Пиджак DRAGO (Италия)</h3>

                        <div className="product__footer">
                            <span className="value">19 909 руб.</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="subscribe">

            </section>
        </>
    )
}

export default HomePage;