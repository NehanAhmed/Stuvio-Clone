import { motion } from 'motion/react'

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 mt-5">
            <motion.div 
                className="flex flex-col items-center justify-center gap-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <h1 className="max-w-full text-8xl font-bold font-tusker">WE ARE STUVIO</h1>
            </motion.div>
            <motion.video
                className="w-[93%] rounded-4xl h-2/6 object-cover"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
                autoPlay
                muted
                loop
            >x
                <source src="src\assets\Video\hero_video.mp4"/>
            </motion.video>
        </div>
    );
};

export default Hero;