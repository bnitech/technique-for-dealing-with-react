import { NavLink, Outlet } from 'react-router-dom';
import CSS from 'csstype';

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};

const ArticleItem = ({ id }: any) => {
  const activeStyle: CSS.Properties = {
    color: 'green',
    fontSize: '21px',
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : {})}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;
