import React from "react";
import mainphoto from "../images/mainphoto.jpeg";
import logo from "../images/logo.png";
import chickenShawarma from "../images/Chicken-Shawarma.jpg";
import sandwich from "../images/Grilled-sandwich-cheese.jpg";
import mocktail from "../images/mocktail.jpg";
const Header = () => (
  <header className="bg-[#343a40] py-6">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Shawarma Food Truck" className="h-8 mr-4" />
        <h1 className="text-white font-bold text-2xl">The Shawarma hub</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-[#6c757d]">
              Home
            </a>
          </li>
          <li>
            <a href="/menu" className="text-white hover:text-[#6c757d]">
              Menu
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-[#6c757d]">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-[#6c757d]">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

const AboutSection = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={mainphoto}
            alt="Shawarma Food Truck"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">
            About Our Shawarma Food Truck
          </h2>
          <p className="text-[#6c757d] mb-4">
            At Shawarma Food Truck, we're passionate about bringing the
            authentic flavors of the Middle East to the streets. Our
            family-owned business has been serving up delicious shawarma for
            over a decade, and we're excited to share our love of this
            traditional dish with you.
          </p>
          <p className="text-[#6c757d] mb-4">
            Our food truck is equipped with the latest technology and equipment,
            allowing us to prepare fresh, high-quality shawarma on the go. We
            use only the finest ingredients, including premium cuts of meat,
            fresh vegetables, and our signature blend of spices, to create a
            truly unforgettable dining experience.
          </p>
          <p className="text-[#6c757d] mb-4">
            Whether you're looking for a quick lunch or a satisfying dinner, our
            Shawarma Food Truck is the perfect destination. Come and taste the
            difference that quality and passion can make!
          </p>
        </div>
      </div>
    </div>
  </section>
);

const StorySection = () => (
  <section className="bg-[#343a40] py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
      <p className="text-[#adb5bd] mb-4">
        Shawarma Food Truck was founded by a family with a deep passion for
        Middle Eastern cuisine. Our grandparents immigrated to the United States
        in the 1970s, bringing with them the recipes and techniques that have
        been passed down through generations.
      </p>
      <p className="text-[#adb5bd] mb-4">
        After years of working in the restaurant industry, we decided to take
        our family's legacy to the streets, serving up authentic shawarma to the
        local community. Our food truck has become a beloved fixture in the
        neighborhood, known for its delicious food, friendly service, and
        commitment to quality.
      </p>
      <p className="text-[#adb5bd] mb-4">
        We take great pride in our work and are dedicated to providing our
        customers with an unforgettable dining experience. From the moment you
        step up to our window, you'll be transported to the bustling streets of
        the Middle East, where the aroma of freshly grilled meat and sizzling
        vegetables fills the air.
      </p>
    </div>
  </section>
);

const MenuSection = () => (
  <section className="py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img
            src={chickenShawarma}
            alt="Chicken Shawarma"
            className="rounded-lg mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Chicken Shawarma</h3>
          <p className="text-[#6c757d] mb-4">
            Tender slices of marinated chicken, served with fresh vegetables and
            our signature garlic sauce.
          </p>
          {/* <p className="text-[#6c757d] font-bold">$9.99</p> */}
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img src={sandwich} alt="Beef Shawarma" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2">Vegitable sandwich</h3>
          <p className="text-[#6c757d] mb-4">
            Slow-roasted bread, seasoned to perfection and served with fresh
            vegetables and tasty sauce.
          </p>
          {/* <p className="text-[#6c757d] font-bold">$10.99</p> */}
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <img src={mocktail} alt="Falafel Wrap" className="rounded-lg mb-4" />
          <h3 className="text-xl font-bold mb-2">Mocktail</h3>
          <p className="text-[#6c757d] mb-4">
            Crispy falafel balls, fresh vegetables, and our signature tahini
            sauce, all wrapped in a warm pita.
          </p>
          {/* <p className="text-[#6c757d] font-bold">$8.99</p> */}
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="bg-[#f8f9fa] py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <form className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-[#6c757d] font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-[#ced4da] rounded-lg py-2 px-4 w-full focus:outline-none focus:ring focus:ring-[#007bff]"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-[#6c757d] font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-[#ced4da] rounded-lg py-2 px-4 w-full focus:outline-none focus:ring focus:ring-[#007bff]"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-[#6c757d] font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="border border-[#ced4da] rounded-lg py-2 px-4 w-full h-32 focus:outline-none focus:ring focus:ring-[#007bff]"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#007bff] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#0056b3] focus:outline-none focus:ring focus:ring-[#0056b3]"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
);
const Footer = () => (
  <div>
    <footer className="bg-[#343a40] py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-[#adb5bd]">
          &copy; 2023 Shawarma Food Truck. All rights reserved.
        </p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/privacy-policy"
                className="text-[#adb5bd] hover:text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-of-service"
                className="text-[#adb5bd] hover:text-white"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/contact" className="text-[#adb5bd] hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
);

const About = () => (
  <div className="bg-[#f8f9fa] min-h-screen">
    <Header />
    <main>
      <AboutSection />
      <StorySection />
      <MenuSection />
      <ContactSection />
      <Footer />
    </main>
  </div>
);

export default About;
