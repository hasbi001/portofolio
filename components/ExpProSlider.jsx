"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ExpProSlider({
  title,
  eyebrow,
  description,
  items,
  accent = "violet",
}) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const modalContentRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const total = items.length;

  /*
   * ================================
   * SLIDER
   * ================================
   */

  const goTo = (index) => {
    if (!trackRef.current || !viewportRef.current) {
      return;
    }

    const nextIndex = Math.max(
      0,
      Math.min(index, total - 1)
    );

    setActiveIndex(nextIndex);

    const cards = trackRef.current.children;
    const card = cards[nextIndex];

    if (!card) {
      return;
    }

    const viewport = viewportRef.current;

    const cardLeft = card.offsetLeft;

    const target =
      cardLeft -
      (viewport.clientWidth - card.offsetWidth) / 2;

    gsap.to(trackRef.current, {
      x: -Math.max(0, target),
      duration: 0.8,
      ease: "power3.out",
    });

    // Animate active card
    gsap.to(cards, {
      scale: 0.94,
      opacity: 0.55,
      duration: 0.35,
      ease: "power2.out",
    });

    gsap.to(card, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  /*
   * ================================
   * INITIAL ANIMATION
   * ================================
   */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        trackRef.current?.children || [],
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 0.94,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        }
      );

      if (trackRef.current?.children?.[0]) {
        gsap.to(trackRef.current.children[0], {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: 0.3,
        });
      }
    }, viewportRef);

    return () => ctx.revert();
  }, []);

  /*
   * ================================
   * RESIZE
   * ================================
   */

  useEffect(() => {
    const handleResize = () => {
      goTo(activeIndex);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex]);

  /*
   * ================================
   * MODAL OPEN
   * ================================
   */

  useEffect(() => {
    if (!selectedItem) {
      return;
    }

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      gsap.fromTo(
        backdropRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        modalContentRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
          rotateX: 8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.65,
          ease: "back.out(1.5)",
        }
      );
    }, modalRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  /*
   * ================================
   * MODAL CLOSE
   * ================================
   */

  const closeModal = () => {
    if (!selectedItem) {
      return;
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        setSelectedItem(null);
        document.body.style.overflow = "";
      },
    });

    timeline
      .to(modalContentRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.94,
        duration: 0.25,
        ease: "power2.in",
      })
      .to(
        backdropRef.current,
        {
          opacity: 0,
          duration: 0.2,
        },
        "<"
      );
  };

  /*
   * ================================
   * KEYBOARD
   * ================================
   */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }

      if (!selectedItem && event.key === "ArrowRight") {
        goTo(activeIndex + 1);
      }

      if (!selectedItem && event.key === "ArrowLeft") {
        goTo(activeIndex - 1);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  });

  const accentStyle =
    accent === "cyan"
      ? {
          text: "text-cyan-300",
          bg: "bg-cyan-400/10",
          border: "border-cyan-400/20",
          dot: "bg-cyan-300",
        }
      : {
          text: "text-violet-300",
          bg: "bg-violet-400/10",
          border: "border-violet-400/20",
          dot: "bg-violet-300",
        };

  return (
    <>
      <section className="container-page py-24">

        {/* HEADER */}

        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p
              className={`mb-3 text-sm font-semibold uppercase tracking-[.25em] ${accentStyle.text}`}
            >
              {eyebrow}
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              {title}
            </h2>

            {description && (
              <p className="mt-4 max-w-2xl leading-7 text-gray-400">
                {description}
              </p>
            )}

          </div>

          {/* NAVIGATION */}

          <div className="flex gap-2">

            <button
              onClick={() =>
                goTo(activeIndex - 1)
              }
              disabled={activeIndex === 0}
              className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:bg-white/5 disabled:opacity-30"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={() =>
                goTo(activeIndex + 1)
              }
              disabled={
                activeIndex === total - 1
              }
              className="rounded-full border border-white/10 p-3 text-gray-300 transition hover:bg-white/5 disabled:opacity-30"
            >
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

        {/* SLIDER */}

        <div
          ref={viewportRef}
          className="overflow-hidden"
        >

          <div
            ref={trackRef}
            className="slider-track flex gap-5"
          >

            {items.map((item, index) => (

              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setSelectedItem(item);
                  setActiveIndex(index);
                }}
                className="slider-card glass group shrink-0 rounded-3xl p-6 text-left"
              >

                <div className="mb-6 flex items-start justify-between">

                  <div
                    className={`rounded-2xl p-3 ${accentStyle.bg} ${accentStyle.text}`}
                  >
                    <Image
                        src={item.icon}
                        alt={item.title}
                        width={36}
                        height={36}
                        className="h-9 w-9 object-contain"
                    />
                  </div>

                  <span className="text-xs text-gray-600">
                    {String(index + 1).padStart(2, "0")}
                    {" / "}
                    {String(total).padStart(2, "0")}
                  </span>

                </div>

                <p
                  className={`text-xs font-semibold uppercase tracking-widest ${accentStyle.text}`}
                >
                  {item.period}
                </p>

                <h3 className="mt-2 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {item.company || item.category}
                </p>

                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                  {item.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {item.tags
                    ?.slice(0, 4)
                    .map((tag) => (

                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400"
                      >
                        {tag}
                      </span>

                    ))}

                </div>

                <div className="mt-7 flex items-center justify-between border-t border-white/5 pt-5">

                  <span className="text-sm font-medium">
                    View details
                  </span>

                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />

                </div>

              </button>

            ))}

          </div>

        </div>

        {/* PAGINATION */}

        <div className="mt-7 flex items-center justify-between">

          <div className="flex gap-1.5">

            {items.map((item, index) => (

              <button
                key={item.id}
                onClick={() => goTo(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeIndex
                    ? `w-8 ${accentStyle.dot}`
                    : "w-2 bg-white/15"
                }`}
              />

            ))}

          </div>

          <p className="hidden text-xs text-gray-600 sm:block">
            Click card for details · ← →
          </p>

        </div>

      </section>

      {/* ================================
          MODAL
      ================================= */}

      {selectedItem && (

        <div
          ref={modalRef}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >

          {/* BACKDROP */}

          <div
            ref={backdropRef}
            onClick={closeModal}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* CONTENT */}

          <div
            ref={modalContentRef}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-[#0b1020] p-6 shadow-2xl sm:p-8"
          >

            {/* CLOSE */}

            <button
              onClick={closeModal}
              className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-gray-400 hover:bg-white/5 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="pr-10">

              {/* HEADER */}

              <div className="mb-6 flex items-center gap-4">

                <div
                  className={`rounded-2xl p-4 ${accentStyle.bg} ${accentStyle.text}`}
                >
                  <span className="text-3xl">
                    <Image
                        src={selectedItem.icon}
                        alt={selectedItem.title}
                        width={36}
                        height={36}
                        className="h-9 w-9 object-contain"
                    />
                    
                  </span>
                </div>

                <div>

                  <p
                    className={`text-xs font-semibold uppercase tracking-widest ${accentStyle.text}`}
                  >
                    {selectedItem.period}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    {selectedItem.company ||
                      selectedItem.category}
                  </p>

                </div>

              </div>

              <h3 className="text-3xl font-black">
                {selectedItem.title}
              </h3>

              {/* DESCRIPTION */}

              <p className="mt-5 leading-7 text-gray-400">
                {selectedItem.description}
              </p>

              {/* RESPONSIBILITIES */}

              {selectedItem.responsibilities?.length > 0 && (

                <div className="mt-8">

                  <h4 className="text-sm font-semibold uppercase tracking-widest">
                    Responsibilities
                  </h4>

                  <ul className="mt-4 space-y-3">

                    {selectedItem.responsibilities.map(
                      (item) => (

                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-gray-400"
                        >

                          <span
                            className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accentStyle.dot}`}
                          />

                          {item}

                        </li>

                      )
                    )}

                  </ul>

                </div>

              )}

              {/* ACHIEVEMENTS */}

              {selectedItem.achievements?.length > 0 && (

                <div className="mt-8">

                  <h4 className="text-sm font-semibold uppercase tracking-widest">
                    Key Achievements
                  </h4>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">

                    {selectedItem.achievements.map(
                      (item) => (

                        <div
                          key={item}
                          className="rounded-2xl border border-white/5 bg-white/[.03] p-4 text-sm leading-6 text-gray-400"
                        >
                          {item}
                        </div>

                      )
                    )}

                  </div>

                </div>

              )}

              {/* TECHNOLOGIES */}

              <div className="mt-8 flex flex-wrap gap-2">

                {selectedItem.tags?.map(
                  (tag) => (

                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[.03] px-3 py-1.5 text-xs text-gray-300"
                    >
                      {tag}
                    </span>

                  )
                )}

              </div>

              {/* LINKS */}

              {(selectedItem.demo ||
                selectedItem.github) && (

                <div className="mt-8 flex flex-wrap gap-3 border-t border-white/5 pt-6">

                  {selectedItem.demo && (

                    <a
                      href={selectedItem.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black"
                    >
                      Live Project
                      <ExternalLink size={16} />
                    </a>

                  )}

                  {selectedItem.github && (

                    <a
                      href={selectedItem.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-gray-300 hover:bg-white/5"
                    >
                      <FaGithub size={16} />
                      Source Code
                    </a>

                  )}

                </div>

              )}

            </div>

          </div>

        </div>

      )}

    </>
  );
}