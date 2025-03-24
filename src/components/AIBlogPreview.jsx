
// import React, { useState, useEffect } from "react";
// import { getAllBlogPosts } from "../utils/api";
// import { Link } from "react-router-dom";
// import "./styles/aiBlogPreview.css";

// const AIBlogPreview = () => {
//     const [blogPosts, setBlogPosts] = useState([]);

//     useEffect(() => {
//         const fetchBlogPosts = async () => {
//             try {
//                 const posts = await getAllBlogPosts();
//                 setBlogPosts(posts);
//             } catch (error) {
//                 console.error("Failed to fetch blog posts:", error);
//             }
//         };
//         fetchBlogPosts();
//     }, []);

//     return (
//         <section className="ai-blog-preview">
//             <div className="container-ai-blog-preview">
//                 <h2>📰 AI Emergency Blog</h2>
//                 <p className="blog-description">
//                     Stay informed with AI-powered insights on emergency preparedness.
//                 </p>
//                 <div className="blog-posts">
//                     {blogPosts.slice(0, 3).map((post) => ( // Show the first 3 blog posts
//                         <div key={post._id} className="blog-post">
//                             {post.image && <img src={post.image} alt={post.title} className="blog-image" />}
//                             <div className="blog-content">
//                                 <h3>{post.title}</h3>
//                                 <p>{post.content.substring(0, 120)}...</p> {/* Short excerpt */}
//                                 <Link to={`/blog/${post._id}`} className="read-more-button">
//                                     Read More
//                                 </Link>
//                             </div>
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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const posts = await getAllBlogPosts();
                console.log("Fetched Blog Posts:", posts); // Debugging log

                if (Array.isArray(posts)) {
                    // 🔥 Match API structure (same as in Blogs.jsx)
                    const formattedPosts = posts.map(blog => ({
                        id: blog.PostID, // Fix ID
                        title: blog.Title, // Fix Title
                        content: blog.Content, // Fix Content
                        createdAt: blog.PublicationDate, // Fix Date
                    }));
                    setBlogPosts(formattedPosts);
                } else {
                    console.error("Unexpected API response format:", posts);
                    setError("Invalid response from server.");
                }
            } catch (error) {
                console.error("Failed to fetch blog posts:", error);
                setError("Failed to load blog posts.");
            } finally {
                setLoading(false);
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

                {loading && <p>Loading blog posts...</p>}
                {error && <p className="error-message">{error}</p>}

                {!loading && !error && blogPosts.length === 0 && (
                    <p>No blog posts available.</p>
                )}

                <div className="blog-posts">
                    {blogPosts.slice(0, 3).map((post) => (
                        <div key={post.id} className="blog-post">
                            <div className="blog-content">
                                <h3>{post.title}</h3>
                                <p>
                                    {post.content ? post.content.substring(0, 120) + "..." : "No content available."}
                                </p>
                                <Link to={`/blogs/${post.id}`} className="read-more-button">
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

