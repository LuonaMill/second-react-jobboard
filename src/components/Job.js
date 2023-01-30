const Job = (props) => {
  return (
    <div className={props.color}>
      <h2>{props.title}</h2>
      <p>
        <span>{props.contractType}</span> - <span>{props.country}</span> -{" "}
        <span>{props.city}</span>
      </p>
    </div>
  );
};

export default Job;

// Job ayant pour props className, title, contractType, country et city
