import React, { useState } from 'react';

const products = {
    'N-Nitroso Compounds': [
        { name: 'N-Nitrosodimethylamine', specs: 'C2H6N2O, >98% purity' },
        { name: 'N-Nitrosodiethylamine', specs: 'C4H10N2O, >99% purity' },
        { name: 'N-Nitrosomorpholine', specs: 'C4H8N2O2, >97% purity' },
    ],
    'Radiolabeled Compounds': [
        { name: '14C-Labeled Glucose', specs: 'Specific activity: 50-60 mCi/mmol' },
        { name: '3H-Labeled Thymidine', specs: 'Specific activity: 20-30 Ci/mmol' },
        { name: '13C-Labeled Amino Acids', specs: '99% isotopic purity' },
    ],
    'Reference Standards': [
        { name: 'USP Reference Standard A', specs: 'Pharmaceutical grade, certified' },
        { name: 'EP Reference Standard B', specs: 'Analytical grade, certified' },
        { name: 'JP Reference Standard C', specs: 'Research grade, certified' },
    ],
};

export default function Products() {
    const [activeCategory, setActiveCategory] = useState('N-Nitroso Compounds');

    return (
        <section id="products" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Products</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Specialized compounds for research and development
                    </p>
                </div>

                <div className="mt-12">
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {Object.keys(products).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeCategory === category
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products[activeCategory].map((product, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-300"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600">{product.specs}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}