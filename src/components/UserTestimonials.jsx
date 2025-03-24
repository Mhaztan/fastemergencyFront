import React, { useState, useEffect, useRef } from 'react';
import './styles/userTestimonials.css'; // Assuming you have this CSS file
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Marquee from 'react-fast-marquee';



const UserTestimonials = () => {
    const testimonials = [
        {
            name: 'John Doe',
            text: 'This platform helped me find the right resources quickly during an emergency.  I was able to get the assistance I needed within minutes!',
            rating: 5,
        },
        {
            name: 'Jane Smith',
            text: 'I feel safer knowing that I can easily access emergency contacts and information.  It\'s a real peace of mind.',
            rating: 4,
        },
        {
            name: 'Alice Johnson',
            text: 'The user interface is intuitive and easy to navigate.  Even in a stressful situation, I could find what I needed.',
            rating: 5,
        },
        {
            name: 'Bob Williams',
            text: 'A lifesaver!  I used the roadside assistance feature when my car broke down, and help arrived promptly.',
            rating: 5,
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    // Marquee Testimonials (Use a subset for visual clarity)
    const marqueeTestimonials = testimonials.slice(0, 3).map((testimonial) => testimonial.text);

    // Shelf Effect (Using refs and state for position)
    const shelfRef = useRef(null);
    const [shelfPosition, setShelfPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (shelfRef.current) {
                const rect = shelfRef.current.getBoundingClientRect();
                // Calculate position based on scroll and element's position
                const newPosition = Math.max(0, Math.min(100, (rect.top / window.innerHeight) * 100));  //0-100 based on visibility

                setShelfPosition(newPosition);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="user-testimonials">
            <div className="container-user-testimonials">
                <h2>What Our Users Say</h2>
                <p className="testimonial-intro">
                    Don't just take our word for it. See how our platform has helped people in real emergency situations.
                </p>

                {/* Slider */}
                <div className="testimonial-slider">
                    <Slider {...sliderSettings}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.name} className="testimonial-card">
                                <div className="testimonial-content">
                                    <div className="testimonial-image">
                                        <img src={testimonial.image} alt={testimonial.name} />
                                    </div>
                                    <p className="testimonial-text">"{testimonial.text}"</p>
                                    <div className="testimonial-author">
                                        <span className="name">- {testimonial.name}</span>
                                        <div className="rating">
                                            {Array.from({ length: testimonial.rating }, (_, i) => (
                                                <span key={i} className="star">⭐</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Continuous Marquee */}
                <div className="marquee-container">
                    <Marquee pauseOnHover gradient={false} speed={80}>
                        {marqueeTestimonials.map((text, index) => (
                            <span key={index} className="marquee-text">
                                {text}
                            </span>
                        ))}
                    </Marquee>
                </div>

                {/* Shelf Effect */}
                <div className="shelf-effect-container" ref={shelfRef} style={{
                    transform: `translateY(${shelfPosition}px)`, // Adjust for direction
                    opacity: 1 - (shelfPosition / 100),  // Fade out as it scrolls
                }}>
                    <p className="shelf-text">
                        Your safety net in times of crisis.  Ready when you need it.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default UserTestimonials;