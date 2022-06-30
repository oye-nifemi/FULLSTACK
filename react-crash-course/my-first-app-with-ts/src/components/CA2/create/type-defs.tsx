import { CreateUserDto } from "../../../../../../nest-waf-primer/src/student-registration/users/dto/create-user.dto";
import { ModeOfEntry } from "../../../../../../nest-waf-primer/src/student-registration/studentRegistration.types";

export type User = {
    id: number,
    department: string,
    matriculationNumber: number,
    modeOfEntry: ModeOfEntry;
    programOfStudy: string;
    yearOfEntry: number;
    user: CreateUserDto;
}