# AI Assistant Chat

This is a modern AI-powered chatbot application using the Llama 3.2 model from Cloudflare's Workers AI platform. The Llama 3.2 model is instruction-tuned, optimized for multilingual dialogue, agentic retrieval, and summarization tasks. It offers a high-quality conversational experience, making it suitable for a variety of use cases.

## Features

- **Responsive UI**: Beautiful and responsive design, utilizing Tailwind CSS for modern styling. Works across all screen sizes, from mobile to desktop.
- **Smooth Animations**: Seamless transitions and animations powered by Framer Motion, enhancing the user experience.
- **Chat with AI**: An interactive chat interface that allows users to ask questions, engage in conversation, or request information. The AI assistant powered by Llama 3.2 is capable of handling diverse dialogues and queries.
- **Loading Indicator**: Displays a spinner when the AI is processing a response, ensuring a smooth user experience.
- **Error Handling**: Graceful error handling for API requests and interactions.
- **Dark Mode Support**: Easily switch between light and dark themes for an optimal experience.
- **Multilingual Support**: The Llama 3.2 model is designed to handle multilingual queries, making it a versatile tool for global audiences.

## Tech Stack

- **Frontend**: 
  - **Next.js** (React Framework)
  - **Tailwind CSS** (for modern, responsive styling)
  - **Framer Motion** (for animations)
  - **React Icons** (for user interface icons)
- **Backend**:
  - **Cloudflare Workers AI** (using Llama 3.2-1b-instruct)
  - **API integration** to handle AI responses

## Setup and Installation

### Prerequisites
Ensure that you have the following installed:
- Node.js (v16 or above)
- npm or yarn (package managers)

### Steps to Run the Project Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/saikothasan/ai-assistant
   cd ai-assistant
   ```

2. **Install Dependencies**:
   Use npm or yarn to install the necessary packages.
   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. **Set Up API Environment**:
   - Ensure that you have a Cloudflare Workers account.
   - Set up a Cloudflare Worker for the AI endpoint using the Llama 3.2 model.
   - Configure the API URL in the environment variables, replacing `YOUR_API_URL` with the actual URL.

   You can configure this in `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=YOUR_API_URL
   ```

4. **Run the Development Server**:
   Start the local development server.
   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

5. **Open the Application**:
   Visit `http://localhost:3000` in your browser to see the AI Assistant chat in action.

## Usage

Once the application is running, you can interact with the chatbot by typing your questions in the input field. The AI, powered by the Llama 3.2 model, will respond to your queries and engage in conversations.

- **Ask Questions**: Request information, explanations, or advice.
- **Engage in Conversations**: Chat casually with the assistant.
- **Multilingual Conversations**: The model can respond in different languages, based on the prompt or input.

## Llama 3.2 Model Integration

The backend is powered by Cloudflare Workers AI, utilizing the Llama 3.2-1b-instruct model. This instruction-tuned model excels at understanding complex queries and offering accurate, context-aware responses. It is optimized for:
- **Multilingual Dialogue**: Handling diverse languages and dialects.
- **Agentic Retrieval**: Retrieving information based on user input.
- **Summarization**: Summarizing content or providing concise answers.

For more information on Llama 3.2, visit the [Cloudflare Workers AI documentation](https://developers.cloudflare.com/workers-ai/models/llama-3.2-1b-instruct/).

## UI Features

- **Main Chat Area**: Displays the conversation between the user and the AI. Messages are styled differently based on the sender (user or bot), and there are smooth animations when new messages appear.
- **Responsive Layout**: The design adjusts to screen sizes, ensuring the app looks great on mobile devices, tablets, and desktops.
- **Loading State**: A spinner appears while the AI is processing the user's request.
- **User and Bot Interaction**: The bot's messages are displayed with distinct styling (colored bubbles, icons), while the user's messages are aligned to the right.
- **Input Area**: A text input area where users can type their messages, with a "Send" button to submit the message.

## API Endpoints

The API call is handled by a Cloudflare Worker, which sends the input to the Llama 3.2 model and returns the response. Here is an example of the API response:

```json
{
  "response": "Hello! It's lovely to meet you. Is there something I can help you with or would you like to chat for a bit? I'm here to assist you with any questions or topics you'd like to discuss. How's your day going so far?"
}
```

The AI processes the input and sends a message back in a conversational format.

## Contributions

Feel free to contribute to this project! You can submit issues, suggest features, or open pull requests.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Contact

If you have any questions or need further assistance, feel free to reach out!

- **Author**: saikothasan
- **Email**: saikothouse@gmail.com
- **GitHub**: [@saikothasan](https://github.com/saikothasan)
