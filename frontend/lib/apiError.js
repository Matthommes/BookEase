export const handleApiError = async (error) => {
  return error.message || "Something went wrong.";
};
