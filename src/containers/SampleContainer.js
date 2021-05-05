import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Sample from '../components/Sample';
import {getPosts, getUsers} from "../modules/sample";

const SampleContainer = ({getPosts, getUsers, post, users, loadingPost, loadingUsers}) => {
    useEffect(()=>{
       const fn = async () => {
           try {
               await getPosts(1)
               await getUsers(1)
           } catch (e) {
               console.log(e)
           }
       };
       fn();
},[getPosts,getUsers]);

return (
    <Sample post={post} users={users} loadingPost={loadingPost} loadingUsers={loadingUsers}/>
)
}

export default connect(({sample,loading})=>({
    post : sample.post,
    users : sample.users,
    loadingPost : loading['sample/GET_POST'],
    loadingUsers : loading['sample/GET_USERS']
}),{
    getPosts,
    getUsers
}) (SampleContainer);