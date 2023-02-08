import React from "react";
import StatsBox from "./StatsBox";

class DataBox extends React.Component {
    render() {
        return(
            <div className="box">
                <div>
                    <img src={this.props.imgUrl} className="playerImg" alt={this.props.name} /> 
                    <div className="metadata">
                        <div className="name">
                            {this.props.playerName + " -"} <span className="posTeam"> { this.props.position + " - " + this.props.team} </span> 
                        </div>
                        <div className="metastats">
                            {"Height/Weight: " + this.props.height + ", " + this.props.weight.replace("lbs","") + 
                            " | Age: " + this.props.age + " | Contract: " + this.props.contractYears + " yr(s) / $" 
                            + parseInt(this.props.yearlyAvg).toLocaleString("en-US") + " avg" }
                        </div>
                    </div>
                </div>
                <StatsBox
                    cumulative_ranking={this.props.cumulative_ranking}
                    games={this.props.games}
                    mpg={this.props.mpg}
                    ppg={this.props.ppg}
                    rpg={this.props.rpg}
                    ast={this.props.ast}
                    stl={this.props.stl}
                    blk={this.props.blk}
                    tov={this.props.tov}
                    fg_pct={this.props.fg_pct}
                    three_pct={this.props.three_pct}
                    three_pg={this.props.three_pg}
                />
            </div>
        );
    }
   }
   export default DataBox;