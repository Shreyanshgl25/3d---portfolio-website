import { useEffect, useRef, useState } from "react";

// Only mounts its children once it is close to the viewport.
// Used for heavy WebGL canvases so the page loads faster and
// fewer WebGL contexts are alive at the same time.
const LazyMount = ({ children, className = "", rootMargin = "200px", fallback = null }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {show ? children : fallback}
    </div>
  );
};

export default LazyMount;
