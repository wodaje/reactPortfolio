export default function Project(props) {
  return (
    <div className="col-sm-4 col-md-8 col-lg-4" style={{ textAlign: "center" }}>
      <a className="port" href={props.readme}>
        {props.readmeText}{" "}
      </a>{" "}
      <br />
      <a className="port" href={props.deployed}>
        {props.deployedText}{" "}
      </a>
      <br />
      <a className="port" href={props.github}>
        {props.githubText}{" "}
      </a>
      <hr></hr>
      <img
        className="img-fluid port-image"
        src={props.imgSrc}
        alt={props.alt}
      ></img>
      <hr></hr>
    </div>
  );
}
