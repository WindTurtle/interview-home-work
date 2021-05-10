import { React, useEffect, useState } from "react";
import postApi from "api/postApi";
import PostList from "../components/PostList";
function ListPost() {
  const [postList, setListPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await postApi.getAll();
        setListPost(data);
      } catch (err) {
        console.log("failed to get post list", err);
      }
      // setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div style={{ marginTop: "30px" }}>
      <PostList postList={postList} />
    </div>
  );
}

export default ListPost;
