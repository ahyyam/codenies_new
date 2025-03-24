import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
