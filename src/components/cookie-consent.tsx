"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay showing banner slightly for better UX
      setTimeout(() => {
        setShowBanner(true);
        setTimeout(() => setIsVisible(true), 100);
      }, 1000);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      advertising: true,
      timestamp: new Date().toISOString()
    }));
    closeBanner();
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      advertising: false,
      timestamp: new Date().toISOString()
    }));
    closeBanner();
  };

  const closeBanner = () => {
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);
  };

  if (!showBanner) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="bg-white dark:bg-gray-900 border-t dark:border-gray-700 shadow-2xl">
        <div className="container py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1 pr-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg 
                    className="w-5 h-5 text-blue-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    We Value Your Privacy
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    We use cookies to enhance your learning experience, analyze site traffic, 
                    and display relevant advertisements that help keep this platform free. 
                    By clicking &quot;Accept All&quot;, you consent to our use of cookies.{" "}
                    <Link 
                      href="/privacy" 
                      className="text-blue-600 hover:text-blue-700 underline font-medium"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors whitespace-nowrap"
              >
                Essential Only
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-sm transition-all whitespace-nowrap"
              >
                Accept All Cookies
              </button>
            </div>

            <button
              onClick={closeBanner}
              className="absolute top-3 right-3 sm:relative sm:top-0 sm:right-0 p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Close banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cookie Details (expandable section - optional enhancement) */}
          <details className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <summary className="text-xs font-medium text-gray-700 dark:text-gray-300 cursor-pointer hover:text-gray-900 dark:hover:text-white">
              Cookie Details
            </summary>
            <div className="mt-3 space-y-3 text-xs text-gray-600 dark:text-gray-400">
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Essential Cookies:</span> Required for basic site functionality 
                (navigation, security, preferences). These cannot be disabled.
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Analytics Cookies:</span> Help us understand how you use the site 
                so we can improve your learning experience (Google Analytics, Vercel Analytics).
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-white">Advertising Cookies:</span> Enable us to show relevant ads that support 
                this free educational platform (Google AdSense, third-party ad networks).
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
