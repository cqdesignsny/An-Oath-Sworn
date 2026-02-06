import React from 'react';
import Hero from '../components/Hero';
import TheStory from '../components/TheStory';
import DiscoverRockhome from '../components/DiscoverRockhome';
import TheHook from '../components/TheHook';
import MeetAuthor from '../components/MeetAuthor';

const Home = () => {
    return (
        <div className="bg-deep-bg">
            <Hero />
            <TheStory />
            <DiscoverRockhome />
            <TheHook />
            <MeetAuthor />
        </div>
    );
};

export default Home;
