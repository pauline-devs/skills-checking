import { useEffect, useRef } from 'react';
import "../styles/Cursor.css";

const Cursor = () => {

    const delay = 12;

    const loz = useRef(null);
    const lozOutline = useRef(null);

    const cursorVisible = useRef(true);

    const endX = useRef(window.innerWidth);
    const endY = useRef(window.innerHeight);

    const _x = useRef(0);
    const _y = useRef(0);

    const requestRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveEvent);

        animateLozOutline();

        return() => {
            document.removeEventListener('mousemove', mouseMoveEvent);

            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    const toggleCursorVisibility = () => {
        if(cursorVisible.current) {
            loz.current.style.opacity = 1;
            lozOutline.current.style.opacity = 1;
        } else {
            loz.current.style.opacity = 0;
            lozOutline.current.style.opacity = 0;
        }
    };

    const mouseMoveEvent = e => {
        cursorVisible.current = true;
        toggleCursorVisibility();

        endX.current = e.pageX;
        endY.current = e.pageY;

        loz.current.style.top = endY.current + 'px';
        loz.current.style.left = endX.current + 'px';
    };

    const animateLozOutline = () => {
        _x.current += (endX.current - _x.current) / delay;
        _y.current += (endY.current - _y.current) / delay;


        lozOutline.current.style.top = _y.current + 'px';
        lozOutline.current.style.left = _x.current + 'px';

        requestRef.current = requestAnimationFrame(animateLozOutline);
    };

    return (
        <>
            <div ref={loz} className='Cursor-lozenge'></div>
            <div ref={lozOutline} className='Cursor-lozenge-outline'></div>
        </>
    );
};

export default Cursor;
