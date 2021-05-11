import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import commentApi from "api/commentApi";
import CommentItem from "../CommentItem";
import { Collapse } from "antd";
import "./styles.scss";

CommentList.propTypes = {
  owner: PropTypes.string.isRequired,
};

function CommentList({ owner }) {
  const [commentList, setCommentList] = useState([]);
  const { Panel } = Collapse;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await commentApi.getAll();
        const filterData = data.filter((x) => x.owner === owner);
        setCommentList(filterData);
      } catch (err) {
        console.log("failed to get comment list", err);
      }
      // setLoading(false);
    };
    fetchData();
  }, [owner]);

  return (
    <div className="comment-list">
      <Collapse ghost>
        <Panel header={`${commentList.length} reply`} key="1">
          {commentList.map((idx) => {
            return <CommentItem comment={idx} key={idx} />;
          })}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CommentList;
