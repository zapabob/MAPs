import logger from '../../src/utils/logger';

describe('logger', () => {
  it('should log info messages', () => {
    const message = 'Test info message';
    logger.info(message);
    // Verify that the message is logged to console or file
    expect(console.log).toHaveBeenCalledWith(message);
  });

  it('should log error messages', () => {
    const message = 'Test error message';
    logger.error(message);
    // Verify that the message is logged to console or file
    expect(console.log).toHaveBeenCalledWith(message);
  });
});