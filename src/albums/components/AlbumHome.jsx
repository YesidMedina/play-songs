import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

export const AlbumHome = ({ id, name, image, tracks }) => {
  return (
    <div className="container">
      <Link to={`/albums/${id}/songs`}>
        <table className="table ">
          <tbody>
            <tr>
              <img
                src={image}
                alt={name}
                className="photo"
                width="50"
                height="50"
              />

              <td className="text-table">
                {name} <br />
                <span className="text-table1"> Canciones: {tracks}</span>
                <span className="icon-1">
                  <AiFillCaretRight />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </Link>
    </div>
  );
};
