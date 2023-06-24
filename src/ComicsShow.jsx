/* eslint-disable react/prop-types */
export function ComicsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateComic(props.comic.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyComic(props.comic);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Edit Comic Info</h1>
        <div>
          Title: <input defaultValue={props.comic.title} name="title" />
        </div>
        <div>
          Image URL: <input defaultValue={props.comic.image} name="image" />
        </div>
      </div>
      <button type="submit">Update</button>
      <br />
      <button onClick={handleClick}>Delete</button>
    </form>
  );
}
