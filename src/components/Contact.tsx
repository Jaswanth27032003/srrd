import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Contact Us</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Get in touch with our team of experts
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                Send us a message
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-gray-900">Address</h4>
                                        <p className="text-gray-600">
                                            A 1/5, 1st Floor, SV Cooperative Society, <br />
                                            Balangar, Hyderabad, Telangana 500037, <br />
                                            India
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                                        <p className="text-gray-600">+91 98852 04920</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium text-gray-900">Email</h4>
                                        <p className="text-gray-600">info@srrdlabs.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 h-64">
                            <iframe
                                title="SRRD Labs Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30445.304232457733!2d78.42924440230965!3d17.475835239270534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90f66963b153%3A0x75e59146333c941c!2sBalanagar%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1738782298333!5m2!1sen!2sin"
                                className="w-full h-full rounded-lg"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}