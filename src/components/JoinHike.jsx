import Hike from "./Hike";
import hikes from "../assets/hikes";

function JoinHike() {
  return (
    <div id="join-hike">
      <h2>Join a Hike</h2>
      <div className="hike-section">
        <Hike hikeType="available" hikeInfo={hikes[0]} />
        <Hike hikeType="available" hikeInfo={hikes[1]} />
        <Hike hikeType="available" hikeInfo={hikes[2]} />
        <Hike hikeType="available" hikeInfo={hikes[3]} />
        <Hike hikeType="available" hikeInfo={hikes[4]} />
      </div>
    </div>
  );
}
export default JoinHike;
