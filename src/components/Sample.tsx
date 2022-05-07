interface MyProps {
  loadingPost: boolean;
  loadingUsers: boolean;
  post: any;
  users: any;
}

const Sample = ({ loadingPost, loadingUsers, post, users }: MyProps) => {
  return (
    <div>
      <section>
        <h1>포스트</h1>
        {loadingPost && '로딩 중...'}
        {!loadingPost && post && (
          <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
          </div>
        )}
      </section>
      <hr />
      <section>
        <h1>사용자 목록</h1>
        {loadingUsers && '로딩 중...'}
        {!loadingUsers && users && (
          <ul>
            {users.map((user: any) => (
              <li key={user.id}>
                {user.username} ({user.email}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Sample;
