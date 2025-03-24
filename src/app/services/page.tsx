import {
  BrainCircuit,
  Cloud,
  Code,
  ShoppingBag,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      icon: <BrainCircuit className="w-12 h-12" />,
      title: "AI Solutions",
      description:
        "Custom AI models and integrations to automate and enhance your business processes. We build intelligent systems that learn and adapt to your specific needs.",
      features: [
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI-Powered Automation",
      ],
      link: "/services/ai-solutions",
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "SaaS Development",
      description:
        "Scalable cloud-based software solutions with subscription models. We help you build, deploy and scale your SaaS product with modern cloud architecture.",
      features: [
        "Multi-tenant Architecture",
        "Subscription Management",
        "Cloud Infrastructure",
        "API Development",
      ],
      link: "/services/saas",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Custom Software",
      description:
        "Bespoke applications tailored to your unique business requirements. We design and develop software that perfectly fits your workflow and processes.",
      features: [
        "Enterprise Applications",
        "Mobile App Development",
        "Legacy System Integration",
        "Process Automation",
      ],
      link: "/services/custom-software",
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "E-commerce",
      description:
        "Modern online stores with seamless payment processing and inventory management. We build e-commerce solutions that drive sales and enhance customer experience.",
      features: [
        "Custom Storefronts",
        "Payment Gateway Integration",
        "Inventory Management",
        "Mobile Commerce",
      ],
      link: "/services/e-commerce",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={index % 2 === 1 ? "order-1 md:order-2" : ""}>
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div
                className={`bg-gray-100 rounded-xl p-8 h-64 flex items-center justify-center ${index % 2 === 1 ? "order-2 md:order-1" : ""}`}
              >
                <div className="text-6xl text-blue-600">{service.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
