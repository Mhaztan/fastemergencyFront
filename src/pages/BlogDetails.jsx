// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { fetchBlogById } from "../utils/api";
// import { FaArrowLeft } from "react-icons/fa";
// import "./styles/blogdetails.css";

// const BlogDetails = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [blog, setBlog] = useState(null);

//     useEffect(() => {
//         const getBlog = async () => {
//             const data = await fetchBlogById(id);
//             setBlog(data);
//         };
//         getBlog();
//     }, [id]);

//     if (!blog) return <p>Loading blog...</p>;

//     return (
//         <div className="blog-details">
//             <button className="back-button" onClick={() => navigate(-1)}>
//                 <FaArrowLeft /> Back
//             </button>
//             <h1>{blog.title}</h1>
//             <p>{blog.content}</p>
//         </div>
//     );
// };

// export default BlogDetails;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBlogById } from "../utils/api";
import { FaArrowLeft } from "react-icons/fa";
import "./styles/blogdetails.css";

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBlog = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchBlogById(id);
                console.log("Fetched Blog Data:", data); // Debugging log

                if (data) {
                    setBlog({
                        id: data.PostID, // Fix field names
                        title: data.Title,
                        content: data.Content,
                        createdAt: data.PublicationDate,
                    });
                } else {
                    setError("Blog not found.");
                }
            } catch (err) {
                console.error("Error fetching blog:", err);
                setError("Failed to load blog.");
            }
            setLoading(false);
        };
        getBlog();
    }, [id]);

    if (loading) return <p>Loading blog...</p>;
    if (error) return <p className="error-message">{error}</p>;
    if (!blog) return <p>No blog details available.</p>;

    return (
        <div className="blog-details">
            <button className="back-button" onClick={() => navigate(-1)}>
                <FaArrowLeft /> Back
            </button>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
        </div>
    );
};

export default BlogDetails;
