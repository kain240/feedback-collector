import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

const FeedbackList = ({ feedbacks, onDelete }) => {
    return (
        <div className="w-full max-w-2xl mt-10 mx-auto space-y-4">
            {feedbacks.length === 0 ? (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-neutral-400 text-xl"
                >
                    😔 No feedback yet.
                </motion.p>
            ) : (
                feedbacks.map((feedback) => (
                    <motion.div
                        key={feedback.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-neutral-800 p-5 rounded-2xl shadow-md border border-neutral-700 flex justify-between items-start gap-4 hover:scale-[1.02] transition-all duration-300"
                    >
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-purple-400">{feedback.name}</h3>

                            {/* Email */}
                            <p className="text-sm text-neutral-400">{feedback.email}</p>

                            {/* Feedback Message */}
                            <p className="text-neutral-400 mt-2">{feedback.message}</p>

                            <span className="text-xs text-neutral-500 mt-3 block">
                {new Date(feedback.id).toLocaleString()}
              </span>
                        </div>

                        <button
                            onClick={() => onDelete(feedback.id)}
                            className="text-red-500 hover:text-red-600 transition-all duration-200"
                        >
                            <Trash2 size={20} />
                        </button>
                    </motion.div>
                ))
            )}
        </div>
    );
};

export default FeedbackList;
