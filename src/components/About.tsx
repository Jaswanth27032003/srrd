import { Target, Users, Telescope } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Us</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Pioneering excellence in pharmaceutical research and development
                    </p>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80"
                                alt="Modern Laboratory"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-600 mb-2.5">
                                <span className='font-bold uppercase text-black'>SRRD Laboratories</span> is a premier trusted Contract Research Organisation (CRO)
                                dedicated to accelerating scientific discovery and innovation, and bridges the gap
                                between scientific innovation and real-world solutions. We partner with
                                pharmaceutical, biotechnology, and healthcare companies worldwide, providing
                                comprehensive research and development services that turn ideas into impactful
                                solutions.
                            </p>
                            <p className="text-gray-600 mb-6">
                                With a strong foundation in cutting-edge science and technology, SRRD
                                Laboratories offers tailored solutions across the entire drug development lifecycle.
                                We ensure the highest quality standards, precision, and efficiency in everything we
                                do. We committed to delivering meticulous and reliable results. Our state-of-theart facilities, innovative methodologies, and rigorous quality standards set us apart
                                as a leader in the CRO space.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start mt-8">
                            <Target className="size-10 text-blue-600" />
                            <div className="ml-4">
                                <h4 className="text-lg font-semibold text-gray-900">Our Mission</h4>
                                <p className="text-gray-600">
                                    At SRRD Laboratory, our mission is to empower innovation and advance healthcare
                                    by providing exceptional contract research services. We are committed to
                                    delivering high-quality, precise, and efficient solutions that accelerate the journey
                                    from scientific discovery to impactful treatments.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Telescope className="size-12 text-blue-600" />
                            <div className="ml-4">
                                <h4 className="text-lg font-semibold text-gray-900">Our Vision</h4>
                                <p className="text-gray-600">
                                    To become the trusted global leader in contract research by driving innovation,
                                    excellence, and partnership in pharmaceutical and biotechnological advancements.
                                    SRRD Laboratory envisions a future where our scientific expertise and ethical
                                    practices bridge the gap between discovery and delivery, empowering our clients to
                                    transform healthcare outcomes and improve lives worldwide.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <Users className="size-12 text-blue-600" />
                            <div className="ml-4">
                                <h4 className="text-lg font-semibold text-gray-900">Our Team</h4>
                                <p className="text-gray-600">
                                    Our team is a group of dedicated professionals driven by a shared purpose: to
                                    transform lives through science. With experts in research, development,
                                    production, and quality assurance, we embrace collaboration and innovation to
                                    push the boundaries of what’s possible. With a shared dedication to excellence, we
                                    thrive on solving complex challenges and bringing client visions to life. Our people
                                    are the heart of our success, unified by integrity, passion, and a commitment to
                                    making a difference.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
