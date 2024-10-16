import avatar from "/avatar1.png";
import Hike from "./Hike";
import hikes from "../assets/hikes";

function Bio() {
  return (
    <div id="bio">
      <div className="bio-section">
        <div className="bio-header-section">
          <img className="avatar" src={avatar} alt="avatar" />
          <h2>Annie McMahon</h2>
          <button>Edit Bio</button>
        </div>
        <div className="bio-text-section">
          <h3>About Me</h3>
          <div className="bio-text">
            <p>
              Bio text goes here ... Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Rem reprehenderit assumenda quibusdam iste eos
              exercitationem molestias nulla fuga repellat incidunt ullam
              cupiditate necessitatibus quidem debitis dolorum nesciunt labore
              quos, laboriosam tempora qui tempore quo velit! Libero quod
              eligendi at eum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              magnam asperiores magni amet quaerat reiciendis architecto
              pariatur quod omnis suscipit.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
              quia minus adipisci, veniam, praesentium fuga laudantium modi
              tempore ullam nobis excepturi itaque dignissimos ducimus!
              Temporibus veniam molestiae expedita repudiandae iure?
            </p>
          </div>
        </div>
      </div>

      <div className="hike-section">
        <h2>My Hikes</h2>
        <h3>Coming Up</h3>
        <div>
          <Hike hikeType="created" hikeInfo={hikes[0]}/>
          <Hike hikeType="joined" hikeInfo={hikes[1]}/>
        </div>
        <h3>History</h3>
        <div>
          <Hike hikeType="history" hikeInfo={hikes[2]}/>
          <Hike hikeType="history" hikeInfo={hikes[3]}/>
          <Hike hikeType="history" hikeInfo={hikes[4]}/>
        </div>
      </div>
    </div>
  );
}
export default Bio;
