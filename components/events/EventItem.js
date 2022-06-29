import Link from "next/link";
import Button from "../ui/Button";

import classes from "./EventItem.module.css";

const EventItem = (props) => {
  const { id, title, location, date, image } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");

  console.log(id);

  const formattedLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} width="400px" />
      <div className={classes.content}>
        <div>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{formattedDate}</time>
          </div>
        </div>
        <div className={classes.address}>
          <address>{formattedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Button>
            <Link href={formattedLink}>Explore Event</Link>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
