import { Link, Outlet, useParams } from 'react-router-dom';
import { authors } from './Author';

export const Chapters = () => {
  return (
    <>
      <ul>
        <li>Chapter I</li>
        <li>Chapter II</li>
        <li>Chapter III</li>
        <li>Chapter IV</li>
      </ul>
    </>
  );
};

export const Character = () => {
  return <ul>
  <li>Good boy</li>
  <li>Bad boy</li>
  <li>Good girl</li>
  <li>Bad girl</li>
</ul>

}

export const Info = () => {
  return <>
    <Link to="character">
      character
    </Link>
    <Link to="chapter">
      chapter
    </Link>

    <Outlet/>
  </>
}

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
