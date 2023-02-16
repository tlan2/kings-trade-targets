import React from "react";
import DataBox from "./DataBox";
import './Card.css';

class Card extends React.Component {
    render() {
        var cardStyle = {
            height: "19.5vh",
            width: "55vw",
            // borderRadius: "3px",
            padding: "0",
            backgroundColor: "#FFF",
            WebkitFilter: "drop-shadow(0px 0px 5px #663a82)",
            filter: "drop-shadow(0px 7px 9px #663a82)",
            display: "inline-block",
            margin: "10px"
        };
        return(
            <div style={cardStyle}>
                <DataBox 
                    imgUrl={this.props.imgUrl} 
                    playerName={this.props.playerName}
                    position={this.props.position}
                    team={this.props.team}
                    height={this.props.height}
                    weight={this.props.weight}
                    age={this.props.age}
                    contractYears={this.props.contractYears}
                    yearlyAvg={this.props.yearlyAvg} 
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
export default Card;