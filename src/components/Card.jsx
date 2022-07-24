import pin from "/pin.png";
export default function Card(props) {
  return (
    <div className="card--comp">
      <img
        // src={`${process.env.PUBLIC_URL}/assets/${props.img}`}
        src={props.img}
        alt={`${props.location}-image`}
      />
      <aside className="sect">
        <div className="location">
          <img src={pin} alt="pin" />
          <p className="city">{props.location}</p>
          <a href={props.url} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h1>{props.title}</h1>
        <h3>
          {props.startDate} - {props.endDate}
        </h3>
        <p>{props.description}</p>
      </aside>
    </div>
  );
}
