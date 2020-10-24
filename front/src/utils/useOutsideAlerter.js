import * as React from 'react';
const { useEffect } = React;

export const useOutsideAlerter = (ref, cb) => {
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setTimeout(() => {
                cb();
            }, 300);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });
};
