"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import { AnimatedRetroText } from '@/components/text/AnimatedRetroText';
import { SimpleHero } from '@/components/sections/layouts/hero/SimpleHero';
import { GalleryBento } from '@/components/bento/galleryBento/GalleryBento';
import { PricingBento } from '@/components/bento/PricingBento';
import { BentoFAQ } from '@/components/sections/layouts/faq/BentoFAQ';
import { SimpleFloatingNavbar } from '@/components/navigation/SimpleFloatingNavbar';
import { useState } from 'react';

const sectionsData = {
  hero: {
    headline: "Welcome to My Portfolio",
    subcopy: "Capturing moments with a playful flair.",
    primaryCTA: "Get in Touch",
    supportingImage: "/images/forest.jpg",
  },
  about: {
    bio: "I am a passionate photographer focused on creating vivid storytelling through my lens.",
    photo: "/images/logo.svg",
  },
  portfolio: {
    images: [{ title: "Image 1", image: "/images/placeholder1.avif" }, { title: "Image 2", image: "/images/placeholder2.avif" }, { title: "Image 3", image: "/images/placeholder3.avif" }, { title: "Image 4", image: "/images/placeholder4.avif" }],
  },
  pricing: {
    items: [
      { badge: "Basic", price: "$100", features: ["1 Hour Session", "5 Edited Photos"] },
      { badge: "Standard", price: "$200", features: ["2 Hour Session", "15 Edited Photos", "Online Gallery"] },
      { badge: "Premium", price: "$400", features: ["4 Hour Session", "35 Edited Photos", "Print Credits"] },
    ],
  },
  faq: {
    items: [
      { title: "What types of photography do you offer?", content: "I specialize in portraits and lifestyle photography." },
      { title: "How long will it take to receive the photos?", content: "Typically 2-4 weeks after the shoot."},
      { title: "Do you travel for shoots?", content: "Yes, I am available for travel opportunities!" },
      { title: "Can I request edits to the photos?", content: "Absolutely, I offer basic edits included in my packages." },
    ],
  },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-primary text-white py-2 rounded">Send</button>
    </form>
  );
};

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <SimpleFloatingNavbar 
        navItems={sectionsData.nav}
        logoSrc="/images/logo.svg"
        logoWidth={50}
        logoHeight={50}
        buttonText="Get in Touch"
        onButtonClick={() => {}} 
      />
      <section id="hero" className="bg-soft-gradient p-8">
        <SimpleHero 
          title={sectionsData.hero.headline}
          description={sectionsData.hero.subcopy}
          primaryButtonText={sectionsData.hero.primaryCTA}
        />
      </section>
      <section id="about" className="bg-white p-8">
        <div>
          <img src={sectionsData.about.photo} alt="Photographer's portrait" className="rounded-full mb-4" />
          <p>{sectionsData.about.bio}</p>
        </div>
      </section>
      <section id="portfolio" className="bg-white p-8">
        <GalleryBento 
          items={sectionsData.portfolio.images}
          className="gallery-class"
        />
      </section>
      <section id="pricing" className="bg-pattern p-8">
        <PricingBento 
          items={sectionsData.pricing.items}
        />
      </section>
      <section id="faq" className="bg-light-gray p-8">
        <BentoFAQ items={sectionsData.faq.items} />
      </section>
      <section id="contact" className="bg-soft-gradient p-8">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <ContactForm />
      </section>
    </SiteThemeProvider>
  );
}