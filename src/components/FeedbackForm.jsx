import { useState, useRef } from "react";
import toast from "react-hot-toast";

const FeedbackForm = ({ onAddFeedback }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");
    const [loading, setLoading] = useState(false);
    const nameInputRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !feedback) {
            toast.error("Please fill all fields");
            nameInputRef.current.focus();
            return;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email");
            return;
        }

        setLoading(true);

        const newFeedback = {
            id: Date.now(),
            name,
            email,
            message: feedback,
        };

        await onAddFeedback(newFeedback);

        setName("");
        setEmail("");
        setFeedback("");
        setLoading(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-900 px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-neutral-800 p-6 rounded-2xl shadow-2xl space-y-4"
            >
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4 flex items-center justify-center gap-2">
                    Drop Your Feedback <span>💬</span>
                </h2>

                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    ref={nameInputRef}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 rounded-lg bg-neutral-700 text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 rounded-lg bg-neutral-700 text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />

                <textarea
                    placeholder="Your Feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="w-full p-3 rounded-lg bg-neutral-700 text-white placeholder-neutral-400 outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                    required
                />

                <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg w-full font-semibold transition-all duration-300 disabled:opacity-50"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Submit Feedback"}
                </button>

                <p className="text-center text-neutral-400 text-sm pt-2">
                    Built with ❤️ by Khushi Jain
                </p>
            </form>
        </div>
    );
};

export default FeedbackForm;
