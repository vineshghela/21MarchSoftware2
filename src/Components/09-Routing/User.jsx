import {useParams} from 'react-router-dom';

const User =()=>{

    const {apples, pears} = useParams();

    return(
        <h1>Welcome user the value from the URL is ?{apples} another value{pears} </h1>
    )

}

export default User;