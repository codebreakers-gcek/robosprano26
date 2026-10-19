"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  Camera,
  Share2,
  Phone,
  Trophy,
  IndianRupee,
  CircleSmall,
  Check,
  Copy,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RoboticsEvent } from "@/data/roboticsEvents";

interface EventDetailClientProps {
  event: RoboticsEvent;
}

export default function EventDetailClient({ event }: EventDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<null | {
    url: string;
    caption: string;
  }>(null);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedItem, setCopiedItem] = useState("");

  const handleShare = () => {
    setIsShareMenuOpen(!isShareMenuOpen);
  };

  const copyAllToClipboard = async () => {
    try {
      const shareText = `${event.title} | Robosprano 2026
${event.description}
${event.date} at ${event.time}
Venue: ${event.venue}
Team Size: ${event.teamSize}
${event.fee ? `Entry Fee: ${event.fee}` : ""}
View Details: ${window.location.href}`;

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareText);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = shareText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      setCopiedItem("all");
      setTimeout(() => {
        setCopied(false);
        setCopiedItem("");
      }, 2000);

      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile && navigator.share) {
        try {
          await navigator.share({
            title: `${event.title} | Robosprano 2026`,
            text: shareText,
          });
        } catch {
          // User dismissed share dialog
        }
      }
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white md:pt-12 pt-16">
      <div className="max-w-7xl mx-auto">
        {/* ========================================================================= */}
        {/* HERO BANNER SECTION (Matches reference screenshot)                        */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[60vh] md:h-[60vh] w-full mt-4 md:mt-8"
        >
          <div className="absolute inset-0">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          {/* Top Navigation Pill Buttons */}
          <div className="absolute top-8 left-8 right-8 flex justify-between z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/events"
                className="inline-flex items-center bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-black/50 transition-colors text-sm font-medium"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Events
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-black/50 transition-colors text-sm font-medium cursor-pointer"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </button>

              <AnimatePresence>
                {isShareMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-72 bg-neutral-900 rounded-xl border border-white/10 overflow-hidden shadow-2xl z-20"
                  >
                    <div className="py-3 px-4 border-b border-white/10">
                      <h3 className="text-sm font-medium text-white">
                        Share This Event
                      </h3>
                    </div>
                    <div className="p-2">
                      <button
                        type="button"
                        onClick={copyAllToClipboard}
                        className="w-full flex items-center px-4 py-3 text-left text-sm text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                      >
                        {copied && copiedItem === "all" ? (
                          <Check className="w-5 h-5 mr-3 text-green-400" />
                        ) : (
                          <Copy className="w-5 h-5 mr-3 text-white/70" />
                        )}
                        <span>
                          {copied && copiedItem === "all"
                            ? "All content copied!"
                            : "Share event details"}
                        </span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Bottom Hero Title & Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-0 left-0 right-0 p-8 md:p-16"
          >
            <div className="max-w-7xl mx-auto">
              <span className="inline-block px-3 py-1 rounded-full text-sm bg-white/10 backdrop-blur-sm text-white mb-4 font-medium">
                {event.badge || "Robosprano"}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                {event.title}
              </h1>
            </div>
          </motion.div>
        </motion.div>

        {/* ========================================================================= */}
        {/* MAIN BODY GRID: 2 COLUMNS LEFT, 1 COLUMN SIDEBAR RIGHT                    */}
        {/* ========================================================================= */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* --------------------------------------------------------------------- */}
            {/* LEFT COLUMN: About, Bot Specs, Rules & Guidelines, Gallery            */}
            {/* --------------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 space-y-12"
            >
              {/* About the Event */}
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  About the Event
                </h2>
                <p className="text-neutral-300 text-lg leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Bot Specifications */}
              {event.botSpecifications && event.botSpecifications.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    Bot Specifications
                  </h2>
                  <ul className="space-y-4">
                    {event.botSpecifications.map((specification, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                        className="flex items-start"
                      >
                        <CircleSmall className="w-5 h-5 fill-white/80 text-white/80 mt-1 shrink-0" />
                        <span className="text-neutral-300 ml-4 leading-relaxed">
                          {specification}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Rules & Guidelines */}
              {event.rules && event.rules.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    Rules &amp; Guidelines
                  </h2>
                  <ul className="space-y-4">
                    {event.rules.map((rule, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.05 }}
                        className="flex items-start"
                      >
                        <CircleSmall className="w-5 h-5 fill-white/80 text-white/80 mt-1 shrink-0" />
                        <span className="text-neutral-300 ml-4 leading-relaxed">
                          {rule}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

            </motion.div>

            {/* --------------------------------------------------------------------- */}
            {/* RIGHT SIDEBAR: Event Details, Prizes, Timeline, Contact               */}
            {/* --------------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              {/* Card 1: Event Details */}
              <div className="bg-neutral-900 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Event Details
                </h3>

                <div className="flex items-start space-x-4 mb-6 group">
                  <Calendar className="w-6 h-6 text-white/50 shrink-0 group-hover:text-white/70 transition-colors" />
                  <div>
                    <p className="text-white font-medium group-hover:text-white/90 transition-colors">
                      {event.date}
                    </p>
                    <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      {event.time}
                    </p>
                  </div>
                </div>

                {event.prizePool && (
                  <div className="flex items-start space-x-4 mb-6 group">
                    <Trophy className="w-6 h-6 text-white/50 shrink-0 group-hover:text-white/70 transition-colors" />
                    <div>
                      <p className="text-white font-medium group-hover:text-white/90 transition-colors">
                        Prize Pool/Prizes
                      </p>
                      <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                        {event.prizePool}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-start space-x-4 mb-6 group">
                  <MapPin className="w-6 h-6 text-white/50 shrink-0 group-hover:text-white/70 transition-colors" />
                  <div>
                    <p className="text-white font-medium group-hover:text-white/90 transition-colors">
                      Venue
                    </p>
                    <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      {event.venue || event.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-8 group">
                  <Users className="w-6 h-6 text-white/50 shrink-0 group-hover:text-white/70 transition-colors" />
                  <div>
                    <p className="text-white font-medium group-hover:text-white/90 transition-colors">
                      Team Size
                    </p>
                    <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                      {event.teamSize}
                    </p>
                  </div>
                </div>

                {event.fee && (
                  <div className="flex items-start space-x-4 mb-8 group">
                    <IndianRupee className="w-6 h-6 text-white/50 shrink-0 group-hover:text-white/70 transition-colors" />
                    <div>
                      <p className="text-white font-medium group-hover:text-white/90 transition-colors">
                        Entry Fees
                      </p>
                      <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">
                        {event.fee}
                      </p>
                    </div>
                  </div>
                )}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {event.closed ? (
                    <button
                      type="button"
                      className="flex items-center justify-center w-full bg-gray-500 text-white py-3 px-6 rounded-xl font-medium cursor-not-allowed"
                      disabled
                    >
                      Registrations Are Closed
                    </button>
                  ) : (
                    <a
                      href={event.enrollLink || "https://forms.google.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-white text-black py-3 px-6 rounded-xl font-medium hover:bg-neutral-200 transition-colors cursor-pointer"
                    >
                      <span>Register Now</span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  )}
                </motion.div>
              </div>


              {/* Card 4: Contact */}
              {event.contact && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-neutral-900 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">
                    Contact
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(event.contact).map(([name, phone]) => (
                      <div
                        key={name}
                        className="flex items-start space-x-4 group"
                      >
                        <Phone className="w-5 h-5 text-white/50 shrink-0 group-hover:text-white/70 transition-colors" />
                        <div>
                          <p className="text-white font-medium group-hover:text-white/90 transition-colors">
                            {name}
                          </p>
                          <a
                            href={`tel:${phone}`}
                            className="text-neutral-400 group-hover:text-neutral-300 transition-colors"
                          >
                            {phone}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LIGHTBOX MODAL FOR GALLERY IMAGES                                         */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-7xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.url}
                  alt={selectedImage.caption}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                />
                <p className="text-white text-center mt-4 font-medium">
                  {selectedImage.caption}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
