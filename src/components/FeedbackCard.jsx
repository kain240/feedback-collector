const FeedbackCard = ({ feedback }) => {
    return (
        <div className="bg-neutral-800 p-4 rounded-xl shadow-md border border-neutral-700 hover:scale-[1.02] transition-all duration-300">

            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-purple-400">{feedback.name}</h3>
                <span className="text-xs text-neutral-500">{new Date(feedback.id).toLocaleDateString()}</span>
            </div>

            {/* Email */}
            <p className="text-sm text-neutral-400 mb-2">{feedback.email}</p>

            {/* Feedback Message */}
            <p className="text-neutral-300">{feedback.message}</p>

        </div>
    );
};

export default FeedbackCard;
