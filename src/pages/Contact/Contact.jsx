import { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendWhatsAppMessage = (e) => {
        e.preventDefault();

        const phoneNumber = '+8801780515102';
        const message = encodeURIComponent(`
            Name: ${formData.user_name}
            Email: ${formData.user_email}
            Message: ${formData.message}
        `);

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        window.open(whatsappURL, '_blank');

        Swal.fire({
            title: 'Message Sent!',
            text: 'You will be redirected to WhatsApp.',
            icon: 'success',
            confirmButtonText: 'OK'
        });

        setFormData({ user_name: '', user_email: '', message: '' });
    };

    return (
        <section className="bg-white text-gray-800 p-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-monster text-center mb-5">
                Let<span className='text-red-500'>{`'`}</span>s talk!
            </h2>
            <div className="grid max-w-screen-xl grid-cols-1 gap-20 px-8 pb-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-white text-gray-800 items-center">
                <div className="flex flex-col justify-between">
                    <img src="https://www.1datagroup.com/wp-content/uploads/2020/12/group-working-1-1.gif" alt="" className="p-6" />
                </div>
                <form onSubmit={sendWhatsAppMessage} noValidate="" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input
                            id="name"
                            type="text"
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                            placeholder=""
                            className="w-full p-3 rounded bg-white border-2 border-gray-400"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-white border-2 border-gray-400"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="3"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 rounded bg-white border-2 border-gray-400"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-green-600 text-gray-50 flex items-center justify-center gap-2">
                        Send Message
                        <IoSend />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;