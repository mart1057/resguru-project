// formatDate.js
export default {
  install(Vue) {
    Vue.prototype.$formatDate = (date, format = 'dd/mm/yyyy') => {
      // Check if the date is null or undefined
      if (date === null || date === undefined || date === '') {
        return '';
      }

      // Parse the date (handles ISO format from date input)
      const dateObj = new Date(date);
      
      // Check if date is valid
      if (isNaN(dateObj.getTime())) {
        return '';
      }

      const day = String(dateObj.getDate()).padStart(2, '0');
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const year = dateObj.getFullYear();

      if (format === 'dd/mm/yyyy') {
        return `${day}/${month}/${year}`;
      }
      
      return `${month}/${day}/${year}`;
    };

    Vue.prototype.$parseDateToISO = (dateString) => {
      // Convert dd/mm/yyyy or mm/dd/yyyy to ISO format (yyyy-mm-dd)
      if (!dateString || dateString === '') {
        return '';
      }

      const parts = dateString.split('/');
      if (parts.length !== 3) {
        return '';
      }

      // Assuming input is dd/mm/yyyy
      const day = parts[0];
      const month = parts[1];
      const year = parts[2];

      return `${year}-${month}-${day}`;
    };
  }
};
