import { Embedding } from '../../src/models/embedding';

describe('Embedding', () => {
  it('should have correct properties', () => {
    const embedding: Embedding = {
      id: 'embedding-1',
      content: 'Test content',
      vector: [0.1, 0.2, 0.3],
    };
    expect(embedding).toHaveProperty('id', 'embedding-1');
    expect(embedding).toHaveProperty('content', 'Test content');
    expect(embedding).toHaveProperty('vector');
  });
});