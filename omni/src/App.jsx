import { useState } from "react";
import "./App.css";
import Image from "./assets/img.jpg"
import Butt from "./components/but";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <div className="left">
          <h1 className="trend">Trendy</h1>
          <h1 className="playwrite-au-sa-we">Wears</h1>
        </div>
        <div className="right">
          <div className="aes">
            <a href="">Home</a>
            <a href="">Wears</a>
            <a href="">Accesories</a>
            <a href="">Sales</a>
          </div>
          <div className="icons">
            <a href="">
              <i class="fa fa-heart" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa-solid fa-bag-shopping"></i>
            </a>
            <a href="">
              <i class="fa-solid fa-user"></i>
            </a>
            <a href="">
              <i class="fas fa-search"></i>
            </a>
          </div>
        </div>
      </nav>
      <section>
        <div className="lefty">
          <h1>Women Jackets</h1>
          <p>Wxplore the taste of trendy at outrageously <br></br> affordable prices - use promo code TJ01</p>
          <br /><br /><br />
          <Butt/>
        </div>
        <div className="righty">
        <img src= {Image} alt="" />
        </div>
      </section>
    </>
  );
}

export default App;
