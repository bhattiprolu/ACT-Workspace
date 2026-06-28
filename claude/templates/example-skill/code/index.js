// Simple example skill entrypoint
module.exports = async function handle(input) {
  // input: { text: string, metadata?: object }
  return { text: input.text };
};
