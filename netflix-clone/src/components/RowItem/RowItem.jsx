import "./RowItem.css";

function RowItem({ movie }) {
  return (
    <div>
      <img
        src={`${import.meta.env.VITE_IMG_BASE_URL}${movie?.poster_path}`}
        alt=""
        className="row-poster"
      />
    </div>
  );
}

export default RowItem;
