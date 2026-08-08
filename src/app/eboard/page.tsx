import EboardCard, { type Member } from "@/components/EboardCard";

const members: Member[] = [
    { name: "Alyssa Robert", role: "President", gradYear: 2027 },
    { name: "Francisco de la Cruz", role: "Vice President", gradYear: 2027 },
    { name: "Fernanda Garza", role: "Treasurer", gradYear: 2027 },
    { name: "Isabella Herrera", role: "Secretary", gradYear: 2027 },
    { name: "Paulina Sinibaldi", role: "Marketing Director", gradYear: 2027 },
    { name: "Cristian Aquino", role: "Internal Relations", gradYear: 2027 },
    { name: "Diego Ramirez", role: "External Relations", gradYear: 2029 },
    { name: "Isabella Zuluaga", role: "Freshmen Representative", gradYear: 2030 },
];

export default function EboardPage() {
    return (
        <main className="bg-paper">
            <section
                className="relative bg-paper px-gutter pt-6 pb-12 lg:px-gutter-lg lg:pt-14 lg:pb-20
          [clip-path:polygon(0_0,100%_0,100%_calc(100%-30px),0_100%)]
          md:[clip-path:polygon(0_0,100%_0,100%_calc(100%-48px),0_100%)]
          lg:[clip-path:polygon(0_0,100%_0,100%_calc(100%-78px),0_100%)]"
            >
                <div className="flex items-center gap-3 mb-5 lg:gap-4 lg:mb-[30px]">
                    <span className="block h-px w-[34px] lg:w-[74px] bg-ink" />
                    <span className="font-mono text-micro lg:text-label uppercase tracking-mono text-stone">
                        Executive board · 2026—2027
                    </span>
                </div>

                <h1
                    className="font-display font-light text-ink tracking-display text-balance
            text-display-lg leading-[1.08]
            lg:text-[4.25rem] lg:leading-[1.04] lg:max-w-[18ch]"
                >
                    Eight people who{" "}
                    <em className="text-alpfa-blue italic">want to hear from you.</em>
                </h1>
            </section>

            <section
                id="board"
                className="bg-surface px-gutter pb-section pt-9 lg:px-gutter-lg lg:pb-section-lg lg:pt-16"
            >
                <ul className="grid grid-cols-2 gap-x-3 gap-y-9 md:grid-cols-3 md:gap-x-5 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14">
                    {members.map((member) => (
                        <li key={member.name}>
                            <EboardCard member={member} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}