import { useEffect, useState } from "react";
import Laptops from "../Laptops/Laptops";

const LaptopContainer = () => {

    const [allLaptops, setAllLaptops] = useState([]);

    useEffect(() => {
        fetch('gadgets.json')
        .then((res) => res.json())
        .then((data) => setAllLaptops(data))
    }, []);

    console.log(allLaptops);
    
    const laptops = allLaptops.filter(laptops => laptops.category === "Laptop")

    return (
        <div>
            {
                laptops.map((laptop, idx) => <Laptops key={idx} laptop={laptop}></Laptops>)
            }
        </div>
    );
};

export default LaptopContainer;