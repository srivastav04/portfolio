import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import ThreeDScene from "@/components/3d/ThreeDModel";

const ContactSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
      console.log("EmailJS result:", result.text);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS error:", error.text || error);
      alert("Failed to send message. Please try again later.");
    }

    // Reset form
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="section bg-portfolio-dark relative py-20">
      <div className="section-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="smooth-scroll-section" ref={ref}>
          <h2 className="section-title gradient-text">Contact Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div
              className={`transition-all duration-700 delay-100 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-lg mb-8">
                I'm currently available for freelance work and full-time
                positions. If you have a project that needs some creative touch,
                feel free to reach out!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-portfolio-primary/20 flex items-center justify-center mr-4">
                    <svg
                      className="h-5 w-5 text-portfolio-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <a
                      href="mailto:john.doe@example.com"
                      className="text-portfolio-primary hover:underline"
                    >
                      srivastavkancharala@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-portfolio-primary/20 flex items-center justify-center mr-4">
                    <svg
                      className="h-5 w-5 text-portfolio-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Phone</h4>
                    <a
                      href="tel:+11234567890"
                      className="text-portfolio-primary hover:underline"
                    >
                      +91 8074125914
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-portfolio-primary/20 flex items-center justify-center mr-4">
                    <svg
                      className="h-5 w-5 text-portfolio-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-gray-300">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/srivastav04"
                  className="w-10 h-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center hover:bg-portfolio-primary/40 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.162 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/sri-vastav-455b38252/"
                  className="w-10 h-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center hover:bg-portfolio-primary/40 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/srivastav5119/"
                  className="w-10 h-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center hover:bg-portfolio-primary/40 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-300 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-portfolio-dark/50 backdrop-blur-md border border-portfolio-primary/20 rounded-lg p-8 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <svg
                        className="mx-auto h-16 w-16 text-green-500 mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                      <p className="text-gray-300">
                        Your message has been sent successfully.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      {errorMsg && (
                        <p className="text-red-500 mb-4">{errorMsg}</p>
                      )}
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-portfolio-primary/20 focus:border-portfolio-primary focus:outline-none"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-portfolio-primary/20 focus:border-portfolio-primary focus:outline-none"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium mb-1"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-portfolio-primary/20 focus:border-portfolio-primary focus:outline-none"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-1"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-portfolio-primary/20 focus:border-portfolio-primary focus:outline-none resize-none"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full font-bold py-3 px-6 rounded-lg transition-colors duration-300 bg-portfolio-primary hover:bg-portfolio-secondary text-white ${
                          isLoading ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                      >
                        {isLoading ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  )}
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-portfolio-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 -mb-16 -ml-16 bg-portfolio-primary/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Srivastav Kancharla. All Rights
            Reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default ContactSection;
