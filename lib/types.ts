export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  model: string;
  messages: Message[];
  max_tokens: number;
}

export interface ChatResponse {
  type: string;
  data: {
    choices: Array<{
      message: {
        content: string;
      };
    }>;
  };
}

export interface ErrorResponse {
  type: string;
  error: string;
}
