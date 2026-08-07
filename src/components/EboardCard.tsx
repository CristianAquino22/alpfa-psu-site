import Image from "next/image";

export type Member = {
    name: string;
    role: string;
    gradYear: number;
    major?: string;
    funFact?: string;
    photo?: string;
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
        <div className="text-center">
            {member.photo ? (
                <Image
                    src={member.photo}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="rounded-full object-cover mx-auto mb-4 w-40 h-40"
                />
            ) : (
                <div className="w-40 h-40 rounded-full bg-alpfa-blue text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    {getInitials(member.name)}
                </div>
            )}
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-alpfa-blue text-sm font-medium">{member.role}</p>
            {member.major && (
                <p className="text-gray-500 text-sm">
                    {member.major} • Class of {member.gradYear}
                </p>
            )}
            {!member.major && (
                <p className="text-gray-500 text-sm">Class of {member.gradYear}</p>
            )}
            {member.funFact && (
                <p className="text-gray-600 text-sm italic mt-2">
                    &ldquo;{member.funFact}&rdquo;
                </p>
            )}
        </div>
    );
}