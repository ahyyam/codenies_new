"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { createClient } from "@supabase/supabase-js";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      // Store the contact submission in Supabase
      const { error } = await supabase.from("contact_submissions").insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        success: false,
        message: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={3}
          className="w-full p-3 border border-gray-300 rounded-lg"
          required
        ></textarea>
      </div>

      {submitStatus.message && (
        <div
          className={`p-3 rounded-lg ${submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {submitStatus.message}
        </div>
      )}

      <Button
        type="submit"
        className="w-full flex items-center justify-center gap-2"
        disabled={isSubmitting}
      >
        <Send className="w-5 h-5" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
