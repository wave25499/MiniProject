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
          <tr>
            <th scope="row">4</th>
            <td><NavLink href="https://myanimelist.net/anime/37999/Kaguya-sama_wa_Kokurasetai__Tensai-tachi_no_Renai_Zunousen">Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen</NavLink></td>
            <td>Saturday</td>
            <td>16.00 - 16.30</td>
            <td>Finished Airing</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td><NavLink href="https://myanimelist.net/anime/40532/Appare-Ranman">Appare-Ranman!</NavLink></td>
            <td>Friday</td>
            <td>21.30 - 22.00</td>
            <td>On Air</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td><NavLink href="https://myanimelist.net/anime/40221/Kami_no_Tou">Kami no Tou</NavLink></td>
            <td>Thursday</td>
            <td>00.30 - 01.00</td>
            <td>On Air</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td><NavLink href="https://myanimelist.net/anime/39587/Re_Zero_kara_Hajimeru_Isekai_Seikatsu_2nd_Season">Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season</NavLink></td>
            <td>Unknown</td>
            <td>Unknown</td>
            <td>Coming Soon</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default Tab;