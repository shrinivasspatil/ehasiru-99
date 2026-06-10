import Link from 'next/link';
import { Leaf, Zap, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Leaf className="text-primary" />
              E-Hasiru
            </h3>
            <p className="text-muted-foreground text-sm">
              Leading e-waste recycling and IT asset disposal company in India.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services/ewaste-recycling" className="hover:text-primary transition-colors">E-Waste Recycling</Link></li>
              <li><Link href="/services/data-destruction" className="hover:text-primary transition-colors">Data Destruction</Link></li>
              <li><Link href="/services/it-asset-disposal" className="hover:text-primary transition-colors">IT Asset Disposal</Link></li>
              <li><Link href="/services/refurbishment" className="hover:text-primary transition-colors">Refurbishment</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/sustainability" className="hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/certifications" className="hover:text-primary transition-colors">Certifications</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/contact" className="hover:text-primary transition-colors">Get in Touch</Link></li>
              <li><Link href="/pickup-request" className="hover:text-primary transition-colors">Request Pickup</Link></li>
              <li>Email: <a href="mailto:info@ehasiru.com" className="text-primary hover:underline">info@ehasiru.com</a></li>
              <li>Phone: <a href="tel:+919876543210" className="text-primary hover:underline">+91 9876 543 210</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; 2024 E-Hasiru. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-primary transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
