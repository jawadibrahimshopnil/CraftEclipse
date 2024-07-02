import Lottie from "lottie-react";
import ctaLottie from '../assets/ctaLottie.json';

const ContactForm = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-base-100 ">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Lets talk!</h2>
                    <div className="">Lets bring your imagination to life!</div>
                </div>
                <Lottie animationData={ctaLottie} loop={true} />
            </div>
            <form noValidate="" className="space-y-6">
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded bg-gray-100 border border-black" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input id="email" type="email" className="w-full p-3 rounded bg-gray-100 border border-black" />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Message</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded bg-gray-100 border border-black"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-orange-500 text-white">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;