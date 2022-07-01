import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy_data";
import EventList from "../../components/events/EventList";

const FilteredEventsPage = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p>Loading...</p>;
  }

  const filteredYear = parseInt(filterData[0]);
  const filteredMonth = parseInt(filterData[1]);

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return <p>Invalid filter, please adjust your values!</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found</p>;
  }

  console.log(filteredEvents);

  return <EventList events={filteredEvents} />;
};

export default FilteredEventsPage;
