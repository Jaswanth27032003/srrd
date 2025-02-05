import { Target, Heart, Users } from 'lucide-react';

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
                        <div className="flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Excellence in Research
                            </h3>
                            <p className="text-gray-600 mb-6">
                                SRRD Laboratories LLP is a leading Contract Research Organization (CRO)
                                committed to advancing pharmaceutical development through innovative
                                research and cutting-edge manufacturing solutions.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <Target className="h-6 w-6 text-blue-600 mt-1" />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900">Our Mission</h4>
                                        <p className="text-gray-600">
                                            To accelerate drug development through innovative research and
                                            reliable manufacturing services.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Heart className="h-6 w-6 text-blue-600 mt-1" />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900">Our Values</h4>
                                        <p className="text-gray-600">
                                            Quality, Innovation, Integrity, and Customer Focus drive
                                            everything we do.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Users className="h-6 w-6 text-blue-600 mt-1" />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900">Our Team</h4>
                                        <p className="text-gray-600">
                                            Expert scientists and researchers dedicated to delivering
                                            excellence in every project.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
