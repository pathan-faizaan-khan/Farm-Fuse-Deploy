"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { IoExit } from "react-icons/io5";
import Link from "next/link";


const faqData = [
  {
    question: "How do I create an account on Farm Fuse?",
    answer: "To create an account, click on the 'Sign Up' button on the homepage. Fill in the required information, such as your name, email address, and password. You will receive a confirmation email to verify your account."
  },
  {
    question: "How can I find local farmers on Farm Fuse?",
    answer: "Use the map feature on the platform to locate farmers in your area. You can view their profiles, available products, and contact information."
  },
  {
    question: "How does the chat functionality work?",
    answer: "Once you have located a farmer, you can use the chat feature on their profile to ask questions about their products, availability, and any other inquiries you may have."
  },
  {
    question: "What is the inbuilt chatbot?",
    answer: "The inbuilt chatbot is an intelligent assistant available on Farm Fuse to help answer common questions, guide you through the platform, and provide information about products and services."
  },
  {
    question: "How do I place an order?",
    answer: "To place an order, browse through the available products listed by farmers, add the desired items to your cart, and proceed to checkout. Follow the prompts to complete your purchase."
  },
  {
    question: "What payment methods are accepted?",
    answer: "Farm Fuse accepts various payment methods, including credit/debit cards, online banking, and digital wallets. Specific payment options may vary based on your location and the farmer's preferences."
  },
  {
    question: "Can I visit the farms in person?",
    answer: "Yes, many farmers on the platform welcome visits. You can use the map to find their location and plan your visit. It is recommended to contact the farmer through the chat feature to arrange a visit."
  },
  {
    question: "How does Farm Fuse ensure product quality?",
    answer: "Farm Fuse encourages farmers to maintain high standards of quality and freshness. We also provide a rating and review system where consumers can share their experiences and feedback about the products they receive."
  },
  {
    question: "What should I do if I have an issue with my order?",
    answer: "If you encounter any issues with your order, please contact the farmer directly through the chat feature. If the issue remains unresolved, you can reach out to Farm Fuse customer support for further assistance."
  },
  {
    question: "How can I provide feedback about a farmer or product?",
    answer: "After receiving your order, you can leave a review on the farmer's profile. Your feedback helps other consumers make informed decisions and encourages farmers to maintain high-quality standards."
  },
  {
    question: "Is there a mobile app for Farm Fuse?",
    answer: "Currently, Farm Fuse operates through our website. A mobile app is in development and will be available soon to provide an enhanced user experience."
  },
  {
    question: "How can I stay updated with Farm Fuse news and updates?",
    answer: "You can subscribe to our newsletter by entering your email address at the bottom of the homepage. Follow us on social media for the latest news, updates, and special promotions."
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="faq flex items-center">
        <div className="Lside fixed">
        <h1 className="text-6xl font-bold mx-10 mt-20">
        Frequently Asked <br />
        Questions
        <img src="https://img.pikbest.com/png-images/20220228/cartoon-farmer-characters-agricultural-work-and-harvest-local-products-vector-illustration_6281130.png!sw800" alt="" />
       </h1>
        </div>
      <div className="main w-3/4 mt-20 ml-[50vw]">
      <Link href={"/"}>
        <div className="div flex justify-end mr-12  text-7xl hover:scale-110 transition-all"><IoExit />
        </div>
        </Link>
        <div className="search-bar flex items-center mb-4">
          <CiSearch size={24} />
          <h2 className="opacity-50 ml-2">What are you looking for?</h2>
        </div>
        <hr />
        {faqData.map((item, index) => (
          <div key={index} className="faq-item my-4">
            <div
              className="faq-question flex items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-2xl opacity-50 mr-2">
                {activeIndex === index ? <FaArrowUp /> : <FaArrowDown />}
              </span>
              <h2 className="font-bold text-lg">{item.question}</h2>
            </div>
            {activeIndex === index && (
              <div className="faq-answer mt-2">
                <p>{item.answer}</p>
              </div>
            )}
            <hr className="mt-4" />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default FAQ;
