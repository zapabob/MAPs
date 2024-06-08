import { ragService } from './rag';

export const ragService = {
  async searchKnowledge(question: string, context: string) {
    // Implement RAG search logic
    // Use context to narrow down search results
    // LLMを使用して日本語形態素分析を行い、コサイン類似度と組み合わせてコンテキストに基づいた質問に最も関連する情報を検索します。
    const embeddings = await ragService.generateEmbeddings(question, context);
    const morphologicalAnalysis = await llmService.analyzeJapaneseMorphology(context);
    const sortedResults = embeddings.sort((a, b) => {
      // コサイン類似度と形態素分析の結果を組み合わせた類似度を計算する
      const dotProduct = (vec1, vec2) => vec1.reduce((acc, current, idx) => acc + current * vec2[idx], 0);
      const magnitude = vec => Math.sqrt(vec.reduce((acc, current) => acc + current * current, 0));
      const cosineSimilarity = (vec1, vec2) => dotProduct(vec1, vec2) / (magnitude(vec1) * magnitude(vec2));
      const combinedSimilarity = (cosSim, morphAnalysis) => (cosSim + morphAnalysis) / 2;

      const cosSimA = cosineSimilarity(a.vector, context.vector);
      const cosSimB = cosineSimilarity(b.vector, context.vector);
      return combinedSimilarity(cosSimB, morphologicalAnalysis[b.id]) - combinedSimilarity(cosSimA, morphologicalAnalysis[a.id]);
    });
      // コサイン類似度と形態素分析の結果を組み合わせた類似度を計算する
      const dotProduct = (vec1, vec2) => vec1.reduce((acc, current, idx) => acc + current * vec2[idx], 0);
      const magnitude = vec => Math.sqrt(vec.reduce((acc, current) => acc + current * current, 0));
      const cosineSimilarity = (vec1, vec2) => dotProduct(vec1, vec2) / (magnitude(vec1) * magnitude(vec2));
      const combinedSimilarity = (cosSim, morphAnalysis) => (cosSim + morphAnalysis) / 2;

      const cosSimA = cosineSimilarity(a.vector, context.vector);
      const cosSimB = cosineSimilarity(b.vector, context.vector);
      return combinedSimilarity(cosSimB, morphologicalAnalysis[b.id]) - combinedSimilarity(cosSimA, morphologicalAnalysis[a.id]);
    });

    const searchResults = sortedResults.map(result => result.text);
    return searchResults;
  },
};