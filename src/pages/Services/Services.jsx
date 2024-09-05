import { useEffect, useState } from 'react';
import Select from 'react-select';
import { FaCalendarAlt, FaDollarSign, FaCheckCircle } from 'react-icons/fa';

const Services = () => {
    const [services, setServices] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Educational Platforms');

    useEffect(() => {
        fetch('/services.json')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    const categories = [
        { value: 'Educational Platforms', label: 'Educational Platforms' },
        { value: 'Platform', label: 'Platform' },
        { value: 'Portfolio', label: 'Portfolio' },
        { value: 'Doctors', label: 'Doctors' },
        { value: 'Newspaper', label: 'Newspaper' },
        { value: 'Blogging', label: 'Blogging' },
        { value: 'E-commerce', label: 'E-commerce' },
        { value: 'Consulting', label: 'Consulting' },
        { value: 'Fitness', label: 'Fitness' },
        { value: 'Wedding', label: 'Wedding' },
        { value: 'Travel', label: 'Travel' }
    ];

    const handleCategoryChange = (selectedOption) => {
        setSelectedCategory(selectedOption.value);
    };

    const filteredServices = services.filter(service => service.name === selectedCategory);

    // Separate services by packageType
    const basicServices = filteredServices.filter(service => service.packageType === 'basic');
    const standardServices = filteredServices.filter(service => service.packageType === 'standard');
    const premiumServices = filteredServices.filter(service => service.packageType === 'premium');

    // Render a card for each service
    const renderCard = (service) => {
        const baseClasses = 'p-6 rounded-lg shadow-lg flex flex-col items-center w-full transition-transform transform hover:scale-105';
        const packageClasses = service.packageType === 'premium'
            ? 'bg-royal-golden border-2 border-yellow-600'
            : service.packageType === 'basic'
                ? 'bg-light-blue border-2 border-blue-600'
                : 'bg-light-green border-2 border-green-600';

        return (
            <div key={service.packageName} className={`${baseClasses} ${packageClasses}`}>
                <div className="flex items-center mb-4">
                    <FaCheckCircle className="text-2xl mr-2 text-gray-700" />
                    <h2 className="text-lg font-semibold uppercase">{service.packageType}</h2>
                </div>
                <h3 className="text-md mb-2 font-medium">{service.packageName}</h3>
                <p className="flex items-center mb-2 text-sm">
                    <FaCalendarAlt className="mr-2" />
                    <strong>Time to Complete:</strong> {service.timeToComplete}
                </p>
                <p className="flex items-center mb-2 text-sm">
                    <FaDollarSign className="mr-2" />
                    <strong>Price Range:</strong> {service.priceRange}
                </p>
                <ul className="list-disc ml-5 text-sm">
                    {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="p-8">
            <div className="flex flex-col justify-between items-center mb-8">
                <h1 className="mb-4 text-2xl md:text-3xl lg:text-5xl font-bold font-monster">Services</h1>
                <Select
                    options={categories}
                    onChange={handleCategoryChange}
                    defaultValue={categories.find(cat => cat.value === selectedCategory)}
                    className="w-full md:w-64"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Basic Card */}
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {basicServices.map(service => (
                        <div className="w-full md:w-80 flex justify-center items-center" key={service.packageName}>
                            {renderCard(service)}
                        </div>
                    ))}
                </div>
                {/* Premium Card */}
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {premiumServices.map(service => (
                        <div className="w-full md:w-80 flex justify-center items-center" key={service.packageName}>
                            {renderCard(service)}
                        </div>
                    ))}
                </div>
                {/* Standard Card */}
                <div className="flex flex-wrap justify-center items-center gap-4">
                    {standardServices.map(service => (
                        <div className="w-full md:w-80 flex justify-center items-center" key={service.packageName}>
                            {renderCard(service)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;