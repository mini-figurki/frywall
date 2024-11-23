import React from "react";

import Banner from "../components/Banner";
import Menu from "../components/Home/Menu";
import Info from "../components/Home/Info";

import img_1 from "../image/bg_1.jpg";
import img_2 from "../image/bg_2.jpg";
import img_3 from "../image/bg_3.jpg";

function Home() {

    return (
        <div>
            <Banner title='Wybierz' img={img_1} />
            <Menu img={img_2}/>
            <Info img={img_3} />

        </div>
    );
}

export default Home;
