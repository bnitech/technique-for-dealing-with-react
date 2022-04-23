import { useParams } from 'react-router-dom';

interface Data {
  name: string;
  description: string;
}

const data: Record<string, Data> = {
  velopert: {
    name: '김민준',
    description: '리엑트를 좋아하는 개발자',
  },
  dongbin: {
    name: '임동빈',
    description: '타입스트립트를 좋아하는 개발자',
  },
};

const Profile = () => {
  const { username } = useParams<{ username: string }>();
  const profile: Data | undefined = username ? data[username] : undefined;

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile?.name}</h2>
          <p>{profile?.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
