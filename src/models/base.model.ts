export default interface Base {
  id: string;
  active: boolean;
  deleted: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}
