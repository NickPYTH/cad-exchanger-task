import React from 'react';
import {useTranslation} from "react-i18next";

const ContactUsPage = () => {
    const {t} = useTranslation('about');

    return (
        <div>
            {t('Свяжитесь с нами')}
        </div>
    );
};

export default ContactUsPage;
