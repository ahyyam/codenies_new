import Link from "next/link";
import { Twitter, Linkedin, Github, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/ai-solutions"
                  className="text-gray-600 hover:text-blue-600"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/saas"
                  className="text-gray-600 hover:text-blue-600"
                >
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-software"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Custom Software
                </Link>
              </li>
              <li>
                <Link
                  href="/services/e-commerce"
                  className="text-gray-600 hover:text-blue-600"
                >
                  E-commerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-blue-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Contact Form
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Schedule Meeting
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@codenies.com"
                  className="text-gray-600 hover:text-blue-600"
                >
                  info@codenies.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+971500000000"
                  className="text-gray-600 hover:text-blue-600"
                >
                  +971 50 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} Codenies. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <span className="sr-only">WhatsApp</span>
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
