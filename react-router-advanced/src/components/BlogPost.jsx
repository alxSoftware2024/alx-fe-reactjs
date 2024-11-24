import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Extract the 'id' from the URL

  return (
    <div>
      <h1>Blog Post ID: {id}</h1>
      {/* You can use the 'id' to fetch the post data or display it */}
    </div>
  );
}

export default BlogPost;