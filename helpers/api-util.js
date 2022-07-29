export const getAllEvents = async () => {
  const response = await fetch(
    "https://react-http-909d1-default-rtdb.firebaseio.com/events.json"
  );

  const data = await response.json();

  const loadedEvents = [];

  for (const key in data) {
    loadedEvents.push({
      id: key,
      ...data[key],
    });
  }

  return loadedEvents;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
};

export const getEventById = async (id) => {
  const allEvents = await getAllEvents();

  return allEvents.find((event) => event.id === id);
};

export const getFilteredEvents = async (dateFilter) => {
  const allEvents = await getAllEvents();

  const { year, month } = dateFilter;

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};

export default getAllEvents;
