type Props = {
    title: string;
    subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
    return (
        <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading uppercase tracking-widest">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted mt-2 max-w-xl">{subtitle}</p>
            )}
        </div>
    );
}