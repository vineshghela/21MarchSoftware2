import PropTypes from 'prop-types';

const Post = (props)=>{

    const {id,title,userId} = props

    return (
        <>
        <div id={id} >
            <h1>{props.headerText}</h1>
            <p>{userId}</p>
            <p>{title}</p>
            {/* <p>{body}</p> */}
        </div>
        </>
    )
}

Post.defaultProps={
    headerText :"This is a dummy val"
}
Post.propTypes = {
    body:PropTypes.string.isRequired
}

export default Post;