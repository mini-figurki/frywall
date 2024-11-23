import React, { useState, useRef } from "react";
import { MenuList } from "../../helpers/MenuList";
import MenuItem from "../../UI/MenuItem";

const Menu = ({ img }) => {
    return (
        <div
            className="m-0 p-0  d-flex flex-column align-items-center"
            style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: "center",
                backgroundSize: "cover", // Make sure the image covers the div properly

                objectFit: "cover",
            }}
        >
            <div
                style={{
                    backdropFilter: "blur(25px)",
                    // backgroundColor: "hsla(0, 0%, 0%, 0.25)",
                    width: "100vw",
                }}
                className="m-0 p-0 pb-3 row align-items-evenly justify-content-center"
            >
                <div style={{ height: "30px" }} className="m-0 p-0 row"></div>

                <div
                    style={{
                        borderBottom: "6px solid orange",
                        fontSize: "36px",
                        textShadow: "1px 1px 5px black",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",

                        // backgroundColor: 'orange',
                    }}
                    className="m-0 p-2 ps-4 pe-4 rounded col-auto text-center text-white fw-bold"
                >
                    5 Rozmiarów
                </div>
                <div style={{ height: "15px" }} className="m-0 p-0 row"></div>

                {/* Render current items in a grid with 3 items per row */}
                <div
                    className="m-0  d-flex flex-wrap justify-content-center"
                    style={{
                        maxWidth: "1300px", // Optional: you can control the maximum width
                        padding: "15px",
                    }}
                >
                    {MenuList.map((menuItem) => (
                        <MenuItem
                            key={menuItem.id}
                            id={menuItem.id}
                            image={menuItem.image}
                            name={menuItem.name}
                            price={menuItem.price}
                            text={menuItem.text}
                            height={menuItem.height}
                            material={menuItem.material}
                            ruch={menuItem.ruch}
                            acsesoria={menuItem.acsesoria}
                            producent={menuItem.producent}
                            orange={menuItem.orange}
                            red={menuItem.red}
                            black={menuItem.black}
                            green={menuItem.green}
                            gray={menuItem.gray}
                            blue={menuItem.blue}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
