import PhotoPlate from "@/components/PhotoPlate";
import Reveal from "@/components/Reveal";

const marquee = [
    { src: "/photos/candid-meeting.jpg", w: "w-[210px] lg:w-[330px]" },
    { src: "/photos/candid-wide.jpg", w: "w-[160px] lg:w-[250px]" },
    { src: "/photos/candid-small.jpg", w: "w-[240px] lg:w-[380px]" },
    { src: "/photos/candid-social.jpg", w: "w-[190px] lg:w-[280px]" },
    { src: "/photos/candid-hero-tall.jpg", w: "w-[210px] lg:w-[330px]" },
];

export default function OurMission() {
    return (
        <section
            id="mission"
            className="relative bg-alpfa-blue text-white
        -mt-[26px] pt-[60px] px-gutter
        lg:-mt-[70px] lg:pt-[150px] lg:px-gutter-lg
        [clip-path:polygon(0_28px,100%_0,100%_100%,0_100%)]
        lg:[clip-path:polygon(0_74px,100%_0,100%_100%,0_100%)]"
        >
            <div className="lg:grid lg:grid-cols-[1fr_380px] lg:gap-20 lg:items-start">
                <div>
                    <Reveal>
                        <p className="font-mono text-micro lg:text-label uppercase tracking-mono text-sky mb-[18px] lg:mb-7">
                            Our mission
                        </p>
                    </Reveal>

                    <Reveal delay={140}>
                        <h2
                            className="font-display font-light text-pretty
                text-[1.8125rem] leading-[1.32] mb-[18px]
                lg:text-display-xl lg:leading-serif lg:mb-[30px] lg:max-w-[20ch]"
                        >
                            ALPFA&apos;s mission at Penn State is to build a{" "}
                            <em>strong, inclusive community</em> by bringing students
                            together and providing valuable resources and opportunities in
                            the corporate sector.
                        </h2>
                    </Reveal>

                    <Reveal delay={240}>
                        <p
                            className="font-display font-light text-pretty text-mist
                text-[1.8125rem] leading-[1.32] mb-[26px]
                lg:text-display-xl lg:leading-serif lg:mb-0 lg:max-w-[20ch]"
                        >
                            We strive to foster connections with top firms and companies
                            while creating a supportive network for professional and personal
                            growth.
                        </p>
                    </Reveal>
                </div>

                <PhotoPlate
                    src="/photos/candid-social.jpg"
                    alt="ALPFA Penn State members at a chapter event"
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="relative w-full h-[300px] mb-11 lg:mb-0 lg:h-[480px] lg:-mt-24 lg:shadow-plate-navy"
                />
            </div>

            {/* marquee */}
            <div className="-mx-gutter mt-0 pb-[34px] overflow-hidden lg:-mx-gutter-lg lg:mt-[90px] lg:pb-14">
                <p className="font-mono text-micro lg:text-label uppercase tracking-mono text-sky px-gutter pb-3 lg:px-gutter-lg lg:pb-[18px]">
                    The chapter, this year
                </p>

                <div
                    className="flex w-max gap-3 lg:gap-[18px]
            motion-safe:animate-[marquee_30s_linear_infinite]
            lg:motion-safe:animate-[marquee_38s_linear_infinite]
            motion-reduce:animate-none hover:[animation-play-state:paused]"
                >
                    {[...marquee, ...marquee].map((photo, i) => (
                        <PhotoPlate
                            key={i}
                            src={photo.src}
                            alt=""
                            sizes="(max-width: 1024px) 240px, 380px"
                            className={`relative shrink-0 h-[150px] lg:h-[220px] ${photo.w}`}
                        />
                    ))}
                </div>
            </div>

            <div className="flex justify-between border-t border-line-alpfa pt-[26px] pb-[30px] font-mono text-meta text-sky">
                <span>University Park, PA</span>

                <a
                href="https://instagram.com/alpfapsu"
                className="transition-opacity hover:opacity-70"
                >
                @alpfapsu
            </a>
        </div>
        </section >
    );
}