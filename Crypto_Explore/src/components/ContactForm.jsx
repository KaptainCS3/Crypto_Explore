import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const ContactForm = () => {
  const [contactUs, setContactUs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setContactUs({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactUs((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <>
      <section className="bg-white mb-12 pt-16 pb-64 h-full sm:w-full w-max[540px] mx-auto flex flex-col justify-between font-['Open Sans'] md:w-full mx-auto">
        <div className="w-[85%] mx-auto sm:w-[86%] md:w-[86%]">
          <div className="flex justify-between items-center sm:flex-col sm:items-start sm:mb-6 md:flex-col md:items-start md:mb-6">
            <Fade bottom>
              <div>
                <h2 className="font-size mb-2 font-bold">Contact Us</h2>
                <p className="text-[#16D5FF] text-xl mb-6">
                  If You Have Any Query, Please Contact Us
                </p>
              </div>
              <Link
                className="px-6 py-4 bg-[#16D5FF] font-[500] text-white text-md rounded"
                to="/contact"
              >
                Say Hello
              </Link>
            </Fade>
          </div>
          <div className="flex justify-between sm:flex-col">
            <Fade bottom>
              <div className="w-[40%] sm:w-full">
                <div className="border-b py-4">
                  <p className="py-2 text-[#999] text-[1.1rem]">Our office:</p>
                  <span className="text-2xl font-medium">
                    123 Street, New York, USA
                  </span>
                </div>
                <div className="border-b py-4">
                  <p className="py-2 text-[#999] text-[1.1rem]">Call us:</p>
                  <span className="text-2xl font-medium">+012 345 6789</span>
                </div>
                <div className="border-b py-4">
                  <p className="py-2 text-[#999] text-[1.1rem]">Mail us:</p>
                  <span className="text-2xl font-medium">info@example.com</span>
                </div>
                <div>
                  <p className="py-2 text-[#999] text-[1.1rem]">Follow us:</p>
                  <div className="flex justify-between w-[12em] md:w-[12em]">
                    <div className="w-10 h-10 rounded-full border flex justify-center items-center text-[#16D5FF] border-[#16D5FF] cursor-pointer hover:bg-[#16D5FF] hover:text-white">
                      <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="w-10 h-10 rounded-full border flex justify-center items-center text-[#16D5FF] border-[#16D5FF] cursor-pointer hover:bg-[#16D5FF] hover:text-white">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="w-10 h-10 rounded-full border flex justify-center items-center text-[#16D5FF] border-[#16D5FF] cursor-pointer hover:bg-[#16D5FF] hover:text-white">
                      <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="w-10 h-10 rounded-full border flex justify-center items-center text-[#16D5FF] border-[#16D5FF] cursor-pointer hover:bg-[#16D5FF] hover:text-white">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <form action="" className="w-[55%] sm:w-full">
                <p className="my-8 text-[#999] text-[1.03rem]">
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax &amp; PHP in a few minutes.
                  Just copy and paste the files, add a little code and you're
                  done.
                  <span className="text-[#16D5FF] pl-1">Download Now.</span>
                </p>
                <div className="flex justify-between items-center w-full mb-5 sm:flex-col">
                  <div className="w-full form__input mr-5 focus:border sm:mr-0 sm:mb-5">
                    <input
                      type="text"
                      className="w-full bg-transparent outline-none border p-4 rounded-sm form text-[#999]"
                      required
                      name="name"
                      value={contactUs.name}
                      onChange={handleChange}
                    />
                    <span>Your Name</span>
                  </div>
                  <div className="w-full form__input focus:border-[#16D5FF]">
                    <input
                      type="email"
                      className="w-full bg-transparent outline-none border p-4 rounded-sm form text-[#999]"
                      required
                      name="email"
                      value={contactUs.email}
                      onChange={handleChange}
                    />
                    <span>Your Email</span>
                  </div>
                </div>
                <div className="mb-5 form__input">
                  <input
                    type="text"
                    className="w-full rounded-sm bg-transparent outline-none border p-4 form text-[#999]"
                    required
                    name="subject"
                    value={contactUs.subject}
                    onChange={handleChange}
                  />
                  <span>Subject</span>
                </div>
                <div className="w-full mt-5 form__input">
                  <textarea
                    id=""
                    className="border p-4 rounded-sm w-full outline-none form text-[#999]"
                    required
                    name="message"
                    value={contactUs.message}
                    onChange={handleChange}
                  ></textarea>
                  <span>Message</span>
                </div>
                <div>
                  <button
                    onClick={handleSubmit}
                    className="mt-4 px-6 py-4 bg-[#16D5FF] font-[500] text-white text-md rounded"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
