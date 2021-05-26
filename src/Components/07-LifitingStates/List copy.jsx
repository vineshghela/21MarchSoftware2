const List = ({ list, query, completed }) => {
    //list is our data 
    // query is what we are searching by 
    // Completed is weather the checkBox has been ticked or not

    const complete = () => (list)=> list.completed === completed;

    // const complete = function(list){
    //     return list.completed === completed
    // } 
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
        filteredList = list.filter(complete).filter(filterQuery())
        // filter based on completed first
        // then filter based on query
    }else{
        //filter based on the query and assign the data to filteredList
        filteredList = list.filter(filterQuery())
    }

  return (
    <>
      {filteredList.map((tempVal) => (
        <div key={tempVal.id}>
          <h3>{tempVal.title}</h3>
          <input type="checkbox" checked={tempVal.completed} readOnly />
        </div>
      ))}
    </>
  );
};

export default List;
