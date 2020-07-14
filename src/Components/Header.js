import React from "react";
import style from "./header.module.css";
export default function Header() {
  return (
    <div className={style.slider}>
      <figure>
        <div className={style.slide}>
          <img src="Assets/images/1.jpg" className="img-responsive" />
          <div className={style.text}>
            <h1>Recipe</h1>
          </div>
        </div>
        <div className={style.slide}>
          <img src="Assets/images/2.jpg" className="img-responsive" />
        </div>
        <div className={style.slide}>
          <img src="Assets/images/3.jpg" className="img-responsive" />
        </div>
        <div className={style.slide}>
          <img src="Assets/images/4.jpg" className="img-responsive" />
        </div>
        <div className={style.slide}>
          <img src="Assets/images/5.jpg" className="img-responsive" />
        </div>
        <div className={style.slide}>
          <img src="Assets/images/6.jpg" className="img-responsive" />
        </div>
        <div className={style.slide}>
          <img src="Assets/image/7.jpg" className="img-responsive" />
        </div>
        <div className={style.slide}>
          <img src="Assets/images/8.jpg" className="img-responsive" />
        </div>
        <div className={style.slide}>
          <img src="Assets/images/9.jpg" className="img-responsive" />
        </div>
        {/* <div className="slide">
          <img src={Img10} className="img-responsive" />
        </div> */}
      </figure>
    </div>
  );
}
