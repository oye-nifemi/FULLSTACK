import { CreateUserDto } from "../../../../../../nest-waf-primer/src/student-registration/users/dto/create-user.dto";
import { ModeOfEntry } from "../../../../../../nest-waf-primer/src/student-registration/studentRegistration.types";

export type User = {
    id: number,
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    nationality: string
    address: string
    department: string,
    matriculationNumber: number,
    modeOfEntry: ModeOfEntry;
    programOfStudy: string;
    yearOfEntry: number;
    user: CreateUserDto;
}