import {useParams, useSearchParams} from "react-router-dom";
const Post = () => {
    const params = useParams();
    console.log(params);
    const {category, id} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('price'));
    console.log(searchParams.get('sort'));
    return(
        <>
            <h1>Post Page - {category}</h1>
            <h1>Post Page with Id - {id}</h1>
        </>
    );
}
export default Post;