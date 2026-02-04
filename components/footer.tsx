'use client'

import { MapPin, Phone, Facebook, Twitter, Linkedin, Github, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {

  return (
    <footer style={{ backgroundColor: '#424242' }}>
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <Image
                  src="/logo.png"
                  alt="FabricaChile"
                  width={200}
                  height={50}
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                A leading think tank dedicated to rigorous research and thoughtful analysis on Chile's most pressing challenges.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Research', 'Opinion', 'Media', 'About Us', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                {['Publications', 'Data Hub', 'Podcasts', 'Events', 'Subscribe'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-white mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">Santiago, Chile</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-white mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">+56 2 XXXX XXXX</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-white mt-1 flex-shrink-0" />
                  <a href="mailto:info@fabricachile.org" className="text-gray-300 hover:text-white text-sm transition-colors">
                    info@fabricachile.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-600 pt-8 mt-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2025 Fabrica Chile. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Github, label: 'GitHub' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
