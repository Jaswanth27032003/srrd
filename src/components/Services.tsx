import React from 'react';
import { FlaskRound as Flask, Database, Search, Activity } from 'lucide-react';

const services = [
    {
        icon: Flask,
        title: 'Custom Synthesis',
        description: 'Specialized synthesis of complex organic compounds and intermediates tailored to your specific requirements.',
    },
    {
        icon: Database,
        title: 'API Manufacturing',
        description: 'State-of-the-art API manufacturing facilities with strict quality control and regulatory compliance.',
    },
    {
        icon: Search,
        title: 'Analytical Testing',
        description: 'Comprehensive analytical services including method development, validation, and stability testing.',
    },
    {
        icon: Activity,
        title: 'Process Development',
        description: 'Optimization of synthetic routes and scale-up processes for efficient manufacturing.',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Comprehensive solutions for your pharmaceutical development needs
                    </p>
                </div>

                <div className="mt-20">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <service.icon className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}