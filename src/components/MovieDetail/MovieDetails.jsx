import StarIcon from "@mui/icons-material/Star";
import { CalendarToday, StarBorder, Translate } from "@mui/icons-material";

const MovieDetails = ({ movie }) => {
  return (
    <div className="rounded bg-gray-300 w-full py-3">
      <div className="grid grid-flow-row">
        <div className="mb-4 md:mb-0 row-span-1 ml-2">
          <h3 className="text-gray-500 text-base font-semibold flex items-center">
            {" "}
            <span className="mr-2 mb-1">
              {" "}
              <CalendarToday style={{ fontSize: "16px" }} />
            </span>
            Released Year
          </h3>
          <p className="text-gray-800">{movie.release_date.slice(0, 4)}</p>
        </div>
        <div className="mb-4 md:mb-0 row-span-1 ml-2">
          <h3 className="text-gray-500 text-base font-semibold flex items-center">
            {" "}
            <span className="mr-2 mb-1">
              {" "}
              <Translate style={{ fontSize: "16px" }} />
            </span>
            Audio Languages
          </h3>
          <div className="flex space-x-2">
            {["English", "Hindi", "Tamil", "Telegu", "Kannada"].map(
              (lang, index) => (
                <span
                  key={index}
                  className="bg-slate-900 text-white px-2 py-1 rounded-full text-xs"
                >
                  {lang}
                </span>
              )
            )}
          </div>
        </div>
        <div className="mb-4 md:mb-0 row-span-1 ml-2">
          <h3 className="text-gray-500 text-base font-semibold flex items-center">
            {" "}
            <span className="mr-2 mb-1">
              {" "}
              <StarBorder style={{ fontSize: "16px" }} />
            </span>
            Ratings
          </h3>
          <div className="grid grid-flow-col grid-cols-2 space-x-2">
            <div className="rounded bg-gray-600">
              <div className="">
                <span>IMDB</span>
                <span className="flex items-center">
                  <StarIcon style={{ color: "#F6BE00" }} />
                  <StarIcon style={{ color: "#F6BE00" }} />
                  <StarIcon style={{ color: "#F6BE00" }} />
                  <StarIcon style={{ color: "#F6BE00" }} />
                  <StarIcon style={{ color: "#F6BE00" }} />
                </span>
              </div>
            </div>
            <div className="rounded bg-gray-600">
              <div className="ml-3">
                <span>IMDB</span>
                <span className="flex items-center">
                  <StarIcon style={{ color: "#F6BE00" }} />
                  <StarIcon style={{ color: "#F6BE00" }} />
                  <StarIcon style={{ color: "#F6BE00" }} />
                  <StarIcon style={{ color: "#F6BE00" }} />
                  <StarIcon style={{ color: "#F6BE00" }} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
