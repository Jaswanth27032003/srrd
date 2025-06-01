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
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose SRRD Laboratories</h2>
                    <p className="mt-4 text-m text-gray-600">
                        SRRD Laboratories stands out as a trusted and reliable partner for pharmaceutical
                        and biotechnological research. Here’s why we are the ideal choice for your project:
                    </p>

                </div>
                <div className="flex flex-wrap gap-3.5 mt-6 w-full">
                    {/* Item 1 */}
                    <div className="flex flex-col items-center w-[calc(25%-0.75rem)] h-[220px] shadow-xl border border-gray-400 p-4 rounded-xl">
                        <span className="font-bold text-black text-center">Comprehensive Expertise</span>
                        <p className="text-gray-600 mt-2 text-center">
                            With a multidisciplinary team of seasoned scientists and industry professionals, we bring world-class expertise to every stage of research and development.
                        </p>
                    </div>
                    {/* Item 2 */}
                    <div className="flex flex-col items-center w-[calc(25%-0.75rem)] h-[220px] shadow-xl border border-gray-400 p-4 rounded-xl">
                        <span className="font-bold text-black text-center">Tailored Solutions</span>
                        <p className="text-gray-600 mt-2 text-center">
                            We understand that every project is unique. Our adaptable
                            approach ensures customized solutions designed to meet your specific goals
                            and requirements.
                        </p>
                    </div>
                    {/* Item 3 */}
                    <div className="flex flex-col items-center w-[calc(25%-0.75rem)] h-[220px] shadow-xl border border-gray-400 p-4 rounded-xl">
                        <span className="font-bold text-black text-center">State-of-the-Art Infrastructure</span>
                        <p className="text-gray-600 mt-2 text-center">
                            Our cutting-edge facilities and advanced
                            technology empower us to deliver high-precision results and stay ahead in
                            innovation.
                        </p>
                    </div>
                    {/* Item 4 */}
                    <div className="flex flex-col items-center w-[calc(25%-0.75rem)] h-[220px] shadow-xl border border-gray-400 p-4 rounded-xl">
                        <span className="font-bold text-black text-center">Commitment to Excellence</span>
                        <p className="text-gray-600 mt-2 text-center">
                            At SRRD Laboratories, quality is non-negotiable.
                            From meticulous data analysis to stringent quality assurance, we adhere to the
                            highest industry standards.                         </p>
                    </div>
                    {/* Item 5 */}
                    <div className="flex flex-col items-center w-[calc(25%-0.75rem)] h-[220px] shadow-xl border border-gray-400 p-4 rounded-xl">
                        <span className="font-bold text-black text-center">Collaborative Partnerships</span>
                        <p className="text-gray-600 mt-2 text-center">
                            Your success is our success. We build lasting
                            partnerships with our clients, based on transparency, trust, and shared
                            ambitions.
                        </p>
                    </div>
                    {/* Item 6 */}
                    <div className="flex flex-col items-center w-[calc(25%-0.75rem)] h-[220px] shadow-xl border border-gray-400 p-4 rounded-xl">
                        <span className="font-bold text-black text-center">Accelerating Timelines</span>
                        <p className="text-gray-600 mt-2 text-center">
                            Time is critical in research, and our efficient processes
                            are designed to accelerate your progress without compromising on quality                        </p>
                    </div>
                    {/* Item 7 */}
                    <div className="flex flex-col items-center w-[calc(25%-0.75rem)] h-[220px] shadow-xl border border-gray-400 p-4 rounded-xl">
                        <span className="font-bold text-black text-center">Global Reach</span>
                        <p className="text-gray-600 mt-2 text-center">
                            With a proven track record of supporting partners worldwide, we
                            ensure seamless service delivery across borders                        </p>
                    </div>
                    {/* Item 8 */}
                    <div className="flex flex-col items-center w-[calc(25%-0.75rem)] h-[220px] shadow-xl border border-gray-400 p-4 rounded-xl">
                        <span className="font-bold text-black text-center">Integrity and Responsibility</span>
                        <p className="text-gray-600 mt-2 text-center">
                            Guided by ethical practices and sustainability, we
                            uphold our commitment to making meaningful contributions to healthcare.
                        </p>
                    </div>
                </div>


                {/* <ul>
                        <li className='mt-8 text-gray-600'>
                            <span className='font-bold text-black'>Comprehensive Expertise:</span> With a multidisciplinary team of seasoned scientists
                            and industry professionals, we bring world-class expertise to every stage of
                            research and development.
                        </li>
                        <li className='mt-2 text-gray-600'>
                            <span className='font-bold text-black'>Tailored Solutions:</span>  We understand that every project is unique. Our adaptable
                            approach ensures customized solutions designed to meet your specific goals
                            and requirements.

                        </li>
                        <li className='mt-2 text-gray-600'>
                            <span className='font-bold text-black'>State-of-the-Art Infrastructure:</span> Our cutting-edge facilities and advanced
                            technology empower us to deliver high-precision results and stay ahead in
                            innovation.
                        </li>
                        <li className='mt-2 text-gray-600'>
                            <span className='font-bold text-black'>Collaborative Partnerships:: </span> At SRRD Laboratories, quality is non-negotiable.
                            From meticulous data analysis to stringent quality assurance, we adhere to the
                            highest industry standards.
                        </li>
                        <li className='mt-2 text-gray-600'>
                            <span className='font-bold text-black'>Commitment to Excellence: </span> Your success is our success. We build lasting
                            partnerships with our clients, based on transparency, trust, and shared
                            ambitions.

                        </li>
                        <li className='mt-2 text-gray-600'>
                            <span className='font-bold text-black'>Commitment to Excellence: </span> At SRRD Laboratories, quality is non-negotiable.
                            From meticulous data analysis to stringent quality assurance, we adhere to the
                            highest industry standards.
                        </li>
                    </ul> */}
            </div>
        </section >
    );
}
