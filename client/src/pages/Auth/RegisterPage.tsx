import './style.css'
import RegisterForm from "./components/RegisterForm";
import useUser from '../../hooks/useUser';

export default function RegisterPage(){
    const {addUser} = useUser();
    return (
        <div className='page-form'>
            <RegisterForm onAddUser={addUser}/>
        </div>
    )
}