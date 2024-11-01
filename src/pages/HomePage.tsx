import React from "react";
import Layout from "../components/generics/Layout";
import Hero from "../components/generics/Hero";
import Features from "../components/generics/Feature";
import PromotionalBanner from "../components/generics/Banner";
import Testimonials from "../components/generics/Testimonial";

const HomePage: React.FC = () => (
  <Layout>
    <Hero />
    <Features />
    <PromotionalBanner />
    <Testimonials />
  </Layout>
);

export default HomePage;
