"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, Sparkles, Crown, MessageCircle, Globe, Mail } from 'lucide-react';

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Azure Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Discover unparalleled comfort and elegance at Grand Azure Hotel. Where every moment becomes a cherished memory."
          tag="5-Star Excellence"
          tagIcon={Award}
          buttons={[
            {
              text: "Book Your Stay",
              href: "https://booking.example.com"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant lobby with comfortable sofas, large windows, and natural light enhancing the indoor ambiance."
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Indulge in our exceptional facilities designed to exceed your expectations"
          tag="Premium Services"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your mind and body at our award-winning spa featuring therapeutic treatments and state-of-the-art wellness facilities",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Serene indoor pool area with modern design and spiral staircase."
            },
            {
              title: "Fitness & Recreation",
              description: "Stay active with our fully equipped fitness center, Olympic-size pool, and personalized training programs available 24/7",
              imageSrc: "https://images.pexels.com/photos/4498574/pexels-photo-4498574.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Faceless slim female athlete in sportswear standing with blue fitness mat and water bottle while preparing for indoors workout"
            },
            {
              title: "Fine Dining Experience",
              description: "Savor culinary excellence at our signature restaurants featuring world-renowned chefs and locally sourced ingredients",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant rooftop restaurant with poolside dining at sunset. Perfect for a luxurious dining experience."
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <PricingCardThree
          title="Exceptional Accommodations"
          description="Choose from our carefully curated selection of rooms and suites"
          tag="Room Packages"
          plans={[
            {
              id: "deluxe",
              price: "$299/night",
              name: "Deluxe Room",
              buttons: [
                {
                  text: "Book Now",
                  href: "https://booking.example.com"
                },
                {
                  text: "View Details",
                  href: "rooms"
                }
              ],
              features: [
                "King size bed with premium linens",
                "City or garden view",
                "Marble bathroom with rainfall shower",
                "24-hour room service",
                "Complimentary Wi-Fi"
              ]
            },
            {
              id: "suite",
              badge: "Most Popular",
              badgeIcon: Crown,
              price: "$599/night",
              name: "Executive Suite",
              buttons: [
                {
                  text: "Book Now",
                  href: "https://booking.example.com"
                },
                {
                  text: "View Details",
                  href: "rooms"
                }
              ],
              features: [
                "Separate living area and bedroom",
                "Panoramic city or ocean views",
                "Executive lounge access",
                "Butler service available",
                "Premium bathroom amenities",
                "Complimentary breakfast"
              ]
            },
            {
              id: "presidential",
              price: "$1,299/night",
              name: "Presidential Suite",
              buttons: [
                {
                  text: "Book Now",
                  href: "https://booking.example.com"
                },
                {
                  text: "Contact Concierge",
                  href: "contact"
                }
              ],
              features: [
                "Two-bedroom luxury suite",
                "Private terrace with stunning views",
                "Dedicated personal concierge",
                "Private dining room",
                "Premium spa treatments included",
                "Airport limousine service"
              ]
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Read authentic reviews from our valued guests who experienced our hospitality"
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Business Executive",
              company: "Fortune 500 Company",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Confident businesswoman using her tablet and phone, smiling outdoors in sunlight."
            },
            {
              id: "2",
              name: "Robert Chen",
              role: "Travel Blogger",
              company: "Luxury Travel Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6517333/pexels-photo-6517333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A businessman in a suit engaged in a phone call while working at his desk."
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Event Planner",
              company: "Elite Events Co.",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8424477/pexels-photo-8424477.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Two professional women engaged in a business meeting, taking notes and discussing work."
            },
            {
              id: "4",
              name: "David Thompson",
              role: "CEO",
              company: "Tech Innovation Inc.",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3823491/pexels-photo-3823491.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Senior man in formal attire using a laptop and holding money, symbolizing financial success."
            }
          ]}
        />
      </div>

      <div id="partners" data-section="partners">
        <SocialProofTwo
          title="Trusted Hospitality Partners"
          description="Part of the world's most respected hotel networks and partnerships"
          tag="Global Network"
          tagIcon={Globe}
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7502347/pexels-photo-7502347.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2105326/pexels-photo-2105326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know for your perfect stay"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service for our guests. Please contact our concierge at least 24 hours in advance to arrange your transportation."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We have three on-site restaurants: Azure Fine Dining (formal), Terrace Café (casual), and the Rooftop Bar. Room service is available 24/7 for your convenience."
            },
            {
              id: "4",
              title: "Is parking available?",
              content: "Yes, we offer both self-parking and valet parking services. Valet parking is complimentary for Executive Suite and Presidential Suite guests."
            },
            {
              id: "5",
              title: "What is your cancellation policy?",
              content: "Cancellations must be made at least 24 hours before your arrival date to avoid charges. Different rates may have varying cancellation policies."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Subscribe for Exclusive Offers"
          description="Be the first to know about special promotions, seasonal packages, and exclusive member benefits at Grand Azure Hotel."
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive promotional emails. You can unsubscribe at any time."
          imageSrc="https://images.pexels.com/photos/8425035/pexels-photo-8425035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="A professional chauffeur assists a businesswoman exiting a luxury car in front of a modern building."
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Events", href: "events" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Spa & Wellness", href: "spa" },
                { label: "Business Center", href: "business" },
                { label: "Transportation", href: "transport" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Booking Help", href: "help" },
                { label: "Reviews", href: "reviews" }
              ]
            }
          ]}
          copyrightText="© 2025 Grand Azure Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}