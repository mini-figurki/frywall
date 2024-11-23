import React from "react";
import img_1 from "../../image/bg_10.jpg";
import img_2 from "../../image/bg_20.jpg";
import videoSrc from "../../image/video.mp4";

const Info = ({ img }) => {
    return (
        <div
            className="m-0 p-0 d-flex flex-column align-items-center"
            style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderTop: "6px solid orange",
                objectFit: "cover",
            }}
        >
            <div
                style={{
                    backdropFilter: "blur(25px)",
                    width: "100vw",
                    paddingBottom: "30px",
                }}
                className="m-0 p-3 row align-items-evenly justify-content-center"
            >
                <div style={{ height: "30px" }} className="m-0 p-0 row"></div>

                <div
                    style={{
                        borderBottom: "6px solid orange",
                        fontSize: "36px",
                        textShadow: "1px 1px 5px black",                             backgroundColor: "rgba(0, 0, 0, 0.3)", 

                    }}
                    className="m-0 p-2 ps-4 pe-4 rounded col-auto text-center text-white fw-bold"
                >
                    O Produkcie
                </div>
                <div style={{ height: "30px" }} className="m-0 p-0 row"></div>

                <div className="m-0 p-3 pb-0 col-12 col-md-6 col-xl-5">
                    <img
                        style={{
                            border: "3px solid orange",
                            boxShadow: "1px 1px 30px black",
                        }}
                        src={img_1}
                        className="m-0 p-0 col-12 rounded"
                    />
                </div>

                <div className="m-0 p-3 pt-0 col-12 col-md-6 col-xl-4 text-white d-flex align-items-center ">
                    <p
                        style={{
                            fontSize: "18px",
                            fontStyle: "italic",
                            textShadow: "1px 1px 30px black",
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                        }}
                        className="m-0 p-3 fw-bold rounded"
                    >
                        Nasz produkt nigdy nie upuszcza osłony, chroniąc płytę
                        kuchenną, nawet gdy mieszasz łyżką lub odwracasz
                        szpatułką. Jednak pozwala na ucieczkę pary. Masz swobodę
                        otwartej patelni, z dużo mniejszym bałaganem.
                    </p>
                </div>

                <div className="m-0 p-3 pb-0 mt-3 col-12 col-md-6 col-xl-5">
                    <img
                        style={{
                            border: "3px solid orange",
                            boxShadow: "1px 1px 30px black",
                        }}
                        src={img_2}
                        className="m-0 p-0  col-12 rounded"
                    />
                </div>

                <div className="m-0 p-3 pt-0 col-12 col-md-6 col-xl-4 text-white d-flex align-items-center ">
                    <p
                        style={{
                            fontSize: "18px",
                            fontStyle: "italic",
                            textShadow: "1px 1px 30px black",
                            boxShadow: "1px 1px 50px black",
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                        }}
                        className="m-0 p-3 fw-bold rounded"
                    >
                        Nasz produkt jest wykonany z silikonu wolnego od BPA,
                        zgodnego z FDA, który może wytrzymać ciepło do 450°F.
                        można go również myć w zmywarce i łatwo zwinąć i
                        przechowywać w małym rękawie.
                    </p>
                </div>
                <div className="m-0  p-0 row d-flex justify-content-center">
                    <div
                        style={{
                            borderBottom: "6px solid orange",
                            fontSize: "36px",
                            textShadow: "1px 1px 5px black",           
                             backgroundColor: "rgba(0, 0, 0, 0.3)", 

                        }}
                        className="m-0 p-2 ps-4 pe-4 rounded mt-5 mb-3 col-auto text-center text-white fw-bold "
                    >
                        Video
                    </div>
                </div>

                <div className="m-0 p-3 mt-3  col-12 col-lg-9 text-white d-flex align-items-center justify-content-center">
                    <video
                        style={{ border: "3px solid orange" ,                            boxShadow: "1px 1px 50px black",
                        }}
                        className="rounded"
                        width="100%"
                        controls
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Info;
