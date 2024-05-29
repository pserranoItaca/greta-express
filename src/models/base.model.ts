export default interface Base {
  id: number;
  active: boolean;
  deleted: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}
