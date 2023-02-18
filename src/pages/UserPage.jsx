import Product_1 from "../assets/product_1.png";

const UserPage = () => {
    return(
        <>
            <div className="user">
                <section className="section">
                    <div className="user_title">Добро пожаловать User</div>
                    <header className="section-header">
                        <h2 className="section__title">
                            Купленное    
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
                    </div>
                </section>
            </div>
        </>
    )
}

export default UserPage;