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

function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            aria-hidden="true"
        >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

export default function EboardCard({ member }: { member: Member }) {
    return (
        <article className="group">
            <div
                className="relative transition-all duration-400 ease-out shadow-plate
                  group-hover:-translate-y-1.5 group-hover:shadow-plate-lg
                  motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
            >
                {member.photo ? (
                    <div className="relative aspect-[4/5] overflow-hidden bg-line">
                        <Image
                            src={member.photo}
                            alt={member.name}
                            fill
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover object-center grayscale-[35%] transition-all duration-500 ease-out
                              group-hover:grayscale-0 group-hover:scale-[1.02]
                              motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                        />
                    </div>
                ) : (
                    <div
                        className="relative aspect-[4/5] overflow-hidden bg-alpfa-blue
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

                {(member.linkedin || member.email) && (
                    <div className="absolute left-0 bottom-0 flex">
                        {member.linkedin && (
                            <a
                                href={member.linkedin}
                                target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} on LinkedIn`}
                        className="flex items-center justify-center w-9 h-9 bg-paper/85 text-alpfa-blue
                        backdrop-blur-sm transition-colors hover:bg-alpfa-blue hover:text-white"
                            >
                        <LinkedInIcon />
                    </a>
                )}
                {member.email && (
                    <a
                        href={`mailto:${member.email}`}
                aria-label={`Email ${member.name}`}
                className="flex items-center justify-center w-9 h-9 bg-paper/85 text-alpfa-blue
                backdrop-blur-sm transition-colors hover:bg-alpfa-blue hover:text-white"
                            >
                <MailIcon />
            </a>
                        )}
        </div>
    )
}
            </div >

            <h3 className="font-display font-normal text-ink text-body lg:text-title mt-4 lg:mt-[18px]">
                {member.name}
            </h3>
            <p className="text-[0.8125rem] lg:text-ui text-alpfa-blue mt-1">
                {member.role}
            </p>
            <p className="font-mono text-micro lg:text-meta uppercase tracking-mono text-sand mt-1.5">
                Class of {member.gradYear}
            </p>

{
    member.major && (
        <p className="hidden lg:block text-sm leading-[1.6] font-light text-slate mt-2.5">
            {member.major}
        </p>
    )
}
{
    member.funFact && (
        <p className="hidden lg:block text-sm leading-[1.6] font-light text-stone mt-1 italic">
            {member.funFact}
        </p>
    )
}
        </article >
    );
}