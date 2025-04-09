import { useState, useEffect } from "react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [showFeedback, setShowFeedback] = useState(false);

    const fetchFeedbacks = async () => {
        try {
            const res = await fetch("/.netlify/functions/get-feedbacks");
            const data = await res.json();
            setFeedbacks(data);
        } catch (error) {
            toast.error("Failed to load feedbacks!");
        }
    };

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    const handleAddFeedback = async (newFeedback) => {
        try {
            await fetch("/.netlify/functions/submit-feedback", {
                method: "POST",
                body: JSON.stringify(newFeedback),
            });

            toast.success("Feedback Added Successfully!");
            fetchFeedbacks();
        } catch (error) {
            toast.error("Something went wrong while adding feedback!");
        }
    };

    const handleDeleteFeedback = async (id) => {
        try {
            await fetch("/.netlify/functions/delete-feedback", {
                method: "POST",
                body: JSON.stringify({ id }),
            });

            toast.success("Feedback Deleted Successfully!");
            fetchFeedbacks();
        } catch (error) {
            toast.error("Failed to delete feedback!");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white p-4">

            <FeedbackForm onAddFeedback={handleAddFeedback} />

            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowFeedback(!showFeedback)}
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl my-6 transition-all duration-300"
            >
                {showFeedback ? "Hide Feedback" : "View Submitted Feedback"}
            </motion.button>

            <AnimatePresence>
                {showFeedback && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                    >
                        <FeedbackList feedbacks={feedbacks} onDelete={handleDeleteFeedback} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Home;
