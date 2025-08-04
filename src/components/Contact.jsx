import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from 'emailjs-com';
import Earth from '@/components/ui/globe';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setMessage('Message sent successfully! I\'ll get back to you soon.');
      formRef.current.reset();
      // Hide message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    })
    .catch((error) => {
      setMessage('Failed to send message. Please try again or contact me directly via email.');
      console.error('EmailJS Error:', error);
      // Hide message after 3 seconds
      setTimeout(() => {
        setMessage('');
      }, 3000);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className='lg:my-16 lg:px-28 my-8 px-5'
      id='contact'
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='text-2xl lg:text-4xl text-center'
      >
        <span className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}> Contact</span> <span className='font-extrabold'>Me</span>
      </motion.h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row'>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-[40%]'
        >
          <form ref={formRef} onSubmit={sendEmail} className='w-full space-y-3 lg:space-y-5'>
            <input name="from_name" className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' type="text" placeholder='Your name' required />
            <input name="from_email" className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' type="email" placeholder='Email' required />
            <input name="website" className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' type="text" placeholder='Your website (If exists)' />
            <textarea name="message" className='resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A]  rounded text-sm w-full' placeholder='How can I help?*' required></textarea>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'
            >
              <motion.button
                whileHover={{ scale: loading ? 1 : 1.05 }}
                type='submit'
                disabled={loading}
                className='bg-black justify-center w-fit lg:w-auto lg:flex-1 hover:shadow-lg text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {loading ? 'Sending...' : 'Get In Touch'}
              </motion.button>

              <div className='flex items-center gap-x-2 lg:gap-x-5'>
                <motion.a
                  href="mailto:mazimaazin@gmail.com"
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <BiLogoGmail className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mohammed-maazin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IoLogoLinkedin className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/MhmdMaazin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <BsGithub className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
              </div>
            </motion.div>

            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center text-sm p-3 rounded ${
                  message.includes('successfully') 
                    ? 'bg-green-100 text-green-800 border border-green-300' 
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}
              >
                {message}
              </motion.div>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2 relative'
        >
          {/* Globe background element */}
          <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
            <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
              <Earth
                scale={1}
                baseColor={[0.2, 0.2, 0.2]}
                markerColor={[0.8, 0.8, 0.8]}
                glowColor={[0.3, 0.3, 0.3]}
              />
            </div>
          </div>
          
          <div className='relative z-10'>
            <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
              <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>talk</span> for</h2>
              <h2>Something special</h2>
            </div>

            <p className='text-[#2a2a2b] text-sm/6 lg:text-base mt-3 lg:mt-6'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>

            <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
              <motion.a
                whileHover={{ x: 5 }}
                className='flex items-center gap-2 group'
                href="mailto:Youremail@gmail.com"
              >
                <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-1'>
                  <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
                </span>
                mazimaazin@gmail.com
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                className='flex items-center gap-2 group'
                href="tele:1234567890"
              >
                <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]'>
                  <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
                </span>
                +94765674926
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
