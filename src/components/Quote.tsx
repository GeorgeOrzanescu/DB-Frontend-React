type quoteProp = {
  saying: string;
};

const Quote: React.FunctionComponent<quoteProp> = (props) => {
  return <p className="saying">{props.saying}</p>;
};

export default Quote;
