import FlyerGrid, { type Flyer } from "@/components/FlyerGrid";

const upcomingFlyers: Flyer[] = [
    // { src: "/flyers/social-mixer.jpg", caption: "Fall Social Mixer — Sept 12" },
];

const pastFlyers: Flyer[] = [
    // { src: "/flyers/spring-gala-2026.jpg", caption: "Spring Gala 2026" },
];

export default function EventsPage() {
    return (
        <div className="px-6 py-12 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Events</h1>

            <section className="mb-12">
                <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
                <FlyerGrid flyers={upcomingFlyers} />
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4">Past Events</h2>
                <FlyerGrid flyers={pastFlyers} />
            </section>
        </div>
    );
}