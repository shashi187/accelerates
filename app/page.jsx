"use client";
import Section from "../components/Section";
import { CTAButton, Stat } from "../components/Buttons";
import WhatsAppWidget from "../components/WhatsAppWidget";
import FAQ from "../components/FAQ";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import MouseFollower from "../components/MouseFollower";
export default function Page() {
  const container = {
    hidden: { opacity: 0, x: -300 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.4,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, x: -150 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleToggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  const [show, setShow] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      rotate: 0,
      duration: 3,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 8,
      duration: 3,
      delay: -2.8,
      transformOrigin: "50% 50%",
      ease: "Expo.easeInOut",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.75) {
          document.querySelector(".svg").remove();
          setShow(true);
          this.kill();
        }
      },
    });
  });
  return (
    <MouseFollower>
      <div>
        <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="viMask">
                <rect width="100%" height="100%" fill="black" />
                <g className="vi-mask-group">
                  <text
                    x="50%"
                    y="50%"
                    fontSize="25"
                    textAnchor="middle"
                    fill="white"
                    dominantBaseline="middle"
                    fontFamily="Arial Black"
                  >
                    Accelerates
                  </text>
                </g>
              </mask>
            </defs>
            <image
              className=""
              href="./logo.png"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#viMask)"
            />
          </svg>
        </div>
        {show && (
          <div>
            <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/60 border-b border-white/10">
              <div className="container h-16 flex items-center justify-between">
                <a href="#home" className="hidden md:flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    className="rounded-full"
                    width={28}
                    height={28}
                    alt="Accelerates logo"
                  />
                  <span className="font-extrabold tracking-tight">
                    ACCELERATES
                  </span>
                </a>
                <nav className="md:flex border border-white/50 py-1 px-2 md:p-0 rounded-2xl md:border-none  items-center gap-8 space-x-2 text-sm text-white/80">
                  <a href="#services" className="hover:text-white">
                    Services
                  </a>
                  <a href="#portfolio" className="hover:text-white">
                    Work
                  </a>
                  <a href="#pricing" className="hover:text-white">
                    Pricing
                  </a>
                  <a href="#faqs" className="hover:text-white">
                    FAQs
                  </a>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </nav>
                <div className="flex items-center gap-3">
                  <a
                    href={
                      process.env.NEXT_PUBLIC_INSTAGRAMPAGE_URL ||
                      "https://www.instagram.com/accelerates.online/"
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-2 text-sm hover:bg-white/10"
                  >
                    Instagram
                  </a>
                  <a
                    className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-2 text-sm hover:bg-white/10"
                    href={
                      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
                      "https://www.linkedin.com/company/107572528/"
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </header>

            {/* HERO */}
            <Section id="home">
              <div className="container -mt-8 grid lg:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="inline-flex items-center border border-white/20 rounded-3xl py-1 px-2 gap-2 text-xs uppercase tracking-wider text-white/70">
                    Founder‑led. Growth‑first.
                  </div>
                  <h1 className="mt-4 text-2xl sm:text-6xl lg:text-4xl font-extrabold">
                    AI-Powered Website Development Agency in India –<br />
                    <span className="bg-clip-text text-4xl inline-block min-h-52 md:min-h-28 text-transparent bg-gradient-to-r from-red-400 via-green-300 to-blue-500">
                      <Typewriter />
                    </span>
                  </h1>
                  <p className="mt-4 text-white/70 max-w-xl">
                    We build websites that look premium and perform like beasts.
                    Conversion-ready, SEO-maxed, AI-powered. Zero fluff. Only
                    growth.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <CTAButton href="#contact">
                      Get a Free Growth Audit
                    </CTAButton>
                    <CTAButton variant="ghost" href="#portfolio">
                      See Live Work
                    </CTAButton>
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-6">
                    <Stat value="98" label="Lighthouse Perf Score" />
                    <Stat value=">2x" label="Average Conversion Lift" />
                    <Stat value="<1s" label="Time to First Byte" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >
                  <div className="relative rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl">
                    <div className="relative aspect-auto overflow-hidden rounded-3xl bg-gradient-to-br from-sky-400/20 via-fuchsia-400/10 to-violet-400/20 grid place-items-center">
                      <video
                        src="/hero.mp4"
                        ref={videoRef}
                        className="w-full h-full rounded-lg cursor-pointer"
                        onClick={handleToggleMute}
                        autoPlay
                        loop
                        muted
                        playsInline
                      ></video>
                      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-lg">
                        {isMuted ? "🔇 Muted" : "🔊 Sound"}
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-white/70">
                      <div className="flex items-center gap-2">
                        Core Web Vitals
                      </div>
                      <div className="flex items-center gap-2">SEO‑Ready</div>
                      <div className="flex items-center gap-2">
                        AI Integrations
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Section>

            {/* SERVICES */}
            <Section
              id="services"
              kicker="What We Do"
              title={
                <span>
                  Website Development —{" "}
                  <span className="text-white/70">with SEO baked‑in</span>
                </span>
              }
              subtitle="One core service with four high‑impact executions. Every build ships with technical SEO, analytics, and speed optimization."
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={container}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: false }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <motion.div
                  variants={item}
                  whileHover={{ y: -4 }}
                  className="card"
                >
                  <svg
                    version="1.1"
                    id="Layer_1"
                    viewBox="0 0 295.238 295.238"
                    fill="#000000"
                    className="h-40 w-40 mt-8 place-self-center"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <rect
                            x="19.048"
                            y="52.381"
                            style={{ fill: "#F9BA48" }}
                            width="114.286"
                            height="76.19"
                          ></rect>{" "}
                          <path
                            style={{ fill: "#c4c8cf" }}
                            d="M280.952,28.571H14.286C6.41,28.571,0,34.981,0,42.857v176.19c0,7.876,6.41,14.286,14.286,14.286 h80.952v23.81h-23.81v9.524h152.381v-9.524H200v-23.81h80.952c7.876,0,14.286-6.41,14.286-14.286V42.857 C295.238,34.981,288.828,28.571,280.952,28.571z M14.286,38.095h266.667c2.629,0,4.762,2.138,4.762,4.762v147.619H9.524V42.857 C9.524,40.233,11.657,38.095,14.286,38.095z M190.476,257.143h-85.714v-23.81h85.714V257.143z M280.952,223.809H14.286 c-2.629,0-4.762-2.138-4.762-4.762V200h276.19v19.048C285.714,221.671,283.581,223.809,280.952,223.809z"
                          ></path>{" "}
                          <path
                            style={{ fill: "#f2f4f7" }}
                            d="M167.224,142.857h13.729v0.876c-5.529,1.971-9.524,7.21-9.524,13.41 c0,7.876,6.41,14.286,14.286,14.286c6.2,0,11.438-3.995,13.41-9.524h39.852c1.971,5.529,7.21,9.524,13.41,9.524 c7.876,0,14.286-6.41,14.286-14.286c0-6.2-3.995-11.438-9.524-13.41v-0.876h13.833l5.714-57.143H176.19v9.524h89.976l-3.81,38.095 h-86.724l-9.524-76.19h-18.49v9.524H157.7L167.224,142.857z M238.971,152.381h-39.852c-1.438-4.033-4.614-7.21-8.648-8.648v-0.876 h57.143v0.876C243.586,145.171,240.409,148.348,238.971,152.381z M185.714,161.905c-2.629,0-4.762-2.138-4.762-4.762 s2.133-4.762,4.762-4.762s4.762,2.138,4.762,4.762S188.343,161.905,185.714,161.905z M252.381,161.905 c-2.629,0-4.762-2.138-4.762-4.762s2.133-4.762,4.762-4.762s4.762,2.138,4.762,4.762S255.009,161.905,252.381,161.905z"
                          ></path>{" "}
                          <rect
                            x="180.952"
                            y="109.524"
                            style={{ fill: "#c4c8cf" }}
                            width="76.19"
                            height="9.524"
                          ></rect>{" "}
                          <rect
                            x="19.048"
                            y="142.857"
                            style={{ fill: "#c4c8cf" }}
                            width="114.286"
                            height="9.524"
                          ></rect>{" "}
                          <rect
                            x="19.048"
                            y="166.667"
                            style={{ fill: "#c4c8cf" }}
                            width="114.286"
                            height="9.524"
                          ></rect>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <h3 className="text-3xl mt-10 font-bold">Ecommerce</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Fast, scalable, SEO-ready online stores. From Shopify to
                    custom builds, we engineer storefronts that convert and
                    dominate search rankings.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
                    <span>SEO Included</span>
                    <span>•</span>
                    <span>Speed‑first</span>
                    <span>•</span>
                    <span>Analytics</span>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  whileHover={{ y: -4 }}
                  className="card"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="h-200 icon place-self-center"
                    version="1.1"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M670.1 857.7H206.2c-27.6 0-50-22.4-50-50V331.1c0-27.6 22.4-50 50-50H670c27.6 0 50 22.4 50 50v476.6c0.1 27.7-22.3 50-49.9 50z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M669 299.3H205.1c-16.5 0-30 13.5-30 30v75.9H699v-75.9c0-16.5-13.5-30-30-30z"
                        fill="#E6E6E6"
                      ></path>
                      <path
                        d="M859 159.3c-15.4-12.3-35.5-19-56.7-19H363.6c-21.2 0-41.4 6.8-56.7 19-16.4 13.1-25.9 31.7-25.9 51v49h-75.9c-38.6 0-70 31.4-70 70v476.6c0 38.6 31.4 70 70 70H669c38.6 0 70-31.4 70-70v-49h63.3c21.2 0 41.4-6.8 56.7-19 16.4-13.1 25.9-31.7 25.9-51V210.3c0-19.3-9.5-37.9-25.9-51zM699 405.2H175.1v-75.9c0-16.5 13.5-30 30-30H669c16.5 0 30 13.5 30 30v75.9z m0 400.7c0 16.5-13.5 30-30 30H205.1c-16.5 0-30-13.5-30-30V425.2H699v380.7z m145.9-119c0 16.3-19.5 30-42.6 30H739V329.3c0-38.6-31.4-70-70-70H321v-49c0-16.3 19.5-30 42.6-30h438.7c23.1 0 42.6 13.7 42.6 30v476.6z"
                        fill="#005BFF"
                      ></path>
                      <path
                        d="M537.3 369.2H393.1c-9.9 0-17.9-8-17.9-17.9 0-9.9 8-17.9 17.9-17.9h144.2c9.9 0 17.9 8 17.9 17.9 0 9.9-8 17.9-17.9 17.9z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M320.4 802.3h-82.1c-16.6 0-30-13.4-30-30V454.4h112.1v347.9zM636.2 802.3H355V454.4h311.3v317.9c-0.1 16.6-13.5 30-30.1 30z"
                        fill="#E6E6E6"
                      ></path>
                      <path
                        d="M230.2 351.3m-18.7 0a18.7 18.7 0 1 0 37.4 0 18.7 18.7 0 1 0-37.4 0Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M290.6 351.3m-18.7 0a18.7 18.7 0 1 0 37.4 0 18.7 18.7 0 1 0-37.4 0Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M225.3 749.2c-2.4 0-4.7-0.8-6.6-2.5-4.1-3.7-4.5-10-0.8-14.1l120.8-136 121 34.4 191.7-132.3c4.5-3.1 10.8-2 13.9 2.5 3.1 4.5 2 10.8-2.5 13.9L463.2 652.7l-118-33.5-112.5 126.6c-1.9 2.2-4.7 3.4-7.4 3.4z"
                        fill="#005BFF"
                      ></path>
                      <path
                        d="M469.9 740.3L338.6 566.7l-123.2 51.8c-5.1 2.1-11-0.2-13.1-5.3-2.1-5.1 0.2-11 5.3-13.1l137.5-57.9 124 164.1L638 463.6c3.2-4.5 9.4-5.7 13.9-2.5s5.7 9.4 2.5 13.9L469.9 740.3z"
                        fill="#06F3FF"
                      ></path>
                    </g>
                  </svg>
                  <h3 className="text-3xl font-bold">Landing Page</h3>

                  <p className="mt-2 text-sm text-white/70">
                    Launch-ready landing pages engineered to sell.
                    Conversion-first design with built-in SEO, analytics, and
                    A/B testing.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
                    <span>SEO Included</span>
                    <span>•</span>
                    <span>Return Oriented</span>
                    <span>•</span>
                    <span>Analytics</span>
                  </div>
                </motion.div>
                <motion.div
                  variants={item}
                  whileHover={{ y: -4 }}
                  className="card"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    className="h-50 w-50 icon place-self-center mb-2"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M496.939726 462.449075c-14.648177-8.454234-36.851467-9.37833-49.539062-2.047997L33.542827 699.329957c-12.687594 7.330333-11.101645 20.142805 3.55902 28.609526L520.479209 1007.016606c14.648177 8.466721 36.851467 9.37833 49.539062 2.060485l413.857836-238.941367c12.687594-7.330333 11.101645-20.142805-3.55902-28.609526L496.939726 462.449075z"
                        fill="#BBC6E6"
                      ></path>
                      <path
                        d="M24.976204 690.675919v21.079389l17.17071 10.227499 5.119994-26.224358L24.976204 690.675919zM992.442731 736.630985v21.079389l-20.50495 10.639596-6.705943-23.252264 27.210893-8.466721z"
                        fill="#BBC6E6"
                      ></path>
                      <path
                        d="M496.939726 441.369686c-14.648177-8.454234-36.851467-9.37833-49.539062-2.047997L33.542827 678.263056c-12.687594 7.317845-11.101645 20.142805 3.55902 28.597038l483.377362 279.077123c14.648177 8.466721 36.851467 9.37833 49.539062 2.060485l413.857836-238.941367c12.687594-7.330333 11.101645-20.142805-3.55902-28.609526L496.939726 441.369686z"
                        fill="#F3F5FB"
                      ></path>
                      <path
                        d="M376.157824 535.565083c-3.309264-1.910632-8.30438-2.110436-11.164084-0.462048l-93.208862 53.809886c-2.859704 1.648388-2.497558 4.533068 0.799219 6.443699l447.887063 258.584661c3.296776 1.910632 8.291892 2.110436 11.151597 0.462048l93.208861-53.809886c2.859704-1.660876 2.497558-4.545555-0.799218-6.443699L376.157824 535.565083z"
                        fill="#DEE5F6"
                      ></path>
                      <path
                        d="M885.67213 722.457343c-3.521557 2.03551-9.228477 2.03551-12.750034 0-3.521557-2.023022-3.521557-5.332286 0-7.367796 3.521557-2.023022 9.228477-2.023022 12.750034 0 3.521557 2.03551 3.521557 5.344774 0 7.367796zM813.367828 764.216512c-3.521557 2.023022-9.240964 2.023022-12.762521 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.509069 2.03551 3.509069 5.332286 0 7.367796zM741.051038 805.963193c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM668.734248 847.709874c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.509069-2.03551-3.509069-5.332286 0-7.367796 3.521557-2.023022 9.240964-2.023022 12.762521 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM596.417458 889.469042c-3.521557 2.023022-9.228477 2.023022-12.750033 0-3.521557-2.03551-3.521557-5.344774 0-7.367796 3.521557-2.03551 9.228477-2.03551 12.750033 0 3.521557 2.023022 3.521557 5.332286 0 7.367796zM524.100668 931.215723c-3.509069 2.03551-9.228477 2.03551-12.750033 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.240964-2.03551 12.750033 0 3.521557 2.03551 3.521557 5.332286 0 7.367796z"
                        fill="#C4CBDC"
                      ></path>
                      <path
                        d="M385.523666 475.036767l536.475444 309.734647 1.685851-0.96156-536.475443-309.747135-1.685852 0.974048zM313.643949 516.54618l536.475444 309.734646 1.685851-0.974047L315.317313 515.572132l-1.673364 0.974048z"
                        fill="#DEE3F1"
                      ></path>
                      <path
                        d="M896.861189 672.456234l-459.837878 265.490408 1.685852 0.974047 459.837878-265.490408-1.685852-0.974047z"
                        fill="#DEE3F1"
                      ></path>
                      <path
                        d="M472.363756 483.828171c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.521557-2.023022-3.521557-5.332286 0-7.367796 3.521557-2.023022 9.240964-2.023022 12.762521 0 3.521557 2.03551 3.521557 5.344774 0 7.367796zM400.046966 525.58734c-3.521557 2.023022-9.240964 2.023022-12.762521 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM327.730176 567.33402c-3.521557 2.03551-9.240964 2.03551-12.750033 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.509069-2.03551 9.228477-2.03551 12.750033 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM255.413386 609.080701c-3.521557 2.03551-9.228477 2.03551-12.750033 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.023022 9.228477-2.023022 12.750033 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM183.096596 650.827382c-3.509069 2.03551-9.228477 2.03551-12.750033 0-3.521557-2.023022-3.521557-5.332286 0-7.355308 3.521557-2.03551 9.240964-2.03551 12.750033 0 3.521557 2.023022 3.521557 5.332286 0 7.355308zM110.792294 692.586551c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM541.246403 523.601781c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.023022 9.240964-2.023022 12.762521 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM468.929614 565.348462c-3.521557 2.03551-9.240964 2.03551-12.750034 0-3.521557-2.023022-3.521557-5.332286 0-7.355308 3.509069-2.03551 9.228477-2.03551 12.750034 0 3.521557 2.023022 3.521557 5.332286 0 7.355308zM396.612824 607.10763c-3.521557 2.023022-9.228477 2.023022-12.750034 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.228477-2.03551 12.750034 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM324.308522 648.854311c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.509069 2.03551 3.509069 5.332286 0 7.367796zM251.991732 690.600992c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.521557-2.023022-3.521557-5.332286 0-7.355308 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.521557 2.023022 3.521557 5.332286 0 7.355308zM179.674942 732.360161c-3.521557 2.023022-9.240964 2.023022-12.762521 0-3.509069-2.03551-3.509069-5.332286 0-7.367796 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM610.129051 563.375391c-3.521557 2.03551-9.228477 2.03551-12.750033 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.228477-2.03551 12.750033 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM537.812261 605.122072c-3.509069 2.03551-9.228477 2.03551-12.750033 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.023022 9.240964-2.023022 12.750033 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM465.507959 646.88124c-3.521557 2.023022-9.240964 2.023022-12.762521 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM393.191169 688.627921c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM320.874379 730.374602c-3.521557 2.03551-9.240964 2.03551-12.750033 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.509069-2.023022 9.228477-2.023022 12.750033 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM248.55759 772.121283c-3.521557 2.03551-9.228477 2.03551-12.750034 0-3.521557-2.023022-3.521557-5.332286 0-7.355308 3.521557-2.03551 9.228477-2.03551 12.750034 0 3.521557 2.023022 3.521557 5.332286 0 7.355308zM679.011699 603.149001c-3.509069 2.03551-9.228477 2.03551-12.750033 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.240964-2.03551 12.750033 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM606.707397 644.895682c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.023022 9.240964-2.023022 12.762521 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM534.390607 686.642363c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.521557-2.023022-3.521557-5.332286 0-7.355308 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.521557 2.023022 3.521557 5.332286 0 7.355308zM462.073817 728.401531c-3.521557 2.023022-9.228477 2.023022-12.750033 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.228477-2.03551 12.750033 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM389.757027 770.148212c-3.521557 2.03551-9.228477 2.03551-12.750033 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.228477-2.03551 12.750033 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM317.452725 811.894893c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.521557-2.023022-3.521557-5.332286 0-7.355308 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.509069 2.023022 3.509069 5.332286 0 7.355308zM747.906834 642.922611c-3.521557 2.023022-9.240964 2.023022-12.762521 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM675.590044 684.669292c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.509069-2.03551-3.509069-5.332286 0-7.367796 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM603.273255 726.415973c-3.521557 2.03551-9.228477 2.03551-12.750034 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.023022 9.228477-2.023022 12.750034 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM530.956465 768.175141c-3.509069 2.023022-9.228477 2.023022-12.750034 0-3.521557-2.03551-3.521557-5.344774 0-7.367796 3.521557-2.03551 9.240964-2.03551 12.750034 0 3.521557 2.023022 3.521557 5.332286 0 7.367796zM458.652163 809.921822c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM386.335373 851.668503c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.023022 9.240964-2.023022 12.762521 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM816.789482 682.683733c-3.521557 2.03551-9.240964 2.03551-12.750033 0-3.521557-2.023022-3.521557-5.332286 0-7.355308 3.509069-2.03551 9.228477-2.03551 12.750033 0 3.521557 2.023022 3.521557 5.332286 0 7.355308zM744.472692 724.442902c-3.521557 2.023022-9.228477 2.023022-12.750033 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.228477-2.03551 12.750033 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM672.16839 766.189583c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.023022 9.240964-2.023022 12.762521 0 3.509069 2.03551 3.509069 5.332286 0 7.367796zM599.8516 807.936263c-3.521557 2.03551-9.240964 2.03551-12.762521 0-3.521557-2.023022-3.521557-5.332286 0-7.355308 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.521557 2.023022 3.521557 5.332286 0 7.355308zM527.53481 849.695432c-3.521557 2.023022-9.240964 2.023022-12.762521 0-3.509069-2.03551-3.509069-5.332286 0-7.367796 3.521557-2.03551 9.240964-2.03551 12.762521 0 3.521557 2.03551 3.521557 5.332286 0 7.367796zM455.21802 891.442113c-3.521557 2.03551-9.228477 2.03551-12.750033 0-3.521557-2.03551-3.521557-5.332286 0-7.367796 3.521557-2.03551 9.228477-2.03551 12.750033 0 3.521557 2.03551 3.521557 5.332286 0 7.367796z"
                        fill="#C4CBDC"
                      ></path>
                      <path
                        d="M547.065713 470.503699L87.227835 735.994107l1.685852 0.96156 459.837878-265.47792-1.685852-0.974048z"
                        fill="#DEE3F1"
                      ></path>
                      <path
                        d="M241.751744 558.043105l536.475444 309.734646 1.685851-0.961559-536.475443-309.747135-1.685852 0.974048zM169.872027 599.552518l536.475443 309.734646 1.685852-0.974047-536.475443-309.734647-1.685852 0.974048zM97.979822 641.049443l536.487931 309.734646 1.673364-0.974047-536.475443-309.734647-1.685852 0.974048z"
                        fill="#DEE3F1"
                      ></path>
                      <path
                        d="M617.022311 510.889211l-459.837878 265.490408 1.685851 0.974048 459.837879-265.490408-1.685852-0.974048zM686.991396 551.287211L227.153518 816.765131l1.673364 0.974047 459.837878-265.490408-1.673364-0.961559zM756.947994 591.672722L297.110116 857.16313l1.685851 0.974048 459.837879-265.490408-1.685852-0.974048zM826.904592 632.058234l-459.837879 265.490408 1.685852 0.974048 459.837878-265.490408-1.685851-0.974048z"
                        fill="#DEE3F1"
                      ></path>
                      <path
                        d="M753.051804 271.298479c0-4.882726-2.972094-10.56467-6.631017-12.675107L299.857429 0.800467c-3.67141-2.122924-6.643504 0.124878-6.643504 5.007604v424.784653c0 4.882726 2.972094 10.56467 6.643504 12.687594l446.563358 257.822905c3.658922 2.110436 6.631016-0.137366 6.631017-5.020091V271.298479z"
                        fill="#8095D1"
                      ></path>
                      <path
                        d="M676.414239 315.555205c0-4.882726-2.972094-10.577158-6.631017-12.687594L223.207377 45.044706c-3.658922-2.110436-6.631016 0.137366-6.631017 5.020091v424.784653c0 4.882726 2.972094 10.56467 6.631017 12.675107l446.575845 257.822905c3.658922 2.122924 6.631016-0.124878 6.631017-5.020092V315.555205z"
                        fill="#4463B9"
                      ></path>
                      <path
                        d="M343.876888 372.799233l-7.130528 3.184387 40.360536 82.431899 7.130528-3.184386-40.360536-82.4319z"
                        fill="#F2F2F2"
                      ></path>
                      <path
                        d="M385.074106 354.404719l-48.327746 21.578901 5.856773 11.950814 48.315259-21.591388-5.844286-11.938327z"
                        fill="#F2F2F2"
                      ></path>
                      <path
                        d="M492.818755 478.708177l7.130528-3.184386-40.360536-82.419412-7.130528 3.184387 40.360536 82.419411z"
                        fill="#F2F2F2"
                      ></path>
                      <path
                        d="M451.621537 497.115179l48.327746-21.591388-5.856773-11.950815-48.315259 21.591388 5.844286 11.950815z"
                        fill="#F2F2F2"
                      ></path>
                      <path
                        d="M676.414239 315.892376c0-5.070043-3.084484-10.976767-6.89326-13.174618L222.745328 44.769975c-3.409167-1.960583-6.168968 0.124878-6.168968 4.670433v40.148244l459.837879 265.490408v-39.186684z"
                        fill="#385593"
                      ></path>
                      <path
                        d="M375.458508 240.828272c0-4.00858-2.435119-8.654038-5.432189-10.389841l-123.816434-71.480108c-2.99707-1.735803-5.432188 0.11239-5.432188 4.108483s2.435119 8.654038 5.432188 10.389841l123.816434 71.46762c2.99707 1.735803 5.432188-0.099902 5.432189-4.095995zM428.082054 271.198577c0-3.996093-2.435119-8.64155-5.432189-10.377354l-33.304935-19.231196c-2.99707-1.723315-5.432188 0.11239-5.432188 4.108483 0 4.00858 2.435119 8.654038 5.432188 10.389841l33.304935 19.218708c2.99707 1.735803 5.432188-0.099902 5.432189-4.108482zM443.766717 388.608775l-5.294822-8.691502-45.580433 83.455898 5.307311 8.691502 45.567944-83.455898z"
                        fill="#F2F2F2"
                      ></path>
                    </g>
                  </svg>
                  <h3 className="text-3xl font-bold">Custom Coded</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Enterprise-grade builds with React, Next.js, and headless
                    CMS. Blazing fast, SEO optimized, and built for scale.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
                    <span>SEO Included</span>
                    <span>•</span>
                    <span>Conversion</span>
                    <span>•</span>
                    <span>Analytics</span>
                  </div>
                </motion.div>
                <motion.div whileHover={{ y: -4 }} className="card">
                  <svg
                    className="h-40 w-40 place-self-center my-8"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    fill="#000000"
                  >
                    <g>
                      <polygon
                        style={{ fill: "#D80027" }}
                        points="120.887,512 99.554,497.778 78.221,512 78.221,440.889 120.887,440.889"
                      />
                      <rect
                        x="405.333"
                        y="166.073"
                        style={{ fill: "#FFDA44" }}
                        width="71.111"
                        height="303.26"
                      />
                      <rect
                        x="405.333"
                        y="166.073"
                        style={{ fill: "#FF5023" }}
                        width="71.111"
                        height="209.394"
                      />
                      <rect
                        x="405.333"
                        y="166.073"
                        style={{ fill: "#D80027" }}
                        width="71.111"
                        height="115.527"
                      />
                      <rect
                        x="405.333"
                        y="93.867"
                        style={{ fill: "#6C0014" }}
                        width="71.111"
                        height="93.867"
                      />
                      <rect x="405.333" width="71.111" height="93.867" />
                      <rect
                        x="78.222"
                        y="0"
                        style={{ fill: "#ACABB1" }}
                        width="369.778"
                        height="469.333"
                      />
                      <rect
                        x="63.999"
                        y="0"
                        style={{ fill: "#818085" }}
                        width="199.111"
                        height="469.333"
                      />
                      <rect x="35.556" width="42.667" height="469.333" />
                      <g>
                        <path
                          style={{ fill: "#FFFFFF" }}
                          d="M130.62,220.029v-63.495h27.365c3.1,0,5.961,0.641,8.586,1.923c2.623,1.283,4.874,2.951,6.751,5.008..."
                        />
                      </g>
                    </g>
                  </svg>
                  <h3 className="text-3xl mt-6 font-bold">
                    Portfolio Websites
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Minimal, founder-led storytelling to showcase your work.
                    SEO-ready and credibility-driven.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-white/80">
                    <span>SEO Included</span>
                    <span>•</span>
                    <span>Animated</span>
                    <span>•</span>
                    <span>Impactful</span>
                  </div>
                </motion.div>
              </motion.div>
            </Section>

            {/* Animations */}
            <section className="overflow-x-hidden">
              <div className="flex p-5 gap-10">
                <div className="flex justify-center movel items-center gap-5 shrink-0">
                  <h1 className="text-[14vh] font-bold">Accelerates</h1>
                  <img
                    className="w-20 h-20 rounded-full"
                    src="/logo.png"
                    alt=""
                  />
                  <h1 className="text-[14vh] font-bold">Accelerates</h1>
                  <img
                    className="w-20 h-20 rounded-full"
                    src="/logo.png"
                    alt=""
                  />
                  <h1 className="text-[14vh] font-bold">Accelerates</h1>
                  <img
                    className="w-20 h-20 rounded-full"
                    src="/logo.png"
                    alt=""
                  />
                </div>
                <div className="flex justify-center movel items-center gap-5 shrink-0">
                  <h1 className="text-[14vh] font-bold">Accelerates</h1>
                  <img
                    className="w-20 h-20 rounded-full"
                    src="/logo.png"
                    alt=""
                  />
                  <h1 className="text-[14vh] font-bold">Accelerates</h1>
                  <img
                    className="w-20 h-20 rounded-full"
                    src="/logo.png"
                    alt=""
                  />
                  <h1 className="text-[14vh] font-bold">Accelerates</h1>
                  <img
                    className="w-20 h-20 rounded-full"
                    src="/logo.png"
                    alt=""
                  />
                </div>
              </div>
            </section>

            {/* PORTFOLIO */}
            <Section
              id="portfolio"
              kicker="Selected Work"
              title="Proof over promises"
              subtitle="Representative mocks to demonstrate quality and direction. Replace with your live case studies."
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden card"
                >
                  <div>
                    <h1 className="text-3xl text-transparent font-bold bg-gradient-to-r from-violet-300 to to-indigo-900 bg-clip-text">
                      Custom Coded Website
                    </h1>
                    <p className="mt-3">
                      Hand-crafted Next.js build with Core Web Vitals
                      optimization, technical SEO, and analytics baked in.
                      Sub-second load speed, built to rank and convert.
                    </p>
                  </div>
                  <figcaption className="mt-3 flex items-center justify-between text-sm">
                    <div className="font-bold text-xl">Satisfaction Rating</div>
                    <div className="text-white">⭐⭐⭐⭐⭐</div>
                  </figcaption>
                  <figcaption className="mt-3 flex items-center justify-between text-sm">
                    <div>
                      <div className="">Ecommarketing</div>
                    </div>
                    <a
                      href="https://www.ecommarketing.in/"
                      target="blank"
                      className="inline-flex items-center gap-2 hover:underline"
                    >
                      View Live
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12h14M13 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </figcaption>
                </motion.div>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden card"
                >
                  <div>
                    <h1 className="text-3xl text-transparent font-bold bg-gradient-to-r from-indigo-300 to to-blue-900 bg-clip-text">
                      E-Commerce Website
                    </h1>
                    <p className="mt-3">
                      A premium ethnic wear store built with React & Next.js.
                      SEO-optimized, mobile-first, secure checkout, COD, and
                      analytics—engineered for speed, trust, and conversions.
                    </p>
                  </div>
                  <figcaption className="mt-3 flex items-center justify-between text-sm">
                    <div className="font-bold text-xl">Satisfaction Rating</div>
                    <div className="text-white">⭐⭐⭐⭐⭐</div>
                  </figcaption>
                  <figcaption className="mt-3 flex items-center justify-between text-sm">
                    <div>
                      <div className="font-semibold">Joozowear</div>
                    </div>
                    <a
                      href="https://www.joozowear.com/"
                      target="blank"
                      className="inline-flex items-center gap-2 hover:underline"
                    >
                      View Live
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12h14M13 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </figcaption>
                </motion.div>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden card"
                >
                  <div>
                    <h1 className="text-3xl text-transparent font-bold bg-gradient-to-r from-blue-300 to to-green-900 bg-clip-text">
                      Portfolio Website
                    </h1>
                    <p className="mt-3">
                      I build robust, visually stunning web apps using React,
                      and Tailwind—paired with performance optimization and SEO
                      best practices for next-level user experience and growth.
                    </p>
                  </div>
                  <figcaption className="mt-3 flex items-center justify-between text-sm">
                    <div className="font-bold text-xl">Satisfaction Rating</div>
                    <div className="text-white">⭐⭐⭐⭐⭐</div>
                  </figcaption>
                  <figcaption className="mt-3 flex items-center justify-between text-sm">
                    <div>
                      <div className="font-semibold">Shashiraj</div>
                    </div>
                    <a
                      href="https://shashiraj.vercel.app/"
                      target="blank"
                      className="inline-flex items-center gap-2 hover:underline"
                    >
                      View Live
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12h14M13 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </figcaption>
                </motion.div>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden card"
                >
                  <div>
                    <h1 className="text-3xl text-transparent font-bold bg-gradient-to-r from-green-300 to to-yellow-900 bg-clip-text">
                      E-Commerce Website
                    </h1>
                    <p className="mt-3">
                      Shopify store featuring custom tufted rugs with playful
                      designs, built with SEO-ready architecture, free shipping,
                      fast UX, and scalable product templates. Powered by
                      Shopify + custom dev.
                    </p>
                  </div>
                  <figcaption className="mt-3 flex items-center justify-between text-sm">
                    <div className="font-bold text-xl">Satisfaction Rating</div>
                    <div className="text-white">⭐⭐⭐⭐⭐</div>
                  </figcaption>
                  <figcaption className="mt-3 flex items-center justify-between text-sm">
                    <div>
                      <div className="font-semibold">Mansarugs</div>
                    </div>
                    <a
                      href="https://mansarugs.com/"
                      target="blank"
                      className="inline-flex items-center gap-2 hover:underline"
                    >
                      View Live
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12h14M13 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </figcaption>
                </motion.div>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden card"
                >
                  <div>
                    <h1 className="text-3xl text-transparent font-bold bg-gradient-to-r from-yellow-300 to to-orange-900 bg-clip-text">
                      E-Commerce
                    </h1>
                    <p className="mt-3">
                      A high-performance online store for ethnic wear. Built
                      with React & Next.js, optimized for SEO, Core Web Vitals,
                      and mobile UX. Features secure checkout, COD, analytics,
                      and scalable product catalog.
                    </p>
                  </div>
                  <figcaption className="mt-3 flex items-center justify-between text-sm">
                    <div className="font-bold text-xl">Satisfaction Rating</div>
                    <div className="text-white">⭐⭐⭐⭐⭐</div>
                  </figcaption>
                  <figcaption className="mt-3 flex items-center justify-between text-sm">
                    <div>
                      <div className="font-semibold">Nayanest</div>
                    </div>
                    <a
                      href="https://nayanest.com/"
                      target="blank"
                      className="inline-flex items-center gap-2 hover:underline"
                    >
                      View Live
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12h14M13 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </figcaption>
                </motion.div>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden card"
                >
                  <div>
                    <h1 className="text-3xl text-transparent font-bold bg-gradient-to-r from-orange-300 to to-red-900 bg-clip-text">
                      Corporate Website
                    </h1>
                    <p className="mt-3">
                      A modern corporate site built with SEO-first architecture,
                      blazing performance, and a conversion-driven design.
                      Features schema, Core Web Vitals compliance, and scalable
                      content management.
                    </p>
                  </div>
                  <figcaption className="mt-3 flex items-center justify-between text-sm">
                    <div className="font-bold text-xl">Satisfaction Rating</div>
                    <div className="text-white">⭐⭐⭐⭐⭐</div>
                  </figcaption>
                  <figcaption className="mt-3 flex items-center justify-between text-sm">
                    <div>
                      <div className="font-semibold">Loid</div>
                    </div>
                    <a
                      href="https://loid.in/"
                      target="blank"
                      className="inline-flex items-center gap-2 hover:underline"
                    >
                      View Live
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12h14M13 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </figcaption>
                </motion.div>
              </div>
            </Section>

            {/* PRICING */}
            <Section
              id="pricing"
              kicker="Transparent Pricing"
              title="Built for ROI"
              subtitle="Indian‑friendly pricing with global standards. Every plan includes on‑page SEO, analytics, and performance hardening."
            >
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Launch",
                    price: "₹6000",
                    features: [
                      "Single page (landing)",
                      "SEO ready",
                      "Hosting assist",
                      "1 week delivery",
                    ],
                  },
                  {
                    name: "Growth",
                    price: "₹9,999",
                    features: [
                      "Multi‑page site",
                      "Contact + WhatsApp",
                      "E‑mail & analytics",
                      "2–3 weeks delivery",
                    ],
                    highlighted: true,
                  },
                  {
                    name: "Scale",
                    price: "₹15,000",
                    features: [
                      "E‑commerce or custom app",
                      "AI integrations",
                      "Care plan included",
                      "3–6 weeks delivery",
                    ],
                  },
                ].map((p, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6 }}
                    className={`card ${
                      p.highlighted ? "border-white/20 shadow-elevate" : ""
                    }`}
                  >
                    {p.highlighted && (
                      <div className="absolute -mt-8 ml-4 inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-3 py-1 text-xs">
                        Most popular
                      </div>
                    )}
                    <div className="text-xl font-extrabold">{p.name}</div>
                    <div className="mt-2 text-3xl font-black">{p.price}</div>
                    <ul className="mt-4 space-y-2 text-sm text-white/80">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          • {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/919718179994?text=I'm%20interested%20in%20the%20${p.name}%20plan`}
                      target="blank"
                      className={`btn mt-5 ${
                        p.highlighted ? "btn-primary" : "btn-ghost"
                      }`}
                    >
                      Start {p.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </Section>

            {/* FAQS */}
            <Section
              id="faqs"
              kicker="FAQs"
              title="Straight answers"
              subtitle="No vague promises — here’s how we operate."
            >
              <FAQ />
            </Section>
            {/* CONTACT */}
            <Section
              id="contact"
              kicker="Let’s Build"
              title="Tell us your growth goal"
              subtitle="We’ll reply within one business day."
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const name = e.target.name.value;
                    const email = e.target.email.value;
                    const message = e.target.message.value;
                    const number = e.target.phone.value;
                    const wNumber =
                      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919718179994";
                    const formattedNumber = wNumber.replace(/\D/g, "");

                    const txt = `Project inquiry: ${name} | ${email} | ${message}`;
                    window.open(
                      `https://wa.me/${formattedNumber}?text=${encodeURIComponent(
                        txt
                      )}`,
                      "_blank"
                    );
                  }}
                  className="card"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-white/70">Name*</label>
                      <input
                        name="name"
                        required
                        className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/30"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-white/70">Email*</label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/30"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-white/70">
                        Phone Number
                      </label>
                      <input
                        name="phone"
                        type="phone"
                        className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/30"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm text-white/70">Message*</label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                        className="mt-1 w-full rounded-xl bg-slate-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/30"
                        placeholder="Describe your project, goals, and deadline"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-4">
                    Send via WhatsApp
                  </button>
                  <p className="mt-3 text-xs text-white/60">
                    By submitting, you consent to being contacted via WhatsApp
                    or email.
                  </p>
                </form>

                <div className="card">
                  <div className="grid gap-4 text-sm">
                    <div className="flex items-start gap-3">
                      📞 <span>+91 9718179994</span>
                    </div>
                    <div className="flex items-start gap-3">
                      ✉️ <span>rishiraj1360@gmail.com</span>
                    </div>
                    <div className="flex items-start gap-3">
                      🌍 <span>India • Serving worldwide</span>
                    </div>
                    <div className="flex items-start gap-3">
                      🕒 <span>Available: Mon–Sun, 10 AM – 9 PM IST</span>
                    </div>
                    <div className="flex items-start gap-3">
                      ⚡ <span>Avg. Response: Within 1 Business Day</span>
                    </div>
                    <div className="flex items-start gap-3">
                      💻
                      <span>
                        Services: Web Development | SEO | E-Commerce | Custom
                        Solutions
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      🛡️ <span>Trusted by SMBs & Startups</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-2 hover:bg-white/10"
                        href={
                          process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
                          "https://www.instagram.com/rishiraj_.___/"
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram
                      </a>
                      <a
                        className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-2 hover:bg-white/10"
                        href={
                          process.env.NEXT_PUBLIC_LINKEDIN_URL ||
                          "https://www.linkedin.com/in/rishiraj1360/"
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <footer className="border-t border-white/10 bg-slate-950/60">
              <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    width={20}
                    height={20}
                    alt="logo"
                    className="rounded-full"
                  />
                  <span className="font-bold">Accelerates</span>
                </div>
                <div className="text-xs text-white/60">
                  © {new Date().getFullYear()} Accelerates. All rights reserved.
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <a href="#privacy" className="hover:underline">
                    Privacy
                  </a>
                  <a href="#terms" className="hover:underline">
                    Terms
                  </a>
                  <a href="/sitemap.xml" className="hover:underline">
                    Sitemap
                  </a>
                </div>
              </div>
            </footer>

            <WhatsAppWidget />
          </div>
        )}
      </div>
    </MouseFollower>
  );
}
