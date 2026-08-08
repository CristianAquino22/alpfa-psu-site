import Image from "next/image";

function PhotoPlate({
    src,
    alt,
    className = "",
    priority = false,
}: {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
}) {
    return (
        <div className={`overflow-hidden bg-surface ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
            />
        </div>
    );
}

export default function Hero() {
    return (
        <section
            className="relative bg-paper pb-8 lg:pb-24
        [clip-path:polygon(0_0,100%_0,100%_calc(100%-30px),0_100%)]
        md:[clip-path:polygon(0_0,100%_0,100%_calc(100%-48px),0_100%)]
        lg:[clip-path:polygon(0_0,100%_0,100%_calc(100%-78px),0_100%)]"
        >
            {/* tall plate — lg only */}
            <PhotoPlate
                src="/photos/candid-hero-tall.jpg"
                alt="ALPFA members in conversation"
                className="hidden lg:block absolute top-[120px] right-0 w-[430px] h-[600px] z-0"
            />

            {/* small plate — lg only, decorative */}
            <PhotoPlate
                src="/photos/candid-small.jpg"
                alt=""
                className="hidden lg:block absolute top-16 right-[470px] w-[132px] h-[190px] z-0"
            />

            <div className="relative z-10 px-gutter pt-7 lg:px-gutter-lg lg:pt-20 lg:max-w-[760px]">
                <div className="flex items-center gap-3 mb-5 lg:gap-4 lg:mb-[30px]">
                    <span className="block h-px w-[34px] lg:w-[74px] bg-ink" />
                    <span className="font-mono text-micro lg:text-label uppercase tracking-mono text-stone">
                        Assoc. of Latino Professionals For America
                    </span>
                </div>

                <h1
                    className="font-display font-light text-ink tracking-display text-balance
            text-display-lg leading-[1.08] mb-5
            lg:text-hero lg:leading-hero lg:mb-[34px]"
                >
                    ALPFA Penn State.{" "}
                    <span className="text-alpfa-blue font-normal">Far from home,</span>{" "}
                    <em className="text-alpfa-blue italic font-normal">
                        not far from where you&apos;re going.
                    </em>
                </h1>

                <p
                    className="text-body lg:text-lead leading-[1.65] lg:leading-[1.7] font-light
            text-slate mb-[26px] lg:mb-10 lg:max-w-[46ch]"
                >
                    Penn State&apos;s chapter of the Association of Latino Professionals
                    For America. We open doors into the corporate world and make sure
                    nobody walks through them alone.
                </p>

                <div className="flex flex-col gap-3 mb-[30px] lg:flex-row lg:items-center lg:gap-[18px] lg:mb-0">
                    <a
                        href="https://instagram.com/alpfapsu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-alpfa-blue text-white text-ui font-medium text-center py-4
                    lg:py-[17px] lg:px-[34px] transition-opacity hover:opacity-90"
                    >
                        Join the chapter
                    </a>

                    <a
                        href="/eboard"
                        className="text-ui text-center py-3.5 border border-line-strong
                lg:border-0 lg:border-b lg:py-0 lg:pb-[5px] lg:px-0
                transition-colors hover:border-alpfa-blue hover:text-alpfa-blue"
                    >
                        Meet the board →
                    </a>
                </div>
            </div>

            {/* mobile: the single hero image */}
            <PhotoPlate
                src="/photos/candid-hero-tall.jpg"
                alt="ALPFA members at a chapter event"
                priority
                className="relative w-full h-[330px] lg:hidden"
            />

            {/* lg: the overlap plate */}
            <PhotoPlate
                src="/photos/candid-wide.jpg"
                alt=""
                className="hidden lg:block relative z-20 w-[300px] h-[210px] ml-[560px] -mt-3.5 shadow-plate-lg"
            />

            <div
                className="hidden lg:flex absolute left-gutter-lg bottom-[34px] z-20 items-center
          gap-2.5 font-mono text-label uppercase tracking-mono text-sand"
            >
                <span>Scroll</span>
                <span className="block w-px h-[26px] bg-line-strong" />
            </div>
        </section>
    );
}