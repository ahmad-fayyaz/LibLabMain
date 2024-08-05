// src/components/FeaturedScans.jsx
import { Box } from 'lucide-react';

const FeaturedScans = () => {
    const scans = [
        {
            title: 'LibLab Bear',
            description: 'Our first scan is a bear!',
            iframeUrl: './models/bear.glb',
            iosUrl: './models/bear.usdz'
        },
        {
            title: 'Wooden Key',
            description: '3D Printable Model Key',
            iframeUrl: './models/key.glb',
            iosUrl: './models/key.usdz'
        },
        {
            title: 'Protest Bus',
            description: 'A bus poster from a protest',
            iframeUrl: './models/bus.glb',
            iosUrl: './models/bus.usdz'
        },
        {
            title: 'Printing Press Block',
            description: 'This is a description for Scan 4',
            iframeUrl: './models/press.glb',
            iosUrl: './models/press.usdz'
        }
    ];

    return (
        <div className="flex flex-col pt-10 pb-20">
            {/* Header */}
            <div className="transition w-full md:py-10 lg:py-20">
                <h2 className="transition text-3xl md:text-4xl lg:text-5xl text-black dark:text-white font-bold pl-4 md:pl-8 lg:pl-20 flex items-center">
                    <Box size={36} className="mr-4 text-black dark:text-white" />
                    <span>Featured</span>
                    <span className="transition underline italic ml-1">Scans</span>
                </h2>
            </div>

            {/* Cards */}
            <div className="transition flex flex-wrap justify-center mt-10 px-4">
                {scans.map((scan, index) => (
                    <div key={index} className="transition w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div className="transition bg-gray-100 dark:bg-gray-800 p-4 flex flex-col items-start">
                            <div className="flex justify-center w-full">
                                <model-viewer
                                    src={scan.iframeUrl}
                                    alt={scan.title}
                                    ar
                                    auto-rotate
                                    camera-controls
                                    ios-src={scan.iosUrl}
                                    className="w-full h-64 md:h-80 lg:h-96"
                                ></model-viewer>
                            </div>
                            <h3 className="mt-4 text-lg md:text-xl font-bold text-black dark:text-white">{scan.title}</h3>
                            <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">{scan.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Instructional Text */}
            <div className="mt-8 text-center hidden md:block">
                <p className="text-black dark:text-white italic">*click and drag to move around</p>
            </div>
        </div>
    );
};

export default FeaturedScans;