// animations/index.js
'use client';
import { useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Animation Factory Functions
export const createFadeIn = ({ 
  duration = 0.7, 
  delay = 0,
  from = "bottom", // "bottom", "top", "left", "right", "center"
  distance = 40,
  ease = "easeOut"
}) => {
  let initial = { opacity: 0 };
  
  // Add directional animation
  switch (from) {
    case "bottom":
      initial.y = distance;
      break;
    case "top":
      initial.y = -distance;
      break;
    case "left":
      initial.x = -distance;
      break;
    case "right":
      initial.x = distance;
      break;
  }

  return {
    initial,
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease
      }
    }
  };
};

export const createScale = ({
  duration = 0.7,
  delay = 0,
  from = 0.8, // starting scale
  to = 1, // ending scale
  ease = "easeOut"
}) => ({
  initial: {
    scale: from,
    opacity: 0
  },
  animate: {
    scale: to,
    opacity: 1,
    transition: {
      duration,
      delay,
      ease
    }
  }
});

export const createStagger = ({
  delayChildren = 0.4,
  staggerDelay = 0.1,
  direction = 1 // 1 for forward, -1 for reverse
}) => ({
  animate: {
    transition: {
      delayChildren,
      staggerChildren: staggerDelay,
      staggerDirection: direction
    }
  }
});

// Scroll Animation Hook with Options
export const useScrollAnimation = ({
  threshold = 0.2,
  once = true,
  margin = "0px"
} = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    amount: threshold,
    margin 
  });

  return [ref, isInView];
};

// Scroll Animation Factory
export const createScrollAnimation = ({
  type = "fade", // "fade", "scale", "slide"
  duration = 0.6,
  delay = 0,
  from = "bottom",
  distance = 40,
  scale = 0.8,
  ease = "easeOut"
}) => {
  let hidden = { opacity: 0 };
  
  switch (type) {
    case "slide":
      switch (from) {
        case "bottom":
          hidden.y = distance;
          break;
        case "top":
          hidden.y = -distance;
          break;
        case "left":
          hidden.x = -distance;
          break;
        case "right":
          hidden.x = distance;
          break;
      }
      break;
    case "scale":
      hidden.scale = scale;
      break;
  }

  return {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease
      }
    }
  };
};

// Stagger Scroll Animation Factory
export const createScrollStagger = ({
  delayChildren = 0.3,
  staggerDelay = 0.1,
  direction = 1,
  childAnimationType = "fade",
  childDistance = 20
}) => ({
  container: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren,
        staggerChildren: staggerDelay,
        staggerDirection: direction
      }
    }
  },
  item: {
    hidden: { 
      y: childAnimationType === "fade" ? childDistance : 0,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }
});