import Base from "./base.model";

export default interface User extends Base {
  user: string;
  email: string;
  pass: string;
}
