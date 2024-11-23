import React from 'react'
import  {useQuery} from 'react-query';
// Define a fetch function that can be used to fetch data from an API
const fetchData=async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};
function PostsComponent() {
    const [clickCount, setClickCount] = useState(0);
    // Use the useQuery hook to handle data fetching and caching
    const{data,isError,isLoading,fetchPosts,error}=useQuery('fetchData',fetchData,// Query function
    {
      cacheTime: 1000 * 60 * 5, // 5 minutes
      staleTime: 1000 * 60, // 1 minute
      refetchOnWindowFocus: true,
      keepPreviousData: true,
    }
);
// Button click handler
const handleClick = () => {
    setClickCount(clickCount + 1); // Increment the click count each time the button is clicked
    console.log('Button clicked!', clickCount);
  };
    if(isLoading)return<div>Loading...</div>
    if(isError)return<div>Error Loading data..</div>
  return (
    <div>
            {data.map(item => (
                <div key={item.id}>{item.title}</div>
            ))}
             {/* Button that triggers the onClick handler */}
      <button onClick={handleClick}>Click me! (Clicked {clickCount} times)</button>
        </div>
  )
}

export default PostsComponent