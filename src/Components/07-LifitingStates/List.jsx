const List = ({ list, query, completed }) => {
    //list is our data 
    //query is what we are searching by 
    //Completed is if the checkBox has been ticked or not

    const filterComplete = () => (list)=> list.completed === completed;
    // let complete = function complete(completed) {
    //     return function (list) {
    //       return list.completed === completed;
    //     };
    //   };
    const filterQuery = () => (list) => list.title.toLowerCase().includes(query.toLowerCase());
    // let filterQuery = function filterQuery(query) {
    //     return function (list) {
    //       return list.title.toLowerCase().includes(query.toLowerCase());
    //     };
    //   };

    //Empty array
  let filteredList = [];

    //if true 
    if(completed){
        //filter the data first by if it completed and then by the query IF THERE IS A QUERY and assign the data to filteredList
        filteredList = list.filter(filterComplete()).filter(filterQuery())
    }else{
        //filter based on the query and assign the data to filteredList
        filteredList = list.filter(filterQuery())
    }

  return (
    <>
      {filteredList.map((tempVal) => (
        <div key={tempVal.id}>
          <h3>{tempVal.title}</h3>
          {
              tempVal.completed? <p style={{textDecoration:"line-through", color:"red"}}>Complete</p>: <p>False</p>
          }
          {/* <input type="checkbox" checked={tempVal.completed} readOnly /> */}
        </div>
      ))}
    </>
  );
};

export default List;
