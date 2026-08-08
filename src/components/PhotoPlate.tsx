import Image from "next/image";

export default function PhotoPlate({
    src,
    alt,
    className = "",
    priority = false,
    sizes = "(max-width: 1024px) 100vw, 450px",
}: {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
    sizes?: string;
}) {
    return (
        <div className={`overflow-hidden bg-surface ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                sizes={sizes}
                className="object-cover"
            />
        </div>
    );
}