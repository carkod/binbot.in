"use client";
import { FaWaveSquare } from "react-icons/fa";
import { trackLinkClick } from "@/lib/analytics";

const startYear = 2022;

export function Footer() {
  const currentYear = new Date().getFullYear();
  const yearRange = currentYear > startYear ? `${startYear}–${currentYear}` : `${startYear}`;

  return (
    <footer className="bg-[#252422] py-12 border-t border-[#252422]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <FaWaveSquare className="text-[#ccc5b9] opacity-80" style={{ fontSize: "1.5rem" }} />
            <span className="font-display font-bold text-xl tracking-wider text-[#ccc5b9]">
              BINBOT
            </span>
          </div>

          <div className="flex gap-6">
            <a
              href="/privacy"
              target="_blank"
              onClick={() => trackLinkClick("Privacy Policy", "/privacy")}
              className="text-sm text-[#ccc5b9] hover:text-[#51cbce] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              target="_blank"
              onClick={() => trackLinkClick("Terms of Service", "/terms")}
              className="text-sm text-[#ccc5b9] hover:text-[#51cbce] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              onClick={() => trackLinkClick("Form ADV", "#")}
              className="text-sm text-[#ccc5b9] hover:text-[#51cbce] transition-colors"
            >
              Form ADV
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center md:text-left text-xs text-[#ccc5b9]/70 leading-relaxed max-w-5xl">
          <p className="mb-3 text-[#ccc5b9]/90">
            BINBOT LTD &mdash; Registered in England and Wales. Company No. 15703376.
            Registered office: London, United Kingdom.
          </p>
          <p className="mb-4">
            CONFIDENTIALITY NOTICE: The information contained herein is intended solely for the recipient and may not be reproduced or distributed without the prior written consent of BINBOT LTD.
          </p>
          <p className="mb-4">
            DISCLAIMER: This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Past performance is not indicative of future results. Digital asset trading involves significant risk of loss and is not suitable for all investors.
          </p>
          <p>
            &copy; {yearRange} BINBOT LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
