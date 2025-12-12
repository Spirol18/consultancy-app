export default function Gallery() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <h1 className="text-5xl font-playfair font-bold mb-8 text-accent">Our Gallery</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="aspect-square bg-card-custom rounded-xl border border-custom hover:opacity-80 transition-opacity relative overflow-hidden group shadow-sm dark:shadow-none">
                        <div className="absolute inset-0 flex items-center justify-center text-secondary/20 text-4xl font-bold group-hover:scale-110 transition-transform">
                            IMG {i}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
