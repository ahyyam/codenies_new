import { BrainCircuit, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AISolutionsPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <Link
          href="/services"
          className="inline-flex items-center text-blue-600 mb-8"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Services
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block text-blue-600 mb-4">
              <BrainCircuit className="w-12 h-12" />
            </div>
            <h1 className="text-4xl font-bold mb-6">AI Solutions</h1>
            <p className="text-gray-600 mb-6">
              Harness the power of artificial intelligence to transform your
              business operations, enhance decision-making, and create
              innovative customer experiences.
            </p>
            <p className="text-gray-600">
              Our team of AI specialists develops custom solutions that address
              your specific business challenges, using cutting-edge technologies
              and methodologies.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 h-64 flex items-center justify-center">
            <div className="text-8xl text-blue-600">
              <BrainCircuit />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our AI Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Language Processing",
                description:
                  "Build systems that understand, interpret, and generate human language for chatbots, sentiment analysis, and content generation.",
              },
              {
                title: "Computer Vision Solutions",
                description:
                  "Develop applications that can analyze, interpret, and make decisions based on visual data from images and videos.",
              },
              {
                title: "Predictive Analytics",
                description:
                  "Create models that forecast trends, behaviors, and outcomes to support data-driven business decisions.",
              },
              {
                title: "AI-Powered Automation",
                description:
                  "Streamline operations by automating repetitive tasks and processes with intelligent systems.",
              },
              {
                title: "Machine Learning Integration",
                description:
                  "Incorporate machine learning capabilities into your existing systems and applications.",
              },
              {
                title: "Custom AI Model Development",
                description:
                  "Build tailored AI models designed specifically for your unique business requirements and data.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">
            Why Choose Our AI Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Expertise:</strong> Team of AI specialists with
                    advanced degrees and industry experience
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Custom Approach:</strong> Solutions tailored to your
                    specific business challenges
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Cutting-edge Technology:</strong> Utilizing the
                    latest AI frameworks and methodologies
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Scalable Solutions:</strong> Systems that grow with
                    your business needs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Ethical AI:</strong> Commitment to responsible AI
                    development practices
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>
                    <strong>Ongoing Support:</strong> Continuous improvement and
                    maintenance of your AI systems
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our AI solutions can address your
            specific business challenges.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
