export const retrieversForPlayground = {
    "vector_store": {
        description: "Simplest method, creates text embeddings.",
        fullName: "Vector Store",
        link: "https://js.langchain.com/docs/modules/data_connection/retrievers/vectorstore",
    },
    "multi_query": {
        description: "Generates multiple queries from one, for complex questions.",
        fullName: "Multi-Query Retriever",
        link: "https://js.langchain.com/docs/modules/data_connection/retrievers/multi-query-retriever",
    },
}

export const PLAYGROUND_VECTOR_STORES = [
    {
        title: "Supabase (postgres)",
        value: "supabase",
    },
    {
        title: "Pinecone",
        value: "pinecone",
    },
    {
        title: "MongoDB (atlas)",
        value: "mongodb",
    },
];

export const PLAYGROUND_LLMS: { [key: string]: { apiKeyEnv: string, modelName: string } } = {
    'mistral': { apiKeyEnv: 'GROQ_API_KEY', modelName: 'mixtral-8x7b-32768' },
    'gpt_3x5_turbo': { apiKeyEnv: 'OPENAI_API_KEY', modelName: 'gpt-3.5-turbo-1106' },
};

export const text_splitter_options = [
    {
        title: "Split by character",
        value: "split_by_character",
    },
    {
        title: "Recursive Character Text Splitter",
        value: "recursive_character_text_splitter",
    },
];