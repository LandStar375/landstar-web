"use client";

import { useRef, useState } from "react";
import { BUSINESS } from "@/data/constants";
import { HiOutlinePhone, HiOutlineXMark } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function FloatingCallButton() {
  const [open, setOpen] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    startOffsetX: number;
    startOffsetY: number;
    minOffsetX: number;
    maxOffsetX: number;
    minOffsetY: number;
    maxOffsetY: number;
    moved: boolean;
  } | null>(null);
  const suppressClickRef = useRef(false);

  const whatsappUrl = `https://wa.me/${BUSINESS.whatsappPhone}`;

  function handlePointerDown(e: React.PointerEvent<HTMLButtonElement>) {
    if (e.pointerType === "mouse" && e.button !== 0) {
      return;
    }

    const wrapper = wrapperRef.current;
    if (!wrapper) {
      return;
    }

    const rect = wrapper.getBoundingClientRect();
    const edgeGap = 12;
    const bottomGap = window.innerWidth < 768 ? 88 : 16;

    dragStateRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      startOffsetX: offset.x,
      startOffsetY: offset.y,
      minOffsetX: offset.x + (edgeGap - rect.left),
      maxOffsetX:
        offset.x + (window.innerWidth - rect.width - edgeGap - rect.left),
      minOffsetY: offset.y + (edgeGap - rect.top),
      maxOffsetY:
        offset.y +
        (window.innerHeight - rect.height - bottomGap - rect.top),
      moved: false,
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLButtonElement>) {
    const dragState = dragStateRef.current;
    if (!dragState || dragState.pointerId !== e.pointerId) {
      return;
    }

    const deltaX = e.clientX - dragState.startX;
    const deltaY = e.clientY - dragState.startY;

    if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
      dragState.moved = true;
    }

    setOffset({
      x: clamp(
        dragState.startOffsetX + deltaX,
        dragState.minOffsetX,
        dragState.maxOffsetX
      ),
      y: clamp(
        dragState.startOffsetY + deltaY,
        dragState.minOffsetY,
        dragState.maxOffsetY
      ),
    });
  }

  function handlePointerEnd(e: React.PointerEvent<HTMLButtonElement>) {
    const dragState = dragStateRef.current;
    if (!dragState || dragState.pointerId !== e.pointerId) {
      return;
    }

    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    if (dragState.moved) {
      suppressClickRef.current = true;
    }

    dragStateRef.current = null;
  }

  function handleToggle() {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }

    setOpen((prev) => !prev);
  }

  return (
    <div
      ref={wrapperRef}
      className="fixed bottom-20 right-4 z-50 md:bottom-6"
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      <div className="relative h-14 w-14">
        <div
          className={`pointer-events-none absolute bottom-[-38px] right-[-38px] h-36 w-36 rounded-full border border-brand-200/70 bg-brand-50/80 transition-all duration-300 ${
            open ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        />
        <div
          className={`pointer-events-none absolute bottom-[-18px] right-[-18px] h-24 w-24 rounded-full border border-brand-100/70 transition-all duration-300 ${
            open ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        />

        <a
          href={`tel:${BUSINESS.phoneHref}`}
          aria-label="Call Land Star"
          className={`absolute bottom-1 right-1 flex h-12 w-12 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg transition-all duration-300 hover:bg-brand-800 ${
            open
              ? "pointer-events-auto -translate-x-[84px] -translate-y-[14px] scale-100 opacity-100"
              : "pointer-events-none translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        >
          <HiOutlinePhone className="h-5 w-5" />
          <span
            className={`pointer-events-none absolute right-14 whitespace-nowrap rounded-full bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-300 ${
              open ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
            }`}
          >
            Call
          </span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open WhatsApp chat"
          className={`absolute bottom-1 right-1 flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-all duration-300 hover:bg-green-700 ${
            open
              ? "pointer-events-auto -translate-x-[44px] -translate-y-[88px] scale-100 opacity-100"
              : "pointer-events-none translate-x-0 translate-y-0 scale-0 opacity-0"
          }`}
        >
          <FaWhatsapp className="h-5 w-5" />
          <span
            className={`pointer-events-none absolute right-14 whitespace-nowrap rounded-full bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-300 ${
              open ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
            }`}
          >
            WhatsApp
          </span>
        </a>

        <button
          type="button"
          onClick={handleToggle}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerEnd}
          onPointerCancel={handlePointerEnd}
          className={`absolute bottom-0 right-0 flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 ${
            open
              ? "rotate-90 bg-slate-900 text-white"
              : "bg-brand-700 text-white hover:bg-brand-800"
          } touch-none select-none cursor-grab active:cursor-grabbing`}
          aria-expanded={open}
          aria-label={open ? "Close contact options" : "Open contact options"}
        >
          {open ? (
            <HiOutlineXMark className="h-6 w-6" />
          ) : (
            <HiOutlinePhone className="h-6 w-6" />
          )}
        </button>
      </div>
    </div>
  );
}
