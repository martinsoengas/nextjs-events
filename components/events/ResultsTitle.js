import Button from "../ui/Button";
import classes from "./ResultsTitle.module.css";

function ResultsTitle(props) {
  const { date } = props;

  const dateOptions = { month: "long", year: "numeric" };

  const humanReadableDate = new Date(date).toLocaleDateString(
    "en-US",
    dateOptions
  );

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
