'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Lightbox.module.scss';

interface LightboxProps {
  images: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function Lightbox({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
  title,
}: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoomLevel(1);
  }, [initialIndex, isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-') handleZoomOut();
      if (e.key === '0') handleResetZoom();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, zoomLevel]);

  if (!isOpen) return null;

  const handleNext = () => {
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.35, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.35, 0.7));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Gallery Lightbox">
      {/* Top Toolbar */}
      <div className={styles.toolbar}>
        <div className={styles.imageMeta}>
          <span className={styles.counter}>
            {currentIndex + 1} / {images.length}
          </span>
          {title && <span className={styles.imageTitle}>{title}</span>}
        </div>

        {/* Zoom In, Zoom Out, Reset, and Close */}
        <div className={styles.controlButtons}>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={handleZoomIn}
            title="Zoom In (+)"
            aria-label="Zoom in"
          >
            <ZoomIn size={18} />
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={handleZoomOut}
            title="Zoom Out (-)"
            aria-label="Zoom out"
          >
            <ZoomOut size={18} />
          </button>
          <button
            type="button"
            className={styles.toolBtn}
            onClick={handleResetZoom}
            title="Reset Zoom (0)"
            aria-label="Reset zoom"
          >
            <RotateCcw size={18} />
          </button>
          <div className={styles.separator} />
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            title="Close (ESC)"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Main Viewport */}
      <div className={styles.viewport}>
        <button
          type="button"
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={handlePrev}
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>

        <div className={styles.stage}>
          <div
            className={styles.imageContainer}
            style={{
              transform: `scale(${zoomLevel})`,
              cursor: zoomLevel > 1 ? 'grab' : 'zoom-in',
            }}
            onClick={() => {
              if (zoomLevel === 1) handleZoomIn();
              else handleResetZoom();
            }}
          >
            <Image
              src={images[currentIndex]}
              alt={`Gallery visual ${currentIndex + 1}`}
              fill
              sizes="90vw"
              priority
              className={styles.lightboxImage}
            />
          </div>
        </div>

        <button
          type="button"
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={handleNext}
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Bottom Thumbnails Strip */}
      <div className={styles.thumbnailsBar}>
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            className={`${styles.thumbBtn} ${currentIndex === idx ? styles.activeThumb : ''}`}
            onClick={() => {
              setZoomLevel(1);
              setCurrentIndex(idx);
            }}
          >
            <Image
              src={img}
              alt={`Thumb ${idx + 1}`}
              width={64}
              height={44}
              className={styles.thumbImg}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
