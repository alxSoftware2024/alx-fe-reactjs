import React from 'react'
import  {useQuery} from 'react-query';
// Define a fetch function that can be used to fetch data from an API
const fetchData=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};
function PostsComponent() {
    // Use the useQuery hook to handle data fetching and caching
    const{data,isError,isLoading,fetchPosts}=useQuery('fetchData',fetchData);
    if(isLoading)return<div>Loading...</div>
    if(isError)return<div>Error Loading data..</div>
  return (
    <div>
            {data.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
  )
}

export default PostsComponent