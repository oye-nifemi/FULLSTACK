import React from 'react';
import {User} from './type-defs'
type Props = {
    user: User;
}
const ShowUser: React.FC<Props> = (props) => {
    const showUser = () => {
        const user = props.user;
        try{
            if(user.id !== undefined){//make user that user object is trully available
                return(
                    <table>
                        <th>Property</th>
                        <th>Value</th>
                        <tr>
                            <td>id</td>
                            <td>{user.id}</td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td>{user.department}</td>
                        </tr>
                        <tr>
                            <td>Matriculation Number:</td>
                            <td>{user.matriculationNumber}</td>
                        </tr>
                        <tr>
                            <td>Mode of Entry:</td>
                            <td>{user.modeOfEntry}</td>
                        </tr>
                        <tr>
                            <td>Program of Study:</td>
                            <td>{user.programOfStudy}</td>
                        </tr>
                        <tr>
                            <td>Year of Entry:</td>
                            <td>{user.yearOfEntry}</td>
                        </tr>
                    </table>
                )
            }else{
                return 'No user to display'; //user is null or elements are undefined
            }
        }catch(error){
            // return `Problem fetching user ${error.message}`;
        }
    }
    return (
        <div>
            {showUser()}
        </div>
    )
}
export default ShowUser;