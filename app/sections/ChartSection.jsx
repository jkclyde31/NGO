import Image from "next/image"

const ChartSection = () => {
    const donations = [
        { category: "child care home", percentage: 40, color: "#BEF3C0" },
        { category: "cleanliness program", percentage: 35, color: "#AC94F1" },
        { category: "helping people", percentage: 10, color: "#FFF0CA" },
        { category: "excursions", percentage: 10, color: "#F9CF64" },
        { category: "feeding the poor", percentage: 5, color: "#F38FBF" }
    ];

    return (
        <div className="w-full bg-black text-white py-[50px] md:py-[142px]">
            <div className="max-w-[1300px] w-full px-4 mx-auto flex flex-col md:flex-row gap-[50px] justify-between items-center">
                {/* Text */}
                <div className="max-w-[626px]">
                    <h2 className="text-5xl">
                        How we spend your donations and where it goes
                    </h2>
                    <p className="text-base leading-relaxed opacity-60">
                        We understand that when you make a donation, you want to know exactly where your money is going and we pledge to be transparent.
                    </p>

                    {/* Donations List */}
                    <div className="mt-8 flex flex-wrap gap-5">
                        {donations.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <div 
                                    className="w-4 h-4 rounded-sm" 
                                    style={{ backgroundColor: item.color }}
                                ></div>
                                <span className="text-base leading-relaxed">
                                    {item.percentage}% {item.category}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Image */}
                <div>
                    <Image
                        src="/chart.png"
                        alt="Chart"
                        width={375}
                        height={375}
                    />
                </div>
            </div>
        </div>
    )
}

export default ChartSection