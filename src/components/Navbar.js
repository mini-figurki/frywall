import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [storedSum, setStoredSum] = useState(0);
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        // Set up the interval
        const interval = setInterval(() => {
            let totalSum = 0;
            let totalQuantity = 0;
    
            const colors = ["Czerwony", "Pomarańczowy", "Zielony", "Szary", "Czarny", "Niebieski"];
    
            // Loop through each color
            colors.forEach((color) => {
                // Loop through item IDs (1 to 100)
                for (let i = 1; i <= 100; i++) {
                    const sum = sessionStorage.getItem(`sum-${color}-${i}`);
                    const qty = sessionStorage.getItem(`quantity-${color}-${i}`);
    
                    // If both sum and quantity are found, accumulate the values
                    if (sum && qty) {
                        totalSum += parseFloat(sum);
                        totalQuantity += parseInt(qty);
                    }
                }
            });
    
            // Set the accumulated values to sessionStorage once at the end
            sessionStorage.setItem("totalSum", totalSum);
            sessionStorage.setItem("totalQuantity", totalQuantity);
    
            // Update state only after all calculations
            setStoredSum(totalSum);
            setQuantity(totalQuantity);
    
        }, 200); // The interval is set to 1000ms (1 second)
    
        // Clean up the interval when the component is unmounted
        return () => clearInterval(interval);
    
    }, []); // Empty dependency array means this runs only once on mount
    

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div
            style={{ zIndex: "999", width: "100%" }}
            className="m-0 p-0 position-fixed bg-transperent d-flex justify-content-between align-items-center"
        >
            <Link
                className="o_btn_nav d-flex justify-content-center rounded"
                style={{ minWidth: "60px" }}
                to="/Sklep"
                onClick={scrollToTop}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-house-door-fill m-0 "
                    viewBox="0 0 16 16"
                    style={{ padding: "6px" }}
                >
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
            </Link>

            <div
                style={{
                    fontStyle: "italic",
                    backdropFilter: "blur(24px)", // Corrected camelCase property name
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    minHeight: "30px", // Corrected camelCase property name

                    maxHeight: "60px", // Corrected camelCase property name
                    minWidth: "60px",
                    backgroundColor: "orange", // Corrected camelCase property name
                    boxShadow: "1px 1px 20px 2px black", // Corrected camelCase property name
                    fontSize: "15px", // Corrected camelCase property name
                }}
                className=" m-0 p-1 ps-3 pe-3 col-auto text-center rounded d-flex align-items-center justify-content-center text-white fw-bold border-0"
            >
                Darmowa Dostawa!
            </div>

            <Link
                className="o_btn_nav d-flex justify-content-center rounded"
                style={{ minWidth: "60px" }}
                to="/Sklep/Koszyk"
                onClick={scrollToTop}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-bag-fill m-0 p-2"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                </svg>

                {/* <p
                    style={{
                        position: "absolute",
                        top: "0",
                        right: "60px",
                        height: "60px",
                        width: "30px",
                        padding: "12px",
                        fontSize: "15px",
                        zIndex: "988",
                        backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                    }}
                    className="o_btn m-0 p-0 d-flex justify-content-center align-items-center border-0"
                >
                    {quantity}
                </p> */}

                <p
                    style={{
                        position: "absolute",
                        top: "60px",
                        right: "0",
                        height: "30px",
                        width: "60px",
                        padding: "12px",
                        fontSize: "15px",
                        backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                        fontStyle: "italic",
                    }}
                    className="o_text m-0 p-0 d-flex justify-content-center align-items-center border-0 rounded "
                >
                    {storedSum} zł
                </p>
            </Link>

            {/* <a
                style={{
                    position: "fixed",
                    bottom: 0,
                    right: 0,
                    minHeight: "60px",
                    minWidth: "45px",
                }}
                className="o_btn_nav m-0 p-0 d-flex justify-content-center fw-bold rounded"
                href="#top"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-arrow-up-short m-0 p-0"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
                    />
                </svg>
            </a> */}
        </div>
    );
}

export default Navbar;
