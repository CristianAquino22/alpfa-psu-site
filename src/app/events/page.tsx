import FlyerGrid, { type Flyer } from "@/components/FlyerGrid";
import Reveal from "@/components/Reveal";

const upcomingFlyers: Flyer[] = [
    { src: "/flyers/info_session.jpg", alt: "ALPFA Penn State info session flyer" },
    { src: "/flyers/masquerade.jpg", alt: "ALPFA Penn State masquerade flyer" },
];

const pastFlyers: Flyer[] = [
    { src: "/flyers/past_1.jpg", alt: "Past ALPFA Penn State event flyer" },
    { src: "/flyers/past_2.jpg", alt: "Past ALPFA Penn State event flyer" },
    { src: "/flyers/past_3.jpg", alt: "Past ALPFA Penn State event flyer" },
    { src: "/flyers/past_4.jpg", alt: "Past ALPFA Penn State event flyer" },
    { src: "/flyers/past_5.jpg", alt: "Past ALPFA Penn State event flyer" },
];

export default function EventsPage() {
    return (
        <main className="bg-paper">
            <section
                className="relative bg-paper px-gutter pt-6 pb-section lg:px-gutter-lg lg:pt-14 lg:pb-section-lg
          [clip-path:polygon(0_0,100%_0,100%_calc(100%-30px),0_100%)]
          md:[clip-path:polygon(0_0,100%_0,100%_calc(100%-48px),0_100%)]
          lg:[clip-path:polygon(0_0,100%_0,100%_calc(100%-78px),0_100%)]"
            >
                <Reveal>
                    <div className="flex items-center gap-3 mb-5 lg:gap-4 lg:mb-[30px]">
                        <span className="block h-px w-[34px] lg:w-[74px] bg-ink" />
                        <span className="font-mono text-micro lg:text-label uppercase tracking-mono text-stone">
                            Events · Fall 2026
                        </span>
                    </div>
                </Reveal>

                <Reveal delay={140}>
                    <h1
                        className="font-display font-light text-ink tracking-display text-balance
            text-display-lg leading-[1.08] mb-5
            lg:text-[4.25rem] lg:leading-[1.04] lg:mb-8 lg:max-w-[14ch]"
                    >
                        Come find out what{" "}
                        <span className="text-alpfa-blue">we&apos;re about.</span>
                    </h1>
                </Reveal>

                <Reveal delay={220}>
                    <p className="text-body lg:text-lead leading-[1.65] lg:leading-[1.7] font-light text-slate mb-9 lg:mb-14 lg:max-w-[44ch]">
                        Everything you need is on the flyer. Follow us on Instagram for updates
                        and anything that changes.
                    </p>
                </Reveal>

                <FlyerGrid flyers={upcomingFlyers} featured />
            </section>

            <section
                className="relative bg-alpfa-blue text-white -mt-[26px] pt-[60px] px-gutter pb-section
          lg:-mt-[70px] lg:pt-[150px] lg:px-gutter-lg lg:pb-section-lg
          [clip-path:polygon(0_28px,100%_0,100%_100%,0_100%)]
          lg:[clip-path:polygon(0_74px,100%_0,100%_100%,0_100%)]"
            >
                <p className="font-mono text-micro lg:text-label uppercase tracking-mono text-sky mb-6 lg:mb-10">
                    Past events
                </p>

                <FlyerGrid flyers={pastFlyers} />

                <a
                    href="https://instagram.com/alpfapsu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline gap-3 border-b border-line-alpfa pb-2 mt-10 lg:mt-16 transition-colors hover:border-white"
                >
                    <span className="font-display font-light text-[1.5rem] lg:text-[2rem] leading-none">
                        @alpfapsu
                    </span>
                    <span className="font-mono text-micro lg:text-label uppercase tracking-mono text-sky transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
                        Follow for every event →
                    </span>
                </a>
            </section>
        </main >
    );
}