import React from 'react';
import '../index.css'; // Ensure the correct path

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero bg-cover bg-center h-screen text-white" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
                <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
                        <p className="text-lg mb-6">Showcasing my work and skills</p>
                        <a href="#portfolio" className="btn btn-primary">View My Work</a>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-gray-100 text-center">
                <img src="/path/to/your/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">Hi, I'm [Your Name]</h2>
                <p className="text-lg">A passionate developer specializing in [Your Specialization]</p>
            </section>

            {/* Featured Projects Section */}
            <section id="portfolio" className="py-20">
                <h2 className="text-4xl font-bold text-center mb-10">Featured Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Add your project components here */}
                    {/* Example Project */}
                    <div className="relative">
                        <img src="/path/to/project/image.jpg" alt="Project" className="w-full h-auto rounded-lg" />
                        <div className="absolute bottom-0 left-0 p-2 bg-opacity-50 bg-black text-white text-sm rounded-br-lg">
                            Project Title
                        </div>
                    </div>
                    {/* Repeat for more projects */}
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-gray-100 text-center">
                <h2 className="text-4xl font-bold mb-10">My Skills</h2>
                <div className="flex justify-center space-x-4">
                    {/* Add skill icons or progress bars */}
                    <div className="flex flex-col items-center">
                        <img src="/path/to/skill/icon.png" alt="Skill" className="w-16 h-16 mb-2" />
                        <p>Skill Name</p>
                    </div>
                    {/* Repeat for more skills */}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20">
                <h2 className="text-4xl font-bold text-center mb-10">Testimonials</h2>
                <div className="space-y-6">
                    {/* Add testimonial components here */}
                    {/* Example Testimonial */}
                    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
                        <p>"Great work! Highly recommended."</p>
                        <p className="mt-2 text-right">- Client Name</p>
                    </div>
                    {/* Repeat for more testimonials */}
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-100 text-center">
                <h2 className="text-4xl font-bold mb-10">Get in Touch</h2>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <textarea placeholder="Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </section>

            {/* Footer */}
            <footer className="py-6 bg-black text-white text-center">
                <div className="mb-4">
                    <a href="#portfolio" className="px-3">Portfolio</a>
                    <a href="#skills" className="px-3">Skills</a>
                    <a href="#contact" className="px-3">Contact</a>
                </div>
                <p>&copy; 2024 [Your Name]. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
