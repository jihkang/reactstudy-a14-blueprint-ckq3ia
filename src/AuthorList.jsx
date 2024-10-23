import { Link, Outlet, useParams } from 'react-router-dom';
import { authors } from './Author';

export const Chapters = () => {
  const { id } = useParams();
  return (
    <>
      {id}
      <ul>
        <li>Chapter I</li>
        <li>Chapter II</li>
        <li>Chapter III</li>
        <li>Chapter IV</li>
      </ul>
    </>
  );
};

export const Series = () => {
  const { params } = useParams();

  return (
    <>
      {params}
      {authors.serieList(params)?.map((series) => (
        <Link to={`/author/${params}/${series}`}>{series}</Link>
      ))}

      <Outlet />
    </>
  );
};

export const AuthorList = () => {
  return (
    <>
      {authors.authorList().map((name) => (
        <Link to={`/author/${name}`}>{name}</Link>
      ))}
      <Outlet />
    </>
  );
};
