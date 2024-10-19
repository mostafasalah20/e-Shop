import React from 'react';

export default function Contact() {
    return (
        <section className="contact-section py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
                    <p className="text-lg text-gray-600">
                        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-start justify-between">
                   
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
                        <p className="text-lg text-gray-600 mb-4">
                            Feel free to reach out to us via the following contact information or fill out the form.
                        </p>

                        <div className="mb-4">
                            <h4 className="text-xl font-medium text-gray-800">Email:</h4>
                            <p className="text-lg text-gray-600">contact@example.com</p>
                        </div>

                        <div className="mb-4">
                            <h4 className="text-xl font-medium text-gray-800">Phone:</h4>
                            <p className="text-lg text-gray-600">+123 456 7890</p>
                        </div>

                        <div className="mb-4">
                            <h4 className="text-xl font-medium text-gray-800">Address:</h4>
                            <p className="text-lg text-gray-600">123 Street Name, City, Country</p>
                        </div>
                    </div>

                    
                    <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Form</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Your email"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Your message"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
