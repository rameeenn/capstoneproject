const availableTimes = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'
  ];

  export const fetchAvailableTimes = async () => {
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        resolve(availableTimes);
      }, 1000); // Simulate a 1-second delay
    });
  };
