

const Employee = (props)=>{

    const {person} = props;
    console.log(person);

    return(
        <>
        <td>{person.id}</td>
        <td>{person.email}</td>
        <td>{person.first_name}</td>
        <td>{person.last_name}</td>
        <td><img src={person.avatar} width={50} alt={person.first_name} /></td>
        </>
    )

}

export default Employee;