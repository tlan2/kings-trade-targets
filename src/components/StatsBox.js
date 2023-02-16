import React from "react";
import './StatsBox.css';

class StatsBox extends React.Component {
    render () {
        return(
            <div>
                <table className="statstable">
                    <thead className="statsheaders">
                        <tr>
                            <th>Catch-All<br/>Ranking</th>
                            <th>G</th>
                            <th>MPG</th>
                            <th>PPG</th>
                            <th>RPG</th>
                            <th>AST</th>
                            <th>STL</th>
                            <th>BLK</th>
                            <th>TOV</th>
                            <th>FG%</th>
                            <th>3P%</th>
                            <th>3PA</th> 
                        </tr>
                    </thead>
                    <tbody className="stats">
                        <tr>
                            <td>{this.props.cumulative_ranking}</td>
                            <td>{this.props.games}</td>
                            <td>{this.props.mpg}</td>
                            <td>{this.props.ppg}</td>
                            <td>{this.props.rpg}</td>
                            <td>{this.props.ast}</td>
                            <td>{this.props.stl}</td>
                            <td>{this.props.blk}</td>
                            <td>{this.props.tov}</td>
                            <td>{this.props.fg_pct}</td>
                            <td>{this.props.three_pct}</td>
                            <td>{this.props.three_pg}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        );
    }
   }
   export default StatsBox;