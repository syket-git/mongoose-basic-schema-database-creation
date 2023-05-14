interface IUser {
  id: number;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  roll: number;
  gender: 'male' | 'female' | 'transgender';
  email: string;
  department: string;
  dateOfBirth: string;
  contactNo: string;
  emergencyContactNo?: string;
}
export default IUser;
