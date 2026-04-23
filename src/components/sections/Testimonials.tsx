"use client";

import React, { useEffect, useState, useRef } from 'react';
import styles from './Testimonials.module.css';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Review {
  reviewId: string;
  comment: string;
  starRating: number;
  reviewer: {
    displayName: string;
    profilePhotoUrl: string;
  };
  createTime: string;
}

interface FeaturableData {
  reviews: Review[];
  average_rating: number;
  total_reviews: number;
}

const GoogleLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.51 6.16-4.51z" fill="#EA4335"/>
  </svg>
);

const ReviewCard = ({ review, reviewKey, isExpanded, onToggle, formatDate }: { 
  review: Review, 
  reviewKey: string, 
  isExpanded: boolean, 
  onToggle: (key: string) => void,
  formatDate: (date: string) => string 
}) => {
  const [shouldShowReadMore, setShouldShowReadMore] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // Check if text is actually truncated (scrollHeight > clientHeight)
      const isTruncated = textRef.current.scrollHeight > textRef.current.clientHeight;
      setShouldShowReadMore(isTruncated);
    }
  }, [review.comment]);

  return (
    <motion.div 
      layout
      className={styles.reviewCard}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.cardHeader}>
        {review.reviewer?.profilePhotoUrl ? (
          <img 
            src={review.reviewer.profilePhotoUrl} 
            alt={review.reviewer.displayName || "Patient"} 
            className={styles.userPhoto}
          />
        ) : (
          <div className={styles.photoPlaceholder}>
            {review.reviewer?.displayName?.[0] || 'P'}
          </div>
        )}
        <div className={styles.userInfo}>
          <h4 className={styles.userName}>{review.reviewer?.displayName || 'Patient'}</h4>
          <span className={styles.date}>{formatDate(review.createTime)}</span>
        </div>
      </div>

      <div className={`${styles.textContainer} ${isExpanded ? styles.isExpanded : ''}`}>
        <p 
          ref={textRef}
          className={`${styles.reviewText} ${isExpanded ? styles.expanded : ''}`}
        >
          {review.comment}
        </p>
        {(shouldShowReadMore || isExpanded) && (
          <span 
            className={styles.readMore} 
            onClick={(e) => {
              e.stopPropagation();
              onToggle(reviewKey);
            }}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </span>
        )}
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              fill={i < (review.starRating || 5) ? "#FBBC04" : "none"} 
              stroke="none"
            />
          ))}
        </div>
        <GoogleLogo />
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [data, setData] = useState<FeaturableData | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (response.ok) {
          const result = await response.json();
          if (result.reviews) {
            result.reviews = result.reviews.filter((r: any) => 
              (r.comment && r.comment.trim().length > 0) || (r.starRating >= 4)
            );
          }
          setData(result);
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const nextReviews = () => {
    if (!data || !data.reviews) return;
    setStartIndex((prev) => (prev + 1) % data.reviews.length);
  };

  const prevReviews = () => {
    if (!data || !data.reviews) return;
    setStartIndex((prev) => (prev - 1 + data.reviews.length) % data.reviews.length);
  };

  const toggleExpand = (key: string) => {
    setExpandedKeys(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  if (loading) return null;
  if (!data || !data.reviews || data.reviews.length === 0) return null;

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    try {
      const date = new Date(dateStr);
      const now = new Date();
      const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 3600 * 24));
      
      if (diffDays < 1) return 'Today';
      if (diffDays < 30) return `${diffDays} days ago`;
      if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
      return `${Math.floor(diffDays / 365)} years ago`;
    } catch {
      return '';
    }
  };

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.sliderWrapper}>
          <button className={styles.navButton} onClick={prevReviews} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>

          <div className={styles.sliderViewport}>
            <motion.div 
              className={styles.sliderTrack}
              animate={{ x: `-${startIndex * (100 / cardsToShow)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {data.reviews.map((review, idx) => {
                const reviewKey = review.reviewId || `${review.reviewer?.displayName}-${idx}`;
                const isExpanded = expandedKeys.has(reviewKey);

                return (
                  <div 
                    key={reviewKey} 
                    className={styles.cardWrapper}
                    style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                  >
                    <ReviewCard 
                      review={review}
                      reviewKey={reviewKey}
                      isExpanded={isExpanded}
                      onToggle={toggleExpand}
                      formatDate={formatDate}
                    />
                  </div>
                );
              })}
            </motion.div>
          </div>

          <button className={styles.navButton} onClick={nextReviews} aria-label="Next">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
