
```typescript
import { openai, google } from '../config/api';
import { ragService } from './rag';
import { chatbotsService } from './chatbots';


export const llmService = {
  async generateResponse(model: string, message: string, context: string) {
    const response = await openai.createChatCompletion({
      model,
      messages: [
        { role: 'user', content: `${context}\n${message}` },
      ],
    });
    console.log(response);
    return response.data.choices[0].message.content;
  },
  async generateEmbeddings(question: string, context: string) {
    const embeddings = await ragService.generateEmbeddings(question, context);
    return embeddings;
  },
  async analyzeJapaneseMorphology(context: string) {
    const morphologicalAnalysis = await ragService.analyzeJapaneseMorphology(context);
    return morphologicalAnalysis;
  },

};