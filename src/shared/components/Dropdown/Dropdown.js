import React, { useEffect, useRef } from 'react';

const Dropdown = (props) => {
  const { align = 'right', anchorEl, children, onClose, open } = props;

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, open]);

  if (!open || anchorEl == null) {
    return null;
  } else {
    const dimensions = anchorEl.getBoundingClientRect();

    return (
      <div
        ref={wrapperRef}
        style={{
          position: 'absolute',
          top: dimensions.y + 10,
          left: align === 'right' ? dimensions.x : undefined,
          right:
            align === 'left'
              ? `calc(100% - ${dimensions.x + dimensions.width}px)`
              : undefined,
          zIndex: 1,
        }}
      >
        {children}
      </div>
    );
  }
};

export default Dropdown;
