import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import {
  ArrowUpRight,
  CheckCircle2,
  Shield,
  Users,
  Zap,
  BrainCircuit,
  Cloud,
  Code,
  ShoppingBag,
  Calendar,
  Send,
} from "lucide-react";
import { createClient } from "../../supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ContactForm from "@/components/contact-form";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored solutions to meet your business needs with cutting-edge
              technology and unparalleled expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BrainCircuit className="w-6 h-6" />,
                title: "AI Solutions",
                description:
                  "Custom AI models and integrations to automate and enhance your business processes",
              },
              {
                icon: <Cloud className="w-6 h-6" />,
                title: "SaaS Development",
                description:
                  "Scalable cloud-based software solutions with subscription models",
              },
              {
                icon: <Code className="w-6 h-6" />,
                title: "Custom Software",
                description:
                  "Bespoke applications tailored to your unique business requirements",
              },
              {
                icon: <ShoppingBag className="w-6 h-6" />,
                title: "E-commerce",
                description:
                  "Modern online stores with seamless payment processing and inventory management",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.title.toLowerCase().replace(" ", "-")}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                >
                  Learn more
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Codenies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technical excellence with deep regional understanding
              to deliver solutions that truly work for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Fast Delivery",
                description:
                  "Rapid development and deployment to get your solutions to market quickly",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Enterprise Security",
                description:
                  "Bank-grade encryption and security practices to protect your data",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Bilingual Support",
                description:
                  "Full English and Arabic language support throughout your project",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: "Gulf Region Expertise",
                description:
                  "Specialized knowledge of Gulf business practices and requirements",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: "Global Standards",
                description:
                  "World-class development practices and quality assurance",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: "Ongoing Support",
                description:
                  "Dedicated maintenance and enhancement services after launch",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Gulf Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-600">
                Schedule a consultation or send us a message about your project
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">
                  Schedule a Meeting
                </h3>
                <p className="text-gray-600 mb-6">
                  Choose a convenient time for a consultation with our team.
                </p>
                <Button className="w-full flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Open Scheduler
                </Button>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
