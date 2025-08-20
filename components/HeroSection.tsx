"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Play,
  Shield,
  Users,
  TrendingUp,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";

type ButtonSize = "lg" | string;

const Button = ({
  children,
  size = "lg",
  variant = "default",
  className,
  ...props
}: {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: "default" | "outline";
  className?: string;
  [key: string]: any;
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const sizeClasses = {
    lg: "h-14 px-10 py-4 text-lg",
  };

  const variantClasses = {
    default: "bg-gradient-to-r shadow-lg hover:shadow-xl",
    outline:
      "border-2 bg-white/10 backdrop-blur-md hover:bg-white/20 shadow-lg hover:shadow-xl",
  };

  return (
    <button
      className={`${baseClasses} ${
        sizeClasses[size as keyof typeof sizeClasses] || sizeClasses.lg
      } ${variantClasses[variant] || variantClasses.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const StatsCard = ({
  icon: Icon,
  title,
  value,
  delay,
}: {
  icon: any;
  title: string;
  value: string;
  delay: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-gradient-to-br from-[#961128] to-[#26426d] rounded-lg">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <span className="text-sm font-medium text-gray-600">{title}</span>
      </div>
      <div className="text-2xl font-bold bg-gradient-to-r from-[#961128] to-[#26426d] bg-clip-text text-transparent">
        {value}
      </div>
    </div>
  );
};

const TrustBadge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-gray-700 ${className}`}
  >
    {children}
  </div>
);

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    // Ensure video plays on component mount
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log("Auto-play was prevented:", error);
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Try to play video after a short delay
    const timer = setTimeout(playVideo, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Advanced Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-cover scale-105"
          onLoadStart={() => console.log("Video loading started")}
          onCanPlay={() => {
            console.log("Video can play");
            if (videoRef.current) {
              videoRef.current.play();
            }
          }}
          onError={(e) => console.log("Video error:", e)}
        >
          <source
            src="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/quickbooks-online/web/motion-and-video/FY25-TierA-Campaign-Hero-Video-Bentobox-1-US.mp4"
            type="video/mp4"
          />
          <source
            src="https://quickbooks.intuit.com/oidam/intuit/sbseg/en_us/quickbooks-online/web/motion-and-video/FY25-TierA-Campaign-Hero-Video-Bentobox-1-US.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        {/* Dynamic Overlay with Mouse Interaction */}
        <div
  className="absolute inset-0"
  style={{
    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.6) 100%)`,
  }}
></div>


        {/* Subtle Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Enhanced Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tight">
                <span className="block text-white">Run your business</span>
                <span className="block bg-gradient-to-r from-[#961128] via-[#b91c3c] to-[#26426d] bg-clip-text text-transparent">
                  smarter
                </span>
                <span className="block text-white    text-4xl lg:text-5xl font-semibold mt-2">
                  with MightyFyn
                </span>
              </h1>

              <p className="lg:text-xl text-white leading-relaxed max-w-2xl font-medium">
                Transform your business operations with our comprehensive suite
                of tools. — everything you need to scale efficiently.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-[#961128] via-[#b91c3c] to-[#26426d] hover:from-[#7a0e20] hover:via-[#9f1c2f] hover:to-[#1e3557] text-white focus:ring-[#961128]/50"
              >
                Start Free 14-Day Trial
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>

                <Button
                  onClick={() => router.push("/pricing")}
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#26426d]/30 text-white hover:border-[#26426d] focus:ring-[#26426d]/20"
                >
                  See Plan & Pricing
                </Button>
            </div>

            {/* Enhanced Social Proof */}
            {/* <div className="flex flex-wrap items-center gap-6 pt-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[
                    {
                      bg: "bg-gradient-to-br from-blue-500 to-purple-600",
                      text: "A",
                    },
                    {
                      bg: "bg-gradient-to-br from-green-500 to-teal-600",
                      text: "M",
                    },
                    {
                      bg: "bg-gradient-to-br from-pink-500 to-rose-600",
                      text: "S",
                    },
                    {
                      bg: "bg-gradient-to-br from-orange-500 to-amber-600",
                      text: "R",
                    },
                  ].map((avatar, i) => (
                    <div
                      key={i}
                      className={`w-12 h-12 rounded-full border-3 border-white ${avatar.bg} flex items-center justify-center text-sm font-bold text-white shadow-lg`}
                    >
                      {avatar.text}
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-3 border-white bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600 shadow-lg">
                    +5K
                  </div>
                </div>
                <div className="text-base text-gray-600">
                  Join <span className="font-bold text-[#961128]">10,000+</span>{" "}
                  growing businesses
                </div>
              </div>
            </div> */}
          </div>

          {/* Enhanced Right Side */}
          <div className="lg:col-span-5 relative">
            {/* Main Dashboard Preview */}
            {/* <div className="relative transform hover:scale-[1.02] transition-all duration-500">
              <div className="bg-gradient-to-br from-[#961128] via-[#b91c3c] to-[#26426d] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-inner">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#961128] to-[#26426d] rounded-lg"></div>
                        <span className="font-semibold text-gray-800">
                          MightyFyn Dashboard
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>

                    
                    <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-end justify-center p-4">
                      <div className="flex items-end gap-2 w-full">
                        {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-t from-[#961128] to-[#26426d] rounded-t"
                            style={{ height: `${height}%`, width: "12%" }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-[#961128]">
                          ₹2.4L
                        </div>
                        <div className="text-xs text-gray-600">Revenue</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">
                          147
                        </div>
                        <div className="text-xs text-gray-600">Invoices</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">
                          98%
                        </div>
                        <div className="text-xs text-gray-600">Accuracy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
