/** Here we illustrate useEffect for fetching remote data at mount time and event driven occasion */
import React, {useState, useEffect, useRef} from 'react';
import ShowStudent from './ShowStudent';
type Props = {
    name?: string;
    other?: string;
}
const CreateUser: React.FC<Props> = (props) => {
    //const [state, setState] = useState(initialState);
    const [user, setUser] = useState(null);
    let userIdInput: any = useRef(); //any is used here to accommodate possible undefined.
    //to be called when refetch is required. User id is read from input with ref attribute name userIdInput
    const refetchData = async () =>{
        try {
            let response = await fetch(`http://isms.com/students/${userIdInput.current.value}`);
            let data = await response.json()
            setUser(data);
        } catch (error) {
            setUser(null);
        }
    };
    const fetchData = async () =>{
        try {
            let response = await fetch(`http://isms.com/students/1`);
            let data = await response.json()
            setUser(data);
        } catch (error) {
            setUser(null);
        }
    };
    useEffect(() => {
        fetchData();
        userIdInput.current.focus(); //focus on the referenced input field after fetching initial data
    }, []);
    //prepare conditional showing of user
    const showStudent = () => {
        if (user!==null){
            return <ShowStudent user={user} />
        }
        else {
            return 'No student to display';
        }
    }
    return (
        <div>
            <p>Hello {props.name}. View Student using ID</p>
            <p>
                <input className='size' ref={userIdInput} type="number"
                placeholder="Enter UserId here" />
            </p>
            <p>
                <button onClick={refetchData}>
                    View Student
                </button>
            </p>
            <p>
                {showStudent()}
            </p>
        </div>
    )
}
CreateUser.defaultProps = {
    name: "Admin"
}
export default CreateUser;