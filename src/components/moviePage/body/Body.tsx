import Description from "../description/Description";
import DetailPoster from "../detailPoster/DetailPoster";
import Season from "../season/Season";
import Video from "../video/Video";

function Body() {
  return (
    <div>
      <div className="flex ">
        <DetailPoster />
        <Description />
        <Video />
      </div>
      <div>
        <Season />
      </div>
    </div>
  );
}

export default Body;
