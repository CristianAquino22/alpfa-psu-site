import PhotoPlate from "@/components/PhotoPlate";

export default function MembershipPage() {
    return (
        <main className="bg-paper">
            <section
                className="relative bg-paper px-gutter pt-6 pb-12 lg:px-gutter-lg lg:pt-14 lg:pb-20
          [clip-path:polygon(0_0,100%_0,100%_calc(100%-30px),0_100%)]
          md:[clip-path:polygon(0_0,100%_0,100%_calc(100%-48px),0_100%)]
          lg:[clip-path:polygon(0_0,100%_0,100%_calc(100%-78px),0_100%)]"
            >
                <PhotoPlate
                    src="/photos/candid-small.jpg"
                    alt="ALPFA Penn State members at a chapter event"
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="hidden lg:block absolute top-1/2 right-[8%] -translate-y-1/2 w-[380px] h-[480px] z-0 shadow-plate-lg"
                />

                <div className="relative z-10 lg:max-w-[720px]">
                    <div className="flex items-center gap-3 mb-5 lg:gap-4 lg:mb-[30px]">
                        <span className="block h-px w-[34px] lg:w-[74px] bg-ink" />
                        <span className="font-mono text-micro lg:text-label uppercase tracking-mono text-stone">
                            Membership · Open now
                        </span>
                    </div>

                    <h1
                        className="font-display font-light text-ink tracking-display text-balance
              text-display-lg leading-[1.08] mb-5
              lg:text-[4.25rem] lg:leading-[1.04] lg:mb-[30px] lg:max-w-[18ch]"
                    >
                        Every major. Every year.{" "}
                        <span className="text-alpfa-blue">No experience required.</span>
                    </h1>

                    <p className="text-body lg:text-lead leading-[1.65] lg:leading-[1.7] font-light text-slate lg:max-w-[46ch]">
                        Any student enrolled at Penn State&apos;s University Park campus is
                        welcome to get involved. No major or background requirement.
                    </p>
                </div>

                <PhotoPlate
                    src="/photos/candid-small.jpg"
                    alt="ALPFA Penn State members at a chapter event"
                    sizes="100vw"
                    className="relative w-full h-[300px] mt-9 lg:hidden"
                />
            </section>

            <section className="bg-surface px-gutter pt-9 pb-section lg:px-gutter-lg lg:pt-16 lg:pb-section-lg">
                <p className="font-mono text-micro lg:text-label uppercase tracking-mono text-sand mb-7 lg:mb-12">
                    How to get involved
                </p>

                <ul className="grid gap-y-8 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-0">
                    <li className="border-t border-line-strong pt-5 lg:pt-7">
                        <span className="font-mono text-meta text-sand">01</span>
                        <h3 className="font-display font-light text-ink text-display-sm lg:text-[2rem] leading-[1.24] mt-3 mb-3 lg:mt-4">
                            Follow us on Instagram
                        </h3>
                        <p className="text-body lg:text-body-lg leading-prose font-light text-slate">
                            Every event and meeting gets announced at{" "}
                            <a
                                href="https://instagram.com/alpfapsu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-b border-line-strong transition-colors hover:text-alpfa-blue hover:border-alpfa-blue"
                            >
                                @alpfapsu
                            </a>
                            .
                        </p>
                    </li>

                    <li className="border-t border-line-strong pt-5 lg:pt-7">
                        <span className="font-mono text-meta text-sand">02</span>
                        <h3 className="font-display font-light text-ink text-display-sm lg:text-[2rem] leading-[1.24] mt-3 mb-3 lg:mt-4">
                            Join the WhatsApp group
                        </h3>
                        <p className="text-body lg:text-body-lg leading-prose font-light text-slate">
                            The link lives in our Instagram bio. That&apos;s where everything
                            actually happens.
                        </p>
                    </li>

                    <li className="border-t border-line-strong pt-5 lg:pt-7">
                        <span className="font-mono text-meta text-sand">03</span>
                        <h3 className="font-display font-light text-ink text-display-sm lg:text-[2rem] leading-[1.24] mt-3 mb-3 lg:mt-4">
                            Show up
                        </h3>
                        <p className="text-body lg:text-body-lg leading-prose font-light text-slate">
                            A mix of in-person and online events each semester. Professional
                            development, networking, and community.
                        </p>
                    </li>
                </ul>
            </section>

            <section
                className="relative bg-alpfa-blue text-white -mt-[26px] pt-[60px] px-gutter pb-section
          lg:-mt-[70px] lg:pt-[150px] lg:px-gutter-lg lg:pb-section-lg
          [clip-path:polygon(0_28px,100%_0,100%_100%,0_100%)]
          lg:[clip-path:polygon(0_74px,100%_0,100%_100%,0_100%)]"
            >
                <p className="font-mono text-micro lg:text-label uppercase tracking-mono text-sky mb-[18px] lg:mb-7">
                    Common questions
                </p>

                <dl className="border-t border-line-alpfa lg:grid lg:grid-cols-2 lg:gap-x-16">
                    <div className="border-b border-line-alpfa py-5 lg:py-7">
                        <dt className="font-display font-normal text-[1.125rem] lg:text-title mb-2">
                            Do I have to be Latino?
                        </dt>
                        <dd className="text-body lg:text-body-lg leading-prose font-light text-mist">
                            No. Everyone is welcome at every event.
                        </dd>
                    </div>

                    <div className="border-b border-line-alpfa py-5 lg:py-7">
                        <dt className="font-display font-normal text-[1.125rem] lg:text-title mb-2">
                            Do I have to be a business major?
                        </dt>
                        <dd className="text-body lg:text-body-lg leading-prose font-light text-mist">
                            No. Any student at University Park is welcome, whatever
                            you&apos;re studying.
                        </dd>
                    </div>
                </dl>

                <a
                    href="https://instagram.com/alpfapsu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-alpfa-blue text-ui font-medium py-4 px-8 mt-10 lg:mt-14 transition-opacity hover:opacity-90"
                >
                    Follow us to get started
                </a>
            </section >
        </main >
    );
}