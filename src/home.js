import React, {useState, useEffect, useRef} from 'react';

// import ImageSlider from './components/imageSlider';

// import img1 from "./images/interstellar.jpg";
// import img2 from "./images/avengers-endgame.jpg";
// import img3 from "./images/edge-of-tomorrow.jpg";
// import img4 from "./images/fury.jpg";
// import img5 from "./images/how-to-train-your-dragon.jpg";
// import img6 from "./images/Thor4.jpg";
// import img7 from "./images/kungfu-panda.jpg";
// import img8 from "./images/legend.jpg";
// import img9 from "./images/hacksaw-ridge.jpg";
// import img10 from "./images/i-am-legend.jpg";
// import img11 from "./images/logan.jpg";
// import img12 from "./images/warrior.jpg";

const Home = () => {
    const [count, setCount] = useState(2);
    const [loading, setLoading] = useState(false);
    const autoPlay = useRef();

    //   useEffect(() => {
    //     setLoading(true)
    //     setInterval(() => {

    //       document.getElementById('radio' + count).checked = true
    //       count === 5 ? setCount(1) : setCount(count + 1)
    //     }, 4000)
    //     setLoading(false)
    //   }, [document.getElementById('radio' + count)]);

    // useEffect(() => {
    //   autoPlay.current = nextSlide;
    // })

    // useEffect(() => {
    //   const play = () => {
    //     autoPlay.current()
    //   }
    // })

    // const nextSlide = () => {
    //     document.getElementById('radio' + count).checked = true
    //     count === 4 ? setCount(1) : setCount(count + 1)
    // }

    return ( 
        <>
            {/* {!loading && */}
            <div className='body'>
                <div className="slider">
                <div className="slides">
                    
                    <input type="radio" name="radio-btn" id="radio1"/>
                    <input type="radio" name="radio-btn" id="radio2"/>
                    <input type="radio" name="radio-btn" id="radio3"/>
                    <input type="radio" name="radio-btn" id="radio4"/>
                    <input type="radio" name="radio-btn" id="radio5"/>
                    
                    <div className="slide first">
                        <img src="./images/interstellar.jpg" alt=""/>
                    </div>
                    <div className="slide">
                        <img src="./images/Vikings.jpg" alt=""/>
                    </div>
                    <div className="slide">
                        <img src="./images/how-to-train-your-dragon.jpg" alt=""/>
                    </div>
                    <div className="slide">
                        <img src="./images/attack-on-titan.jpg" alt=""/>
                    </div>
                    <div className="slide">
                        <img src="./images/avengers-endgame.jpg" alt=""/>
                    </div>
                    <div className="slide">
                        <img src="./images/edge-of-tomorrow.jpg" alt=""/>
                    </div>
                    <div className="slide">
                        <img src="./images/fury.jpg" alt=""/>
                    </div>
                    <div className="slide">
                        <img src="./images/The-Witcher.jpg" alt=""/>
                    </div>
                    <div className="slide">
                        <img src="./images/Django Unchained.jpg" alt=""/>
                    </div>
                    <div className="slide">
                        <img src="./images/i-am-legend.jpg" alt=""/>
                    </div>
                    <div className="slide">
                        <img src="./images/logan.jpg" alt=""/>
                    </div>
                    <div className="slide">
                        <img src="./images/warrior.jpg" alt=""/>
                    </div>
                    <div className="slide">
                        <img src="./images/kungfu-panda.jpg" alt=""/>
                    </div>
                    <div className="slide">
                        <img src="./images/one punch man.jpg" alt=""/>
                    </div>
                    <div className="slide">
                        <img src="./images/hacksaw-ridge.jpg" alt=""/>
                    </div>

                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                        <div className="auto-btn3"></div>
                        <div className="auto-btn4"></div>
                        <div className="auto-btn5"></div>
                    </div>

                    <div className="navigation-manual">
                        <label htmlFor="radio1" className="manual-btn"></label>
                        <label htmlFor="radio2" className="manual-btn"></label>
                        <label htmlFor="radio3" className="manual-btn"></label>
                        <label htmlFor="radio4" className="manual-btn"></label>
                        <label htmlFor="radio5" className="manual-btn"></label>
                    </div>
                        
                </div>
                </div>
            </div>
            {/* } */}

            {/* <ImageSlider images={[img1, img2, img3, img4,img5, 
                img6, img7, img8, img9, img10,img11, img12]} /> */}

        </>
     );
}
 
export default Home;