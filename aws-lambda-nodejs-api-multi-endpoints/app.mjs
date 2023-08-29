export const handler = async (event, context) => {
    try {
        return await handleRequest(event, context);
    } catch (error) {
        console.error("Error adding new link:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message,
                message: 'fetch_error',
                data: null,
            }),
        };
    }

};
