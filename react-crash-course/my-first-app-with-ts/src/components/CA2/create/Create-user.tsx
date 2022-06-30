import React from 'react';
type Props = {
    name?: string;
    other?: string;
}
const CreateUser: React.FC<Props> = (props) => {
    return(
        <div>
            <form id="createUserForm" action="http://isms.com/students" method="POST">
                <fieldset id="createUserFormFieldSet">
                    <div>
                        <label>First name:</label>
                        <div>
                            <input id="firstName" name="firstName" type="text" placeholder="First name" required />
                        </div>
                    </div>
                    <div>
                        <label>Middle name:</label>
                        <div>
                            <input id="middleName" name="middleName" type="text" placeholder="Middle name" />
                        </div>
                    </div>
                    <div>
                        <label>Last name:</label>
                        <div>
                            <input id="lastName" name="lastName" type="text" placeholder="Last name" />
                        </div>
                    </div>
                    <div>
                        <label>Email:</label>
                        <div>
                            <input id="email" name="email" type="email" placeholder="Email" required />
                        </div>
                    </div>
                    <div>
                        <label>Date of birth:</label>
                        <div>
                            <input id="dateOfBirth" name="dateOfBirth" type="date" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" placeholder="yyyy-mm-dd" />
                        </div>
                    </div>
                    <div>
                        <label>Nationality:</label>
                        <div>
                            <input id="nationality" name="nationality" type="text" placeholder="Nationality" />
                        </div>
                    </div>
                    <div>
                        <label>Address:</label>
                        <div>
                            <input id="address" name="address" type="text" placeholder="Address"/>
                        </div>
                    </div>
                    <div>
                        <label>Department:</label>
                        <div>
                            <input id='department' name='department' type='text' placeholder='department' required />
                        </div>
                    </div>
                    <div>
                        <label>Matriculation Number:</label>
                        <div>
                            <input id='matriculationNumber' name='matriculationNumber' type='text' placeholder='Matriculation Number' required />
                        </div>
                    </div>
                    <div>
                        <label>modeOfEntry:
                            <div>
                                <select id="modeOfEntry" name="modeOfEntry">
                                    <option selected >Options...</option>
                                    <option value="UTME">UTME</option>
                                    <option value="Direct Entry">Direct Entry</option>
                                    <option value="Transfer">Transfer</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>programOfStudy:</label>
                        <div>
                            <input id="programOfStudy" name="programOfStudy" type="text" placeholder="Email" required />
                        </div>
                    </div>
                    <div>
                        <label>yearOfEntry:</label>
                        <div>
                            <input id="yearofentry" name="yearOfEntry" type="number" required placeholder="yyyy" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <button type="submit" id="submitCreateUserForm">Submit</button>
                        </div>
                        <div>
                            <button type="reset">Clear</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default CreateUser;