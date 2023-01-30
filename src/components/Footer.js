const Footer = (props) => {
  return (
    <footer>
      <div>
        Made with <span className={props.style}>{props.techno}</span> at{" "}
        <span className={props.style}>{props.place}</span> By{" "}
        <span className={props.style}>{props.name}</span>
      </div>
    </footer>
  );
};

export default Footer;
