export default function Blogs() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <h1 className="text-5xl font-playfair font-bold mb-8 text-accent">Latest Insights</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-card-custom border border-custom rounded-2xl overflow-hidden hover:border-indigo-500/50 dark:hover:border-gold-500/50 transition-all group shadow-sm dark:shadow-none">
                        <div className="h-48 bg-indigo-100 dark:bg-white/5 relative">
                            <div className="absolute inset-0 bg-indigo-900/10 dark:bg-black/20 group-hover:bg-transparent transition-colors" />
                        </div>
                        <div className="p-6">
                            <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">Recruitment</span>
                            <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">The Future of Global Hiring</h3>
                            <p className="text-secondary text-sm mb-4">Discover the latest trends shaping the workforce landscape in 2025 and beyond.</p>
                            <button className="text-primary font-bold text-sm hover:underline">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
