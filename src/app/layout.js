/**
 * layout.jsx — Root Layout
 * Atorix IT | Next.js App Router
 *
 * Responsibilities:
 *  - Wraps every page with shared providers (Theme, Auth, Chat)
 *  - Conditionally renders Navbar, Footer, floating UI on public routes
 *  - Loads Tawk.to live-chat scripts only on public (non-admin) routes
 *  - Pings the backend once on mount to wake up the server
 */

"use client";

// ─── Next.js Core ────────────────────────────────────────────
import { Inter } from "next/font/google";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// ─── Global Styles ───────────────────────────────────────────
import "./globals.css";

// ─── Providers ───────────────────────────────────────────────
import { ThemeProvider } from "@/components/ui/theme-provider";
import { AuthProvider } from "@/context/AuthContext";
import { ChatProvider } from "@/context/ChatContext";

// ─── Shared UI Components ────────────────────────────────────
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import FloatingContactButtons from "@/components/common/FloatingContactButtons";
import PopupContactForm from "@/components/common/PopupContactForm";

// ─── Utilities / API ─────────────────────────────────────────
import { pingBackend } from "@/lib/api";
import "@/utils/api/apiInterceptor"; // Axios interceptor — runs once on import

// ─── Font Setup ──────────────────────────────────────────────
// Inter is loaded via next/font for automatic font optimization
const inter = Inter({ subsets: ["latin"] });

// ─────────────────────────────────────────────────────────────
// RootLayout
// ─────────────────────────────────────────────────────────────
export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Any route starting with /admin hides public UI (Navbar, Footer, chat, etc.)
  const isAdminRoute = pathname.startsWith("/admin");

  // Wake-up ping — keeps the backend warm (e.g., free-tier hosting)
  useEffect(() => {
    pingBackend();
  }, []); // Runs only once on initial mount

  return (
    <html lang="en">
      <head>
        {/*
         * ── Tawk.to Live Chat (Public Pages Only) ──────────────
         *
         * Two separate scripts are needed:
         *   1. tawk-main    → loads the Tawk.to widget (lazyOnload)
         *   2. tawk-control → configures widget size, position, and
         *                     business-hours visibility (afterInteractive)
         *
         * Both are skipped entirely on /admin routes to keep the
         * admin panel clean and avoid unnecessary third-party JS.
         */}
        {!isAdminRoute && (
          <>
            {/* Script 1: Load the Tawk.to widget bundle */}
            <Script
              id="tawk-main"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  window.Tawk_API     = window.Tawk_API     || {};
                  window.Tawk_LoadStart = new Date();

                  (function () {
                    var s1 = document.createElement("script");
                    var s0 = document.getElementsByTagName("script")[0];
                    s1.async = true;
                    s1.src = "https://embed.tawk.to/66a4ec76becc2fed692be739/1i3q3nbqb";
                    s1.charset = "UTF-8";
                    s1.setAttribute("crossorigin", "*");
                    s0.parentNode.insertBefore(s1, s0);
                  })();
                `,
              }}
            />

            {/* Script 2: Configure widget after Tawk has fully loaded */}
            <Script
              id="tawk-control"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.Tawk_API = window.Tawk_API || {};

                  /**
                   * Returns true if the current IST time falls within
                   * business hours: Monday–Friday, 10:00 AM – 7:00 PM.
                   */
                  function isBusinessHours() {
                    const now     = new Date();
                    const istTime = new Date(
                      now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
                    );
                    const day  = istTime.getDay();   // 0 = Sun, 6 = Sat
                    const hour = istTime.getHours(); // 0–23
                    return day >= 1 && day <= 5 && hour >= 10 && hour < 19;
                  }

                  /**
                   * Tawk_API.onLoaded fires once the widget is fully
                   * initialised and the API methods are available.
                   */
                  window.Tawk_API.onLoaded = function () {

                    /**
                     * Applies responsive sizing to the chat window.
                     * Clamps width to 360 px and height to 520 px, but
                     * respects smaller screens with 24/140 px safety margins.
                     */
                    function setWidgetStyle() {
                      if (!window.Tawk_API.customStyle) return;

                      const widgetWidth  = Math.min(360, window.innerWidth  - 24);
                      const widgetHeight = Math.min(520, window.innerHeight - 140);

                      window.Tawk_API.customStyle({
                        widget: {
                          width:  widgetWidth,
                          height: widgetHeight,
                        },
                        visibility: {
                          desktop: {
                            position: "br", // bottom-right
                            xOffset: 12,
                            yOffset: 18,
                          },
                          mobile: {
                            position: "br",
                            xOffset: 12,
                            yOffset: 18,
                          },
                        },
                      });
                    }

                    // Apply sizing
                    setWidgetStyle();

                    // Show widget only during business hours; hide otherwise
                    if (isBusinessHours()) {
                      window.Tawk_API.showWidget();
                    } else {
                      window.Tawk_API.hideWidget();
                    }
                  };
                `,
              }}
            />
          </>
        )}
      </head>

      {/*
       * inter.className applies the CSS class generated by next/font,
       * which sets font-family + optimises loading automatically.
       */}
      <body className={inter.className}>
        {/*
         * ThemeProvider — wraps everything so any component can read
         * / toggle the active theme.
         *
         *   attribute="class"   → adds class="dark" / class="light" to <html>
         *   defaultTheme="dark" → start in dark mode
         *   enableSystem=false  → ignore OS-level prefers-color-scheme
         */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {/* AuthProvider — exposes user auth state & helpers app-wide */}
          <AuthProvider>
            {/* ChatProvider — exposes live-chat state & helpers app-wide */}
            <ChatProvider>
              {/* ── Public-only: top navigation bar ─────────────── */}
              {!isAdminRoute && <Navbar />}

              {/* ── Page content injected here by Next.js ────────── */}
              <main>{children}</main>

              {/* ── Public-only: footer ──────────────────────────── */}
              {!isAdminRoute && <Footer />}

              {/* ── Public-only: floating WhatsApp / phone buttons ── */}
              {!isAdminRoute && <FloatingContactButtons />}

              {/* ── Public-only: popup contact/inquiry form ─────── */}
              {!isAdminRoute && <PopupContactForm />}
            </ChatProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
