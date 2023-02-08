import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import About from "./components/About.js";

function createCard(item) {
  return (
    <Card
      key={item.name} 
      imgUrl={item.picUrl} 
      playerName={item.name}
      position={item.pos}
      team={item.team_id}
      height={item.height}
      weight={item.weight}
      age={item.age}
      contractYears={item.contractYears}
      yearlyAvg={item.yearlyAvg}
      cumulative_ranking={item.cumulative_ranking}
      games={item.g}
      mpg={item.mp_per_g}
      ppg={item.pts_per_g}
      rpg={item.trb_per_g}
      ast={item.ast_per_g}
      stl={item.stl_per_g}
      blk={item.blk_per_g}
      tov={item.tov_per_g}
      fg_pct={item.fg_pct}
      three_pct={item.fg3_pct ? item.fg3_pct : "0.0"}
      three_pg={item.fg3a_per_g}
    />
  )
}

function App() {
  const [data, setData] = useState([]);
  
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  
  useEffect(()=>{
    getData()
  },[])

  
  const bigs = data.filter( (item) => item["my_position_category"] === "Bigs" && item["team_id"] !== "SAC");
  const sortedBigs = bigs.sort( (a,b) => (parseInt(a.cumulative_ranking) > parseInt(b.cumulative_ranking)) ? 1 : -1 );
  const wings = data.filter( (item) => item["my_position_category"] === "Forwards" && item["team_id"] !== "SAC");
  const sortedWings = wings.sort( (a,b) => (parseInt(a.cumulative_ranking) > parseInt(b.cumulative_ranking)) ? 1 : -1 );
  const guards = data.filter( (item) => item["my_position_category"] === "Guards" && item["team_id"] !== "SAC");
  const sortedGuards = guards.sort( (a,b) => (parseInt(a.cumulative_ranking) > parseInt(b.cumulative_ranking)) ? 1 : -1 );
  const kings = data.filter((item) => item["team_id"] === "SAC")
  const sortedKings = kings.sort( (a,b) => (parseInt(a.cumulative_ranking) > parseInt(b.cumulative_ranking)) ? 1 : -1 );


  
  return (
    <div>
      <Navbar />
      <div id="about"></div>
      <h1 className="cards positionHeaders">ABOUT</h1>
      <About />
      <div className="cards" id="bigs">
        <h1 className="positionHeaders">BIGS</h1>
        {
            sortedBigs.map(createCard)
        }
      </div>
      <div className="cards" id="wings">
        <h1 className="positionHeaders">WINGS</h1>
        {
          sortedWings.map(createCard)
        }
      </div>
      <div className="cards" id="guards">
        <h1 className="positionHeaders">GUARDS</h1>
        {
          sortedGuards.map(createCard)
        }
      </div>
      <div className="cards" id="kings">
        <h1 className="positionHeaders">KINGS</h1>
        {
          sortedKings.map(createCard)
        }
      </div>
    </div>
  );
}

export default App;
