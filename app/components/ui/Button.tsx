import clsx from "clsx";

type Props = {
    children: React.ReactNode;
    className?: string;
    href?: string;
};

export default function Button({ children, className, href }: Props) {
    const base =
        "border border-accent text-accent px-6 py-3 uppercase tracking-widest text-sm transition hover:bg-accent hover:text-black";

    if (href) {
        return (
            <a href={href} target="_blank" className={clsx(base, className)}>
                {children}
            </a>
        );
    }

    return <button className={clsx(base, className)}>{children}</button>;
}