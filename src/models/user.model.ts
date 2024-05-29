import Base from "./base.model";

export default interface User extends Base {
  username: string;
  email: string;
  pass: string;
}
