import React, {useState, useEffect, useContext} from 'react';
import Style from './ScrollToTop.module.scss';
import {Box} from '@mui/material';
import classnames from 'classnames';
import ThemeContext from '../../context/ThemeContext';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { theme } = useContext(ThemeContext);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className={classnames(Style.scrollToTop, isVisible ? Style.visible : Style.hidden, Style[theme])}>
            <Box onClick={scrollToTop} className={Style.button}>
                <i className={'fa fa-arrow-up'}/>
            </Box>
        </div>
    );
}