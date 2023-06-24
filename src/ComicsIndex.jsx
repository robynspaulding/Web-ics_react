/* eslint-disable react/prop-types */
export function ComicsIndex(props) {
  return (
    <div>
      <h1>All Comics!</h1>
      {props.comics.map((comic) => (
        <div key={comic.id}>
          <h2>{comic.title}</h2>
          <img src={comic.image} width="500" height="300" />
          <br />
          <button onClick={() => props.onShowComic(comic)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
