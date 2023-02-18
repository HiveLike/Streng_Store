import slide_1 from "../../assets/slide_1.png"

const Slider = () => {
    return (
        <div className="slider">
            <img src={slide_1} alt="slide_1"/>
            <div className="wrapper">
                <div className="slides">
                    <div className="slide">
                        
                    </div>
                </div>

                <div className="controls">
                    <button className="prev">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className="next">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slider;