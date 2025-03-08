import PageTitle from "../PageTitle/PageTitle";

const Statistics = () => {
    return (
        <div>
            <PageTitle tittle='Statistics'></PageTitle>
            <div className="bg-[#9538E2] text-white text-center py-8 max-md:px-4">
                <h1 className="text-3xl font-bold mb-4">Statistics</h1>
                <div className="flex flex-col items-center gap-8">
                    <p className="text-base max-w-[776px] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;