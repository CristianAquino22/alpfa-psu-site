import PhotoPlate from "@/components/PhotoPlate";

export default function WhoWeAre() {
    return (
        <section
            id="who-we-are"
            className="relative bg-paper px-gutter pb-section lg:px-gutter-lg lg:pb-section-lg"
        >
            <div className="lg:grid lg:grid-cols-[440px_1fr] lg:gap-[70px] lg:items-start">
                {/* photo stack — pulled up into the hero's diagonal */}
                <div className="relative -mt-pull lg:mt-[-120px]">
                    <PhotoPlate
                        src="/photos/candid-meeting.jpg"
                        alt="ALPFA general body meeting"
                        sizes="(max-width: 1024px) 100vw, 440px"
                        className="relative w-full h-[280px] lg:h-[430px] shadow-plate lg:shadow-plate-lg"
                    />

                    <PhotoPlate
                        src="/photos/candid-social.jpg"
                        alt=""
                        sizes="(max-width: 1024px) 150px, 240px"
                        className="relative z-[1] w-[150px] h-[180px] ml-auto -mt-14 -mr-gutter shadow-plate
              lg:absolute lg:w-[240px] lg:h-[300px] lg:right-[-38px] lg:bottom-[-104px]
              lg:m-0 lg:shadow-plate-lg"
                    />
                </div>

                {/* text column — pushed down so the two sides never align */}
                <div className="relative z-[3] mt-[34px] lg:mt-0 lg:pt-[120px]">
                    <div className="flex items-center gap-3 mb-5 lg:gap-4 lg:mb-[26px]">
                        <span className="block h-px w-[34px] lg:w-[74px] bg-ink" />
                        <span className="font-mono text-micro lg:text-label uppercase tracking-mono text-stone">
                            The chapter
                        </span>
                    </div>

                    <h2
                        className="font-display font-light text-ink text-pretty
              text-display-sm leading-[1.3]
              lg:text-display-lg lg:leading-[1.28]"
                    >
                        <span className="font-sans font-semibold tracking-[0.04em] text-alpfa-blue">
                            WE ARE
                        </span>{" "}
                        a national organization dedicated to empowering and developing
                        Latino leaders in every sector of the global economy. We provide
                        professional development, networking opportunities, mentorship, and
                        career resources for students.
                    </h2>
                </div>
            </div>
        </section>
    );
}