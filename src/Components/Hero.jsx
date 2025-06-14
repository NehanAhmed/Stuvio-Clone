const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 mt-5">
            <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="max-w-full text-8xl font-bold font-tusker">WE ARE STUVIO</h1>
            </div>
            <video
                className="w-[93%] rounded-4xl h-2/6 object-cover"

            >
                <source src="src\assets\Video\hero_video.mp4"/>
            </video>
        </div>
    );
};

export default Hero;