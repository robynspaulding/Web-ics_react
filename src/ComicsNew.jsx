export function ComicsNew() {
  return (
    <div>
      <h1> New Comic </h1>
      <form>
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
