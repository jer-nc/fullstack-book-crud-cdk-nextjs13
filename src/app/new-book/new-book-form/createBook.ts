import { BookProps } from "@/types/types";

export async function createBook({ title, author }: { title: string, author: string }): Promise<BookProps | null> {
    const baseURL = process.env.APIGatewayURL;

    console.log(`APIGatewayURL: ${baseURL}`);

    const book = {
        title,
        author,
    };

    try {
        if (!baseURL) {
            throw new Error('APIGatewayURL is not defined');
        }
        const response = await fetch(`${baseURL}/books`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });

        if (!response.ok) {
            throw new Error(`Error creating book: ${response.statusText}`);
        }


        return response as unknown as BookProps;
    } catch (error) {
        console.error(`Error in createBook: ${error}`);
        return null;
    }
}