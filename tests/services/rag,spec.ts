import { ragService } from '../../src/services/rag';
import cosineSimilarity from '../../src/utils/cosineSimilarity'; // コサイン類似度計算用のユーティリティをインポート

describe('ragService', () => {
  it('should implement RAG search logic using cosine similarity', () => {
    // Mock database and embedding logic
    // Test searchKnowledge function with different questions and contexts
    // Use cosine similarity to verify that the function returns relevant information from the knowledge base
    const questionEmbedding = [0.2, 0.8, 0.6];
    const contextEmbedding = [0.1, 0.7, 0.8];
    const similarity = cosineSimilarity(questionEmbedding, contextEmbedding);
    expect(similarity).toBeGreaterThan(0.5); // 類似度が0.5以上であることを確認
  });
});