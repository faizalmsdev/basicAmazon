    import { useState } from "react";
    import ProductData from "./ProductData";

    function Body() {
    const { title, description, colorOptions, featureList } = ProductData;
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);

    const changeColor = (index) => {
        setSelectedColorIndex(index);
        setImg(colorOptions[index].imageUrl);
    };

    const [Img, setImg] = useState(colorOptions[selectedColorIndex].imageUrl);

    function getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    const currentTime = getCurrentTime();

    const showTime =() =>{
        setCurentTimes(currentTime);
    }

    const showBp =() =>{
        setCurentTimes('  +ve');
    }

    const [currentTimes,setCurentTimes] = useState();

    return (
        <>
        <div className="left-box">
            <img src={Img} alt="styleName" />
            <p>{currentTimes}</p>
        </div>
        <article>
            <h1>{title}</h1>
            <p>{description}</p>
            <h2>Select color</h2>
            <div className="grids">
            <button onClick={() => changeColor(0)} className="color-selector">
                <img src={colorOptions[0].imageUrl} alt="" />
            </button>
            <button onClick={() => changeColor(1)} className="color-selector">
                <img src={colorOptions[1].imageUrl} alt="" />
            </button>
            <button onClick={() => changeColor(2)} className="color-selector">
                <img src={colorOptions[2].imageUrl} alt="" />
            </button>
            <button onClick={() => changeColor(3)} className="color-selector">
                <img src={colorOptions[3].imageUrl} alt="" />
            </button>
            </div>
            <h2>Features</h2>
            <div className="features">
            <button className="time" onClick={showTime}>{featureList[0]}</button>
            <button className="heartRate" onClick={showBp}>{featureList[1]}</button>
            </div>
            <button className="buyNow">Buy Now</button>
        </article>
        </>
    );
    }

    export default Body;
