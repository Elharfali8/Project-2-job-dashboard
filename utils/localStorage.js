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
  
  // Save users to localStorage
export const addUserToLocalStorage = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

// Remove all users from localStorage
export const removeUsersFromLocalStorage = () => {
  localStorage.removeItem('users');
};

// Get users from localStorage
export const getUsersFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
      const result = localStorage.getItem('users');
      const users = result ? JSON.parse(result) : [];
      return users;
  }
  return []; // Return an empty array for SSR
};
