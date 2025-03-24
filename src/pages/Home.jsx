import React from 'react';
import HeroSection from '../components/HeroSection';
import EmergencyServices from '../components/EmergencyServices';
import HowItWorks from '../components/HowItWorks';
import AIBlogPreview from '../components/AIBlogPreview';
import EmergencyShop from '../components/EmergencyShop';
import FeaturesBenefits from '../components/FeaturesBenefits';
import SubmitForm from '../components/SubmitForm';
import MobileAppPromo from '../components/MobileAppPromo';
import FAQs from '../components/FAQs';

const Home = () => {
    return (
        <div>
            <main>
                <HeroSection />
                <EmergencyServices />
                <HowItWorks />
                <AIBlogPreview />
                <EmergencyShop />
                <FeaturesBenefits />
                <SubmitForm />
                <FAQs />
                <MobileAppPromo />
            </main>
        </div>
    );
};

export default Home;