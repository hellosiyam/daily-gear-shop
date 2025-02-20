
const Footer = () => {
    return (
        <footer className="flex flex-col">
            <div className="py-8 text-center flex flex-col gap-4 border-b border-[#09080F1A]">
                <h1 className="text-4xl text-[#09080F] font-bold">Gadget Heaven</h1>
                <p className="text-base text-[#09080F99] font-medium">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="flex flex-wrap lg:flex-row gap-4 justify-evenly py-8">
                <div className="flex flex-col gap-3">
                    <div className="text-lg text-[#09080F] font-bold">
                        Services
                    </div>
                    <div className="flex flex-col gap-2 text-base text-[#09080F99] font-medium">
                        <p>Product Support</p>
                        <p>Order Tracking</p>
                        <p>Shipping & Delivery</p>
                        <p>Returns</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-lg text-[#09080F] font-bold">
                    Company
                    </div>
                    <div className="flex flex-col gap-2 text-base text-[#09080F99] font-medium">
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-lg text-[#09080F] font-bold">
                    Legal
                    </div>
                    <div className="flex flex-col gap-2 text-base text-[#09080F99] font-medium">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;