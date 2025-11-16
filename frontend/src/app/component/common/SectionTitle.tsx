interface Props {
    title: string;
    subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
    return (
        <div>
            <h2 className="text-3xl font-bold">{title}</h2>
            {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
    );
}
