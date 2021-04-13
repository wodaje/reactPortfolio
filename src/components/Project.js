export default function Project(props) {
  return (
    <div className="col-sm-4 col-md-8 col-lg-4" style={{ textAlign: "center" }}>
      <a className="port" href={props.readme}>
        {props.readmeText}{" "}
      </a>
      <a className="port" href={props.deployed}>
        {props.deployedText}{" "}
      </a>
      <hr></hr>
      <img
        className="img-fluid port-image"
        src={props.imgSrc}
        alt={props.imgSrcText}
      ></img>
      <a className="port" href={props.github}>
        {props.githubText}{" "}
      </a>
    </div>
  );
}
