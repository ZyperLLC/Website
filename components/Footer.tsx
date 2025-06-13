"use client"

import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faFacebook,
  faXTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const socialLinks = [
  {
    name: "Instagram",
    icon: faInstagram,
    href: "https://www.instagram.com/zypercommunity",
  },
  {
    name: "Zyper X",
    icon: faXTwitter,
    href: "https://x.com/ZYPER_officialX",
  },

  {
    name: "Discord",
    icon: faDiscord,
    href: "https://discord.gg/CG8ekDEZN8",
  },
  {
    name: "Facebook",
    icon: faFacebook,
    href: "https://www.facebook.com/share/1AVGmEyP5Z",
  },
  {
    name: "Telegram",
    icon: faTelegram,
    href: "https://web.telegram.org/k/#@BcFC_c",
  },
];

export default function Footer() {
const currentYear = new Date().getFullYear();
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="px-6 py-12 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a href={link.href} key={link.name}>
                <div className="size-10 rounded-full inline-flex items-center justify-center">
                  <FontAwesomeIcon icon={link.icon} className="size-6" />
                </div>
              </a>
            ))}
          </div>
        <p className="text-gray-400">
          © {currentYear}. Built on TON blockchain. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}
