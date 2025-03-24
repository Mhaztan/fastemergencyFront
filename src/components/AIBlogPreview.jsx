// import React, { useState, useEffect } from 'react';
// import { getAllBlogPosts } from '../utils/api';
// import { Link } from 'react-router-dom';
// import './styles/aiBlogPreview.css';

// const AIBlogPreview = () => {
//     const [blogPosts, setBlogPosts] = useState([]);

//     useEffect(() => {
//         const fetchBlogPosts = async () => {
//             const posts = await getAllBlogPosts();
//             setBlogPosts(posts);
//         };

//         fetchBlogPosts();
//     }, []);

//     return (
//         <section className="ai-blog-preview">
//             <div className="container-ai-blog-preview">
//                 <h2>AI Emergency Blog</h2>
//                 <div className="blog-posts">
//                     {blogPosts.slice(0, 3).map((post) => ( // Show only the first 3 posts
//                         <div key={post._id} className="blog-post">
//                             <h3>{post.title}</h3>
//                             <p>{post.content.substring(0, 100)}...</p> {/* Short excerpt */}
//                             <Link to={`/blog/${post._id}`}>Read More</Link>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AIBlogPreview;

import React, { useState, useEffect } from "react";
import { getAllBlogPosts } from "../utils/api";
import { Link } from "react-router-dom";
import "./styles/aiBlogPreview.css";

const AIBlogPreview = () => {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const posts = await getAllBlogPosts();
                setBlogPosts(posts);
            } catch (error) {
                console.error("Failed to fetch blog posts:", error);
            }
        };
        fetchBlogPosts();
    }, []);

    return (
        <section className="ai-blog-preview">
            <div className="container-ai-blog-preview">
                <h2>📰 AI Emergency Blog</h2>
                <p className="blog-description">
                    Stay informed with AI-powered insights on emergency preparedness.
                </p>
                <div className="blog-posts">
                    {blogPosts.slice(0, 3).map((post) => ( // Show the first 3 blog posts
                        <div key={post._id} className="blog-post">
                            {post.image && <img src={post.image} alt={post.title} className="blog-image" />}
                            <div className="blog-content">
                                <h3>{post.title}</h3>
                                <p>{post.content.substring(0, 120)}...</p> {/* Short excerpt */}
                                <Link to={`/blog/${post._id}`} className="read-more-button">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIBlogPreview;
