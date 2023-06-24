export function ComicsShow(props) {
  return (
    <div>
      <h1>Comic Info</h1>
      <p>Title: {props.comic.title}</p>
      <img src={props.comic.image} />
    </div>
  );
}
