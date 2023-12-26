export const useCdn = false;

// read
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: SANITY_STUDIO_PROJECT_ID'
);

