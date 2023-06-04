import { Login } from "./Login";
import { Signup } from "./Signup";

export function Content() {
  return (
    <div>
      <h1>Welcome to Web-ics!</h1>
      <Signup />
      <Login />
    </div>
  );
}
