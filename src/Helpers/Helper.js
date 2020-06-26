export const convertDate = (date) => {
  if (date === "current") {
    date = Date.now();
  }

  const convDate = new Date(date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${convDate.getFullYear()}-${months[convDate.getMonth()]}`;
};
