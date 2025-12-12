export default function Services() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <h1 className="text-5xl font-playfair font-bold mb-8 text-accent">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    "Executive Search",
                    "Recruitment Process Outsourcing",
                    "Staffing Solutions",
                    "Talent Mapping",
                    "Leadership Consulting",
                    "Market Intelligence"
                ].map((service, i) => (
                    <div key={i} className="p-8 bg-card-custom border border-custom rounded-2xl hover:border-indigo-500/50 dark:hover:border-gold-500/50 transition-colors shadow-sm dark:shadow-none">
                        <h3 className="text-2xl font-bold mb-4 text-primary">{service}</h3>
                        <p className="text-secondary">Comprehensive solutions tailored to your business needs.</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
