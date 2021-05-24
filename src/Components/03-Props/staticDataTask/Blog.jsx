
import blogPost from '../static/Posts.json'
import Post from './Post';


const Blog =()=>{


    for(let el of blogPost){
        console.log(el.body);
    }

return(
    <>
    <h1>hello</h1>
    {
        blogPost.map((data)=>(
            <Post key={data.id} id={data.id} title={data.userId} userId={data.userId}/>
        ))
    }

    {
       

        
    }
    </>
    )
}

export default Blog;