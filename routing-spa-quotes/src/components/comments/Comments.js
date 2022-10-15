import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import NewCommentForm from "./NewCommentForm";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import classes from "./Comments.module.css";

const Comments = () => {
  const {
    sendRequest,
    status,
    data: fetchedComments,
    error,
  } = useHttp(getAllComments);
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const quoteId = params.quoteId;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && fetchedComments && fetchedComments.length > 0) {
    comments = <CommentsList comments={fetchedComments} />;
  } else {
    comments = <p className="centered">No comments were added yet</p>;
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comments}
    </section>
  );
};

export default Comments;
