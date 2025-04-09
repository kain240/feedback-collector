exports.handler = async () => {
    const feedbacks = JSON.parse(process.env.FEEDBACKS || '[]');

    return {
        statusCode: 200,
        body: JSON.stringify(feedbacks),
    };
};
