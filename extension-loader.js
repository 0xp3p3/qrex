export async function resolve(specifier, context, defaultResolve) {
  // Check if the specifier is a relative or absolute path and add ".js" if missing
  if (specifier.startsWith('.') && !specifier.endsWith('.js')) {
    specifier += '.js';
  }

  // Use the default resolver with the modified specifier
  return defaultResolve(specifier, context, defaultResolve);
}