export class UserDetails
{
    userId: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    passwordHash: string;
    passwordSalt: string;
    photoUrl: string;
    provider: string;
    contactNo: string;
    DOB: Date;
    createdBy: string;
    createdOn: Date;
    isDelete: boolean;
    modifiedOn: Date;
}