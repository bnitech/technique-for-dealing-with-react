import Sample from '../components/Sample';
import { connect } from 'react-redux';
import { getPost, getUsers } from '../modules/sample';
import React from 'react';

interface MyProps {
  getPost(id: number): void;

  getUsers(id: number): void;

  post: any;
  users: any;
  loadingPost: boolean;
  loadingUsers: boolean;
}

const { useEffect } = React;
const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}: MyProps): JSX.Element => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getPost(1);
        await getUsers(1);
      } catch (e) {
        console.log(e);
      }
    };
    fn().then();
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default connect(
  ({ sample, loading }: any) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading['sample/GET_POST'],
    loadingUsers: loading['sample/GET_USER'],
  }),
  { getPost, getUsers },
)(SampleContainer);
