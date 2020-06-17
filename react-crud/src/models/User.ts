export type User = {
  id: number,
  forename: string,
  surname: string,
  birthday: string,
  active: boolean;
}

export const defaultUser: Omit<User, 'id'> = {
  forename:'',
  surname:'',
  birthday:'',
  active:false
};
