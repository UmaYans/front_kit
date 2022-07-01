import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCommentByServiceId } from "../../../redux-toolkit/features/commentsSlice";
import { getServiceById } from "../../../redux-toolkit/features/serviceSlice";
import { getUser } from "../../../redux-toolkit/features/usersSlice";
import Commnts from "./Commnts";
import InfoCoutse from "./InfoCoutse";

import VideoChat from "./VideoChat";

const CourseById = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const servic = useSelector((state) => state.serv.servic);
  const user = useSelector((state) => state.user.users);
  const token = useSelector((state) => state.user.token);
  const comments = useSelector((state) => state.com.comments);
  useEffect(() => {
    dispatch(getServiceById(id));
    dispatch(getUser());
    dispatch(getCommentByServiceId(id));
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <InfoCoutse token={token} id={id} servic={servic} comments={comments} />
      </div>
      <div>
        <VideoChat user={user} token={token} />
      </div>
      <div>
        <Commnts user={user} token={token} id={id} comments={comments} />{" "}
      </div>
    </div>
  );
};

export default CourseById;
