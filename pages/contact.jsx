import React from "react";

const contact = () => {
  return (
    <div class="contact-1 py-4 md:py-12">
      <div class="container mx-auto px-4">
        <div class="xl:flex -mx-4">
          <div class="xl:w-10/12 xl:mx-auto px-4">
            <div class="xl:w-3/4 mb-4">
              <h1 class="text-3xl text-medium mb-4">
                We would love to hear from you
              </h1>
              <p class="text-xl mb-2">
                Please submit your information and we will get back to you.
              </p>
              <p>
                Call us at&nbsp;
                <a
                  href="tel:+917248073188"
                  class="text-indigo-600 border-b border-transparent hover:border-indigo-600 transition-colors duration-300"
                >
                  +91 7248073188
                </a>
              </p>
            </div>

            <div class="md:flex md:-mx-4 mt-4 md:mt-10">
              <div class="md:w-2/3 md:px-4">
                <div class="contact-form">
                  <div class="sm:flex sm:flex-wrap -mx-3">
                    <div class="sm:w-1/2 px-3 mb-6">
                      <input
                        type="text"
                        placeholder="Full Name"
                        class="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                      />
                    </div>
                    <div class="sm:w-1/2 px-3 mb-6">
                      <input
                        type="text"
                        placeholder="Company Name"
                        class="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                      />
                    </div>
                    <div class="sm:w-1/2 px-3 mb-6">
                      <input
                        type="text"
                        placeholder="E-mail address"
                        class="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                      />
                    </div>
                    <div class="sm:w-1/2 px-3 mb-6">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        class="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                      />
                    </div>
                    <div class="sm:w-full px-3">
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="4"
                        placeholder="Your message here"
                        class="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                      ></textarea>
                    </div>
                  </div>
                  <div class="text-right mt-4 md:mt-12">
                    <button class="border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                      Send a Message
                      <i class="fas fa-chevron-right ml-2 text-sm"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="md:w-1/3 md:px-4 mt-10 md:mt-0">
                <div class="bg-indigo-100 rounded py-4 px-6">
                  <h5 class="text-xl font-medium mb-3">Help</h5>
                  <p class="text-gray-700 mb-4">
                    Need help or have any query? Don't hesitate, you can
                    directly shoot us an&nbsp;
                    <a
                      href="mailto:"
                      class="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                    >
                      email
                    </a>
                    or call us at&nbsp;
                    <a
                      href="tel:"
                      class="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                    >
                      +91 7248073188
                    </a>
                  </p>
                  <p class="text-gray-700">
                    You can move to&nbsp;
                    <a
                      href="#"
                      class="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                    >
                      FAQs&nbsp;
                    </a>
                    or&nbsp;
                    <a
                      href="#"
                      class="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                    >
                      Support&nbsp;
                    </a>
                    page to get more information about our site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
