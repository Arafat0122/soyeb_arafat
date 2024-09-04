import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_dss9q7j', 'template_xo8j7yf', form.current, 'xxTFFINVo-zKE7P8x')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again later.');
            });
    };

    return (
        <section className="bg-gray-100 text-gray-800">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-monster text-center mb-5">Let<span className='text-red-500'>{`'`}</span>s talk!</h2>
            <div className="grid max-w-screen-xl grid-cols-1 gap-20 px-8 pb-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-gray-800 items-center" >
                <div className="flex flex-col justify-between">
                    <img src="https://i.ibb.co/qd3fDB1/talk.png" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form ref={form} onSubmit={sendEmail} noValidate="" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input id="name" type="text" name="user_name" placeholder="" className="w-full p-3 rounded bg-white border-2 border-gray-400" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input id="email" type="email" name="user_email" className="w-full p-3 rounded bg-white border-2 border-gray-400" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea id="message" name="message" rows="3" className="w-full p-3 rounded bg-white border-2 border-gray-400" required></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 text-gray-50">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
