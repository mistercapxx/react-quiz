import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div style={{ display: 'flex', gap: '10px', marginBottom:'20px'}}>
            <img
                src="/images/Flag_of_the_United_States_(51_stars).svg.png"
                alt="English"
                onClick={() => changeLanguage('en')}
                style={{ cursor: 'pointer', width: '30px', height: '20px' }}
            />
            <img
                src="/images/Flag_of_Spain.svg.png"
                alt="Español"
                onClick={() => changeLanguage('esp')}
                style={{ cursor: 'pointer', width: '30px', height: '20px' }}
            />
        </div>
    );
};

export default LanguageSwitcher;