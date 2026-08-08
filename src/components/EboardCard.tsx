import Image from "next/image";

export type Member = {
    name: string;
    role: string;
    gradYear: number;
    major?: string;
    funFact?: string;
    photo?: string;
    linkedin?: string;
    email?: string;
};

function getInitials(name: string) {
    return name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .toUpperCase();
}

export default function EboardCard({ member }: { member: Member }) {
    return (
        <article className="group">
            {member.photo ? (
                <div className="relative aspect-[4/5] overflow-hidden bg-line shadow-plate lg:shadow-plate-lg">
                    <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover object-center transition-transform duration-500 ease-out
                          group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                </div>
            ) : (
                <div
                    className="relative aspect-[4/5] overflow-hidden bg-alpfa-blue shadow-plate lg:shadow-plate-lg
                      flex flex-col items-center justify-center gap-3"
                >
                    <span
                        aria-hidden="true"
                        className="font-display font-light text-white/90 text-[2rem] lg:text-[2.75rem] leading-none tracking-display"
                    >
                        {getInitials(member.name)}
                    </span>
                    <span className="block h-px w-6 lg:w-8 bg-line-alpfa" />
                    <span className="font-mono text-[0.5rem] lg:text-micro uppercase tracking-mono text-sky">
                        Photo coming
                    </span>
                </div>
            )}

            <h3 className="font-display font-normal text-ink text-body lg:text-title mt-4 lg:mt-[18px]">
                {member.name}
            </h3>
            <p className="text-[0.8125rem] lg:text-ui text-alpfa-blue mt-1">
                {member.role}
            </p>
            <p className="font-mono text-micro lg:text-meta uppercase tracking-mono text-sand mt-1.5">
                Class of {member.gradYear}
            </p>

            {member.major && (
                <p className="hidden lg:block text-sm leading-[1.6] font-light text-slate mt-2.5">
                    {member.major}
                </p>
            )}
            {member.funFact && (
                <p className="hidden lg:block text-sm leading-[1.6] font-light text-stone mt-1 italic">
                    {member.funFact}
                </p>
            )}

            {(member.linkedin || member.email) && (
                <div className="flex gap-4 mt-3">
                    {member.linkedin && (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-micro lg:text-meta uppercase tracking-mono text-graphite
                            border-b border-line-strong pb-0.5 transition-colors
                            hover:text-alpfa-blue hover:border-alpfa-blue"
                        >
                            LinkedIn
                        </a>
                    )}
                    {member.email && (
                        <a
                            href={`mailto:${member.email}`}
                            className="font-mono text-micro lg:text-meta uppercase tracking-mono text-graphite
                            border-b border-line-strong pb-0.5 transition-colors
                            hover:text-alpfa-blue hover:border-alpfa-blue"
                        >
                            Email
                        </a>
                    )}
                </div>
            )}
        </article >
    );
}