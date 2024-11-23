import React, { useEffect, useState } from "react";
import MenuItem2 from "../../UI/MenuItem2";
import { Link } from "react-router-dom";

const Menu2 = ({ img }) => {
    const [menuItems, setMenuItems] = useState([]); // Store menu items in state
    const [storedSum, setStoredSum] = useState(0); // Store total sum
    const [totalQuantity, setTotalQuantity] = useState(0); // Store total quantity

    // Function to process sessionStorage items for all colors
    const processItemsFromSessionStorage = () => {
        let totalSum = 0;
        let totalQuantity = 0;
        const items = [];

        // List of colors to process
        const colors = ["Czerwony", "Pomarańczowy", "Zielony", "Szary", "Czarny", "Niebieski"];

        // Loop through each color and fetch associated items
        colors.forEach((color) => {
            for (let i = 1; i <= 100; i++) {
                const id = sessionStorage.getItem(`id-${color}-${i}`);
                if (id) {
                    const image = sessionStorage.getItem(`image-${color}-${id}`);
                    const name = sessionStorage.getItem(`name-${color}-${id}`);
                    const price = parseFloat(sessionStorage.getItem(`price-${color}-${id}`)) || 0;
                    const sum = parseFloat(sessionStorage.getItem(`sum-${color}-${id}`)) || 0;
                    const qty = parseInt(sessionStorage.getItem(`quantity-${color}-${id}`)) || 0;

                    // If both sum and quantity are valid, accumulate them
                    if (sum && qty) {
                        totalSum += sum;
                        totalQuantity += qty;
                        items.push({ id, image, name, price, sum, quantity: qty });
                    }
                }
            }
        });

        // Update state after data processing
        setStoredSum(totalSum);
        setTotalQuantity(totalQuantity);
        setMenuItems(items);
    };

    useEffect(() => {
        // Initial item processing
        processItemsFromSessionStorage();

        // Set up the interval for periodic updates
        const interval = setInterval(() => {
            processItemsFromSessionStorage(); // Re-run the processing every 200ms
        }, 200);

        // Cleanup on unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency ensures it only runs once on mount

    // Remove item by id and update the state accordingly
    const handleItemDelete = (itemId, image) => {
        const colors = ["Czerwony", "Pomarańczowy", "Zielony", "Szary", "Czarny", "Niebieski"];

        colors.forEach((color) => {
            for (let i = 1; i <= 100; i++) {
                const storedImage = sessionStorage.getItem(`image-${color}-${i}`);
                if (storedImage === image) {
                    // Remove the keys from sessionStorage
                    sessionStorage.removeItem(`id-${color}-${i}`);
                    sessionStorage.removeItem(`image-${color}-${i}`);
                    sessionStorage.removeItem(`name-${color}-${i}`);
                    sessionStorage.removeItem(`price-${color}-${i}`);
                    sessionStorage.removeItem(`sum-${color}-${i}`);
                    sessionStorage.removeItem(`quantity-${color}-${i}`);
                }
            }
        });

        // Filter out the deleted item and recalculate totals
        const updatedItems = menuItems.filter(
            (item) => !(item.id === itemId && item.image === image)
        );

        const newTotalSum = updatedItems.reduce((acc, item) => acc + item.sum, 0);
        const newTotalQuantity = updatedItems.reduce((acc, item) => acc + item.quantity, 0);

        setMenuItems(updatedItems);
        setStoredSum(newTotalSum);
        setTotalQuantity(newTotalQuantity);
    };

    return (
        <div
            className="m-0 p-0 d-flex flex-column align-items-center"
            style={{
                backgroundImage: `url(${img})`, // Correct way to use a variable for background image
                backgroundPosition: "center",
                objectFit: "cover",
            }}
        >
            <div
                style={{
                    width: "100vw",
                    backdropFilter: "blur(25px)",
                    paddingInline: "15px",
                }}
                className="m-0 p- row align-items-evenly justify-content-center"
            >
                <div style={{ height: "15px" }} className="m-0 p-0 row"></div>

                {menuItems.length > 0 ? (
                    <>
                        <div
                            className="m-0 p-0 d-flex flex-wrap justify-content-center"
                            style={{
                                maxWidth: "1180px",
                            }}
                        >
                            {menuItems.map((item) => (
                                <MenuItem2
                                    key={item.id}
                                    {...item}
                                    onItemDelete={handleItemDelete}
                                />
                            ))}
                        </div>

                        <div style={{ height: "45px" }} className="m-0 p-0 row"></div>
                        <div
                            style={{ padding: "0px", paddingInline: "15px" }}
                            className="m-0 d-flex justify-content-center"
                        >
                            <div
                                className="m-0 p-0 ms-auto me-auto ps-3 pe-3 text-center col-auto d-flex flex-column justify-content-center align-items-center text-start fw-bold text-white rounded"
                                style={{
                                    minHeight: "60px",
                                    maxWidth: "360px",
                                    backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                                    fontSize: "24px",
                                    width: "100%",
                                    textShadow: "1px 1px 10px black, 1px 1px 30px black",
                                    boxShadow: "1px 1px 30px black",
                                    fontStyle: "italic",
                                    border: "3px solid orange",
                                }}
                            >
                                Do zapłaty - {storedSum} zł
                            </div>
                        </div>
                    </>
                ) : (
                    <div
                        style={{ padding: "0px", paddingInline: "15px" }}
                        className="m-0 d-flex justify-content-center"
                    >
                        <Link
                            style={{
                                width: "100%",
                                maxWidth: "360px",
                                boxShadow: "1px 1px 50px black",
                                minHeight: "60px",
                                marginTop: "45px",
                            }}
                            className="o_btn_nav p-1 ps-3 pe-3 d-flex justify-content-center align-items-center text-center rounded"
                            to={"/"}
                        >
                            Wybierz
                        </Link>
                    </div>
                )}

                <div style={{ height: "60px" }} className="m-0 p-0 row"></div>
            </div>
        </div>
    );
};

export default Menu2;
