/* eslint-disable react/prop-types */
export function ComicsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateComic(params);
    event.target.reset();
  };

  return (
    <div>
      <h1> New Comic </h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Image: <input name="image" type="text" />
        </div>
        <button type="submit">Create Comic</button>
      </form>
    </div>
  );
}
