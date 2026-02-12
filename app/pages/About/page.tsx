'use client';

import FadeInSection from "@/components/FadeInSection";
import { CarouselSize } from "@/app/components/layout/carousel";
import BlurText from "@/components/BlurText";

export default function Page(){

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
       <main className='mb-12'>
        <section>
            <CarouselSize />
        </section>
        <section className="justify-center  mb-12 flex gap-6 px-6 items-stretch">
            <div className="w-1/2  ">
                {/* Left: Image / Video */}
                <FadeInSection>
                    <div className="flex justify-center w-full mb-2">
                    <video
                        className="rounded-lg shadow-2xl w-full h-[400px] object-cover" // Fixed height and object-fit for consistency
                        src="/upload/aboutus2.mp4"
                        controls
                        autoPlay
                        loop
                        muted
                    />
                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div className="flex justify-center w-full ">
                    <video
                        className="rounded-lg shadow-2xl w-full h-[400px] object-cover"  // Ensured consistent size with max-w-lg
                        src="/upload/aboutus.mp4"
                        controls
                        autoPlay
                        loop
                        muted
                    />
                    </div>
                </FadeInSection>
            </div>
            <div className="w-1/2 flex">
                <FadeInSection >
                    <div className="relative bg-gray-300 text-[#1a1a1a] rounded-md shadow-md p-8 h-full mx-auto justify-center items-center flex flex-col lg:mx-0">
                        {/* 🏷️ "About us" heading centered at top of card */}
                        <h1 className="text-5xl font-bold text-gray-800 text-center mb-6">
                        About us
                        </h1>

                        {/* ✨ BlurText with full paragraph content */}
                        <BlurText
                      text={`   Welcome to Heavenly Touch Dental Clinic, your trusted partner in achieving a healthier, brighter smile. For over 20 years, Heavenly Touch Dental Clinic, led by Dr. Nel Rugas, has been providing exceptional dental care for over 20 years. 
Their mission is to offer comprehensive, compassionate, and affordable dental services to help patients achieve optimal oral health. 
The clinic emphasizes a comfortable, personalized experience, whether for routine check-ups, smile makeovers, or advanced restorative treatments. 
With modern facilities and a caring team, they prioritize patient comfort and satisfaction. 
The clinic has built lasting relationships based on trust, transparency, and genuine care, ensuring that every visit is both relaxing and rewarding.`}
                        delay={100}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                       className="text-2xl leading-relaxed text-gray-800 whitespace-pre-line"
                        />
                    </div>
                </FadeInSection>
            </div>
        </section>
        <section className="flex gap-6 px-6 items-stretch">
            <div className="w-1/2 flex">
                <FadeInSection >
                    <div className="relative bg-blue-300 text-[#1a1a1a] rounded-md shadow-md p-8 h-full  mx-auto lg:mx-0">
                        {/* 🏷️ "About us" heading centered at top of card */}
                        <h1 className="text-5xl font-bold text-gray-800 text-center mb-6">
                        Vision
                        </h1>

                        {/* ✨ BlurText with full paragraph content */}
                        <BlurText
                      text={`  To be a trusted dental care provider where every smile shines bright—guided by passion, compassion, and nearly 20 years of dedicated service. We envision a world where dental health is a priority, fear is replaced with comfort, and every patient feels genuinely valued and cared for.`}
                        delay={100}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                       className="text-2xl leading-relaxed text-gray-800 whitespace-pre-line"
                        />
                    </div>
                </FadeInSection>
            </div>
            <div className="w-1/2 flex">
                <FadeInSection >
                    <div className="relative bg-orange-300 text-[#1a1a1a] rounded-md shadow-md p-8 h-full  mx-auto lg:mx-0">
                        {/* 🏷️ "About us" heading centered at top of card */}
                        <h1 className="text-5xl font-bold text-gray-800 text-center mb-6">
                        Mission
                        </h1>

                        {/* ✨ BlurText with full paragraph content */}
                        <BlurText
                      text={`   Our mission is to redefine the dental care experience through a holistic approach to dentistry, guided by love, care, and service. We are committed to delivering personalized treatments that meet each patient’s unique needs, preserving healthy smiles, and reducing dental fears. Through compassion and excellence, we strive to create a safe, welcoming environment where patients feel confident, respected, and empowered to prioritize their oral health.`}
                        delay={100}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                       className="text-2xl leading-relaxed text-gray-800 whitespace-pre-line"
                        />
                    </div>
                </FadeInSection>
            </div>
        </section>
       </main>
    )
}
