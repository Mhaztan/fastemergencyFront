

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { getAllBlogPosts } from "../utils/api"; // Corrected import
// import "./styles/blogs.css";

// const Blogs = () => {
//     const [blogs, setBlogs] = useState([]);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [sortOption, setSortOption] = useState("newest");
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchBlogs = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const data = await getAllBlogPosts();
//                 console.log("Fetched blogs (raw):", data);

//                 // Transform API response to match frontend expectations
//                 const formattedBlogs = data.map(blog => ({
//                     id: blog.PostID,  // Fix key mapping
//                     title: blog.Title,  // Fix key mapping
//                     content: blog.Content,  // Fix key mapping
//                     createdAt: blog.PublicationDate,  // Fix key mapping
//                 }));

//                 console.log("Formatted blogs:", formattedBlogs);
//                 setBlogs(formattedBlogs);
//             } catch (err) {
//                 console.error("Error fetching blogs:", err);
//                 setError("Failed to load blogs. Try again later.");
//             }
//             setLoading(false);
//         };
//         fetchBlogs();
//     }, []);

//     // Filter blogs based on search query
//     const filteredBlogs = blogs.filter(blog =>
//         blog.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     // Sorting logic
//     const sortedBlogs = [...filteredBlogs].sort((a, b) => {
//         if (!a.createdAt || !b.createdAt) return 0;
//         return sortOption === "newest"
//             ? new Date(b.createdAt) - new Date(a.createdAt)
//             : new Date(a.createdAt) - new Date(b.createdAt);
//     });

//     return (
//         <div className="blogs-container">
//             <h1>Latest Blog Posts</h1>

//             {/* Search and Sort */}
//             <div className="blogs-search-sort">
//                 <input
//                     type="text"
//                     placeholder="Search blogs..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
//                     <option value="newest">Newest First</option>
//                     <option value="oldest">Oldest First</option>
//                 </select>
//             </div>

//             {/* Show loading state */}
//             {loading && <p>Loading blogs...</p>}

//             {/* Show error message */}
//             {error && <p className="error-message">{error}</p>}

//             {/* Blog List */}
//             {!loading && !error && (
//                 <div className="blogs-list">
//                     {sortedBlogs.length > 0 ? (
//                         sortedBlogs.map((blog) => (
//                             <div className="blog-card" key={blog.id}>
//                                 <h2>{blog.title}</h2>
//                                 <p>{blog.content.slice(0, 150)}...</p>
//                                 <Link to={`/blogs/${blog.id}`} className="read-more">Read More</Link>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No blogs found.</p>
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Blogs;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllBlogPosts } from "../utils/api"; // Fetch API function
import "./styles/blogs.css";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("newest");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getAllBlogPosts();
                const formattedBlogs = data.map(blog => ({
                    id: blog.PostID,
                    title: blog.Title,
                    content: blog.Content,
                    createdAt: blog.PublicationDate,
                }));
                setBlogs(formattedBlogs);
            } catch (err) {
                setError("Failed to load blogs. Try again later.", err);
            }
            setLoading(false);
        };
        fetchBlogs();
    }, []);

    // Filter blogs based on search
    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sorting logic
    const sortedBlogs = [...filteredBlogs].sort((a, b) => {
        if (!a.createdAt || !b.createdAt) return 0;
        return sortOption === "newest"
            ? new Date(b.createdAt) - new Date(a.createdAt)
            : new Date(a.createdAt) - new Date(b.createdAt);
    });

    return (
        <div className="blogsPage">
            <h1 className="blogsTitle">Latest Blog Posts</h1>

            {/* Search & Sort UI */}
            <div className="blogsFilters">
                <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="blogSearch"
                />
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="blogSort"
                >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                </select>
            </div>

            {/* Loading & Error States */}
            {loading && <p className="loadingMessage">Loading blogs...</p>}
            {error && <p className="errorMessage">{error}</p>}

            {/* Blog List */}
            {!loading && !error && (
                <div className="blogsGrid">
                    {sortedBlogs.length > 0 ? (
                        sortedBlogs.map((blog) => (
                            <div className="blogCard" key={blog.id}>
                                <h2 className="blogTitle">{blog.title}</h2>
                                <p className="blogContent">{blog.content.slice(0, 150)}...</p>
                                <Link to={`/blogs/${blog.id}`} className="readMore">Read More</Link>
                            </div>
                        ))
                    ) : (
                        <p className="noBlogs">No blogs found.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Blogs;
