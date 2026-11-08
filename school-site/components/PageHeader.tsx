
type PageHeaderProps = {
    title: string;
    intro?: string;
};

export default function PageHeader({title,intro } : PageHeaderProps){
        return (
            <section className="">
            <div className="px-4 py-10 lg:px-6 lg:py-14">
                <h1 className="text-3xl font-bold text-primary lg:text-4xl leading-snug">{title}</h1>
                <div className="mt-4 h-1 w-20 bg-accent"></div>
                {intro && <p className="mt-4 max-w-2xl text-text-muted">{intro}</p>}

            </div>
            </section>
        )
}