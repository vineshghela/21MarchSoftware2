import axios from "axios";
import { useEffect, useState } from "react";
import Employee from "./Employee";

import {Table, Container, Spinner} from 'reactstrap';

const Tesco = () => {
    // Where we store our data 
    const [data, setData] = useState([]);
    //has the data loaded?
    const [isLoaded , setIsLoaded] = useState(false)
    // What about is there is an error ?
    const [error, setError] = useState(null)

    //pending 
    //resolved - is has loaded
    //rejected - it has loaded
  useEffect(() => {
      setTimeout(()=>{

          axios
          .get("https://reqres.in/api/users")
          .then((response) => {
              setIsLoaded(true);
              setData(response.data.data);
              
            })
            .catch((error) => {
                setError(error);
                setIsLoaded(true);
                console.error(error);
                
            });
        },5000)
  }, []);


  if(error){
      return <h1>Oh noo something went wrong with status code {error.message}</h1>
  }else if(!isLoaded){
      return(
        <>
      <p>Please wait loading data....</p>
      <Spinner type="grow" color="primary" />
      </>
      )
  }else{

  return (
    <>
    <Container>
        
    
      <h1>Welcome to Tesco</h1>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp) => (
              <tr>
                  <Employee person={emp} />
              </tr>
          ))}
        </tbody>
      </Table>
      </Container>
    </>
  );
};
}

export default Tesco;
