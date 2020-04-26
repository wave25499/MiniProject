import React from 'react';
import { Table, NavLink } from 'reactstrap';


const Tab = (props) => {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Anime</th>
            <th>Day</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td><NavLink href="https://myanimelist.net/anime/33050/Fate_stay_night_Movie__Heavens_Feel_-_III_Spring_Song">Fate/stay night Movie: Heaven's Feel - III. Spring Song</NavLink></td>
            <td>Monday</td>
            <td>23.00 - 23.30</td>
            <td>On Air</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td><NavLink href="https://myanimelist.net/anime/39597/Sword_Art_Online__Alicization_-_War_of_Underworld">Sword Art Online: Alicization - War of Underworld</NavLink></td>
            <td>Sunday</td>
            <td>22.30 - 23.00</td>
            <td>Finished Airing</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td><NavLink href="https://myanimelist.net/anime/39551/Tensei_shitara_Slime_Datta_Ken_2nd_Season">Tensei shitara Slime Datta Ken 2nd Season</NavLink></td>
            <td>Unknown</td>
            <td>Unknown</td>
            <td>Coming Soon</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default Tab;