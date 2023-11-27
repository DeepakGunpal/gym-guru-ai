export const getQueryParams = (searchParams: URLSearchParams) => {
  const all = Array.from(searchParams.entries());
  const queryParams = all.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);
  return queryParams;
};
