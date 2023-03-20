// Find Difference of Years for EmployeeCard

export const getYearsDifference = (start: any, end: any) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diffInMs = endDate.getTime() - startDate.getTime();
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365);
  return diffInYears.toFixed(1);
};
