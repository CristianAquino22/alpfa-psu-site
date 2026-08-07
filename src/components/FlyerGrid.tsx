import Image from "next/image";

export type Flyer = {
    src: string;
    caption: string;
};

export default function FlyerGrid({ flyers }: { flyers: Flyer[] }) {
    if (flyers.length === 0) {
        return <p className="text-gray-500 text-sm">Nothing here yet.</p>;
    }

    return (
        <div className="grid sm:grid-cols-2 gap-6">
            {flyers.map((flyer) => (
                <div key={flyer.src}>
                    <Image
                        src={flyer.src}
                        alt={flyer.caption}
                        width={600}
                        height={800}
                        className="rounded-lg w-full h-auto"
                    />
                    <p className="text-sm text-gray-600 mt-2">{flyer.caption}</p>
                </div>
            ))}
        </div>
    );
}