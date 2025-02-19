import { useEffect, useState } from "react";

const AllGadgets = () => {

    const [gadgets, setGadgets] = useState([])

    console.log(gadgets);
    

    useEffect(()=> {
        fetch('gadgets.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    }, [])
    return (
        <div className="relative">
            <h1 className="text-4xl">Gadgets : {gadgets.length}</h1>
        </div>
    );
};

export default AllGadgets;