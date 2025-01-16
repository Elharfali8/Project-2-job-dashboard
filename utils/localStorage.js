export const addDataToLocalStorage = (jobsData) => {
    localStorage.setItem('jobsData', JSON.stringify(jobsData));
  };
  
  export const removeDataFromLocalStorage = () => {
    localStorage.removeItem('jobsData');
  };
  
  export const getDataFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('jobsData');
      const jobsData = result ? JSON.parse(result) : null;
      return jobsData;
    }
    return null; // Return a default value for SSR
  };
  