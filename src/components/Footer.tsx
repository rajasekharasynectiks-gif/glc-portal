import React from "react";

export function Footer() {
  const wla1 = new URL("../../images/wla1.png", import.meta.url).href;
  const wla2 = new URL("../../images/wla2.png", import.meta.url).href;
  const wla3 = new URL("../../images/wla3.png", import.meta.url).href;
  const wla4 = new URL("../../images/wla4.png", import.meta.url).href;

  return (
    <footer className="bg-white text-gray-700" role="contentinfo">
      <div className="container-page py-8">
        {/* Top navigation links */}
        <nav aria-label="Footer navigation" className="flex justify-center">
          <ul className="flex flex-wrap justify-center items-center gap-8 text-base md:text-lg font-medium">
            <li>
              <a
                href="https://www.galottery.com/en-us/content/privacy-policy.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Georgia Lottery Privacy Policy (opens in a new tab)"
                className="text-[#0a7a44] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0a7a44]/40 rounded"
              >
                Georgia Lottery Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.galottery.com/en-us/content/termsandconditions.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Georgia Lottery Terms of Use (opens in a new tab)"
                className="text-[#0a7a44] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0a7a44]/40 rounded"
              >
                Georgia Lottery Terms of Use
              </a>
            </li>
            <li>
              <a
                href="https://www.galottery.com/en-us/sms-terms-conditions.html"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SMS Terms and Conditions (opens in a new tab)"
                className="text-[#0a7a44] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0a7a44]/40 rounded"
              >
                SMS Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="https://georgia.gov/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="State of Georgia website (opens in a new tab)"
                className="text-[#0a7a44] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0a7a44]/40 rounded"
              >
                State of Georgia
              </a>
            </li>
          </ul>
        </nav>

        {/* Player hotline */}
        <div className="mt-5 text-center">
          <p className="text-base md:text-lg font-semibold">Player Information Hotline: <span className="font-bold">1-800-GA-LUCKY</span></p>
        </div>

        {/* Copyright */}
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-600">Copyright © 2026 Georgia Lottery Corporation. All rights reserved.</p>
        </div>

        {/* Certification logos */}
        <div className="mt-6 flex justify-center">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src={wla1} alt="World Lottery Association certification" className="h-10 md:h-14 object-contain" loading="lazy" />
            <img src={wla2} alt="Responsible Gambling certification" className="h-10 md:h-14 object-contain" loading="lazy" />
            <img src={wla3} alt="Payment security certification" className="h-10 md:h-14 object-contain" loading="lazy" />
            <img src={wla4} alt="Regulatory compliance certification" className="h-10 md:h-14 object-contain" loading="lazy" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
