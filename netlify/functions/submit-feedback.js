exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const feedback = JSON.parse(event.body);

    if (!feedback.name || !feedback.email || !feedback.message) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Missing required fields' }),
        };
    }

    const feedbacks = JSON.parse(process.env.FEEDBACKS || '[]');
    feedbacks.unshift(feedback);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Feedback Submitted Successfully!',
            feedbacks,
        }),
    };
};
