import Base from "./base.model";

export default interface User extends Base {
  avatar: string;
  username: string;
  email: string;
  pass: string;
}
