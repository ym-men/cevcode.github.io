import React from 'react';
import Description from 'ui/Description';
import Title from 'ui/Title';
import { Column, Row } from 'ui/Layout';
import SocialBar from './components/index';
import photo from 'img/photo.jpg';

const About = () => {
    return (
        <Row className="about" ai="flex-start" jc="space-between">
            <div className="about__content">
                <Description heading={true}>EVGENIY KOBERNIK - FRONTEND DEVELOPER</Description>
                <Title size="big" containerClassName="about__title">
                    Front-end developer based in Moscow, Russia.
                    <span className="title_secondary">
                        I strive to design joyful and timeless experiences connecting my client’s product to the heart
                        of their users.
                    </span>
                </Title>
            </div>
            <img className="about__image" src={photo} alt="" />
            <SocialBar />
        </Row>
    );
};

export default About;
