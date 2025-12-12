export default function Jobs() {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6">
            <h1 className="text-5xl font-playfair font-bold mb-8 text-accent">Career Opportunities</h1>
            <div className="space-y-4">
                {[
                    { title: "Senior Project Manager", location: "New York, USA", type: "Full-time" },
                    { title: "Frontend Developer", location: "Remote", type: "Contract" },
                    { title: "HR Specialist", location: "London, UK", type: "Full-time" },
                    { title: "Data Analyst", location: "Toronto, Canada", type: "Full-time" }
                ].map((job, i) => (
                    <div key={i} className="p-6 bg-card-custom border border-custom rounded-xl flex flex-col md:flex-row justify-between items-center gap-4 hover:border-indigo-500/50 dark:hover:border-gold-500/50 transition-colors shadow-sm dark:shadow-none">
                        <div>
                            <h3 className="text-xl font-bold text-primary">{job.title}</h3>
                            <p className="text-secondary text-sm">{job.location} • {job.type}</p>
                        </div>
                        <button className="px-6 py-2 bg-indigo-600 dark:bg-gold-500 text-white dark:text-black font-bold rounded-full hover:bg-indigo-700 dark:hover:bg-gold-400 transition-colors">
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
