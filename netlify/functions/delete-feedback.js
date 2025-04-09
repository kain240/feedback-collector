let feedbacks = JSON.parse(process.env.FEEDBACKS || '[]');

exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { id } = JSON.parse(event.body);

    feedbacks = feedbacks.filter((item) => item.id !== id);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Feedback Deleted Successfully!',
            feedbacks,
        }),
    };
};
