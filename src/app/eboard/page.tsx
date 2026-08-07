import EboardCard, { type Member } from "@/components/EboardCard";

const members: Member[] = [
    { name: "Alyssa Robert", role: "President", gradYear: 2027 },
    { name: "Francisco de la Cruz", role: "Vice President", gradYear: 2027 },
    { name: "Fernanda Garza", role: "Treasurer", gradYear: 2027 },
    { name: "Isabella Herrera", role: "Secretary", gradYear: 2027 },
    { name: "Paulina Sinibaldi", role: "Marketing Director", gradYear: 2027 },
    { name: "Cristian Aquino", role: "Internal Relations", gradYear: 2027 },
    { name: "Diego Ramirez", role: "External Relations", gradYear: 2029 },
];

export default function EboardPage() {
    return (
        <div className="px-6 py-12 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Meet the Eboard</h1>
            <p className="text-gray-600 mb-10">
                The students leading ALPFA Penn State this year.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
                {members.map((member) => (
                    <EboardCard key={member.name} member={member} />
                ))}
            </div>
        </div>
    );
}