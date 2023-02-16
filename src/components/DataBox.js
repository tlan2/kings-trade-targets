import React from "react";
import StatsBox from "./StatsBox";
import './DataBox.css';

class DataBox extends React.Component {
    render() {
        var contractYears = parseInt(this.props.contractYears) === 0 ? "2-Way Contract" : this.props.contractYears;
        var yearlyAvg = isNaN(parseInt(this.props.yearlyAvg)) ? "" : parseInt(this.props.yearlyAvg).toLocaleString("en-US");
        var contractInfo = (contractYears === "2-Way Contract") ? contractYears : contractYears + " yr(s) / $" + yearlyAvg + " AVG.";
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
                            " | Age: " + this.props.age + " | Contract: " + contractInfo }
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