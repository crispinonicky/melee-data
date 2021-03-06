import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Gif from "./Gif";
import jab1 from "../images/ganondorf/jab1.gif";
import ftilt from "../images/ganondorf/ftilt.gif";
import dtilt from "../images/ganondorf/dtilt.gif";
import uptilt from "../images/ganondorf/uptilt.gif";
import dashattack from "../images/ganondorf/dashattack.gif";
import fsmash from "../images/ganondorf/fsmash.gif";
import dsmash from "../images/ganondorf/dsmash.gif";
import upsmash from "../images/ganondorf/upsmash.gif";
import nair from "../images/ganondorf/nair.gif";
import fair from "../images/ganondorf/fair.gif";
import dair from "../images/ganondorf/dair.gif";
import upair from "../images/ganondorf/upair.gif";
import bair from "../images/ganondorf/bair.gif";
import grab from "../images/ganondorf/grab.gif";
import dashgrab from "../images/ganondorf/dashgrab.gif";
import neutralb from "../images/ganondorf/neutralb.gif";
import sideb from "../images/ganondorf/sideb.gif";
import upb from "../images/ganondorf/upb.gif";
import downb from "../images/ganondorf/downb.gif";

class Ganondorf extends Component {
  render() {
    return (
      <div>
        <h1>Ganondorf</h1>
        <div className="all-moves">
          <div className="move-card">
            <h3>Jab</h3>
            <img src={jab1} width="270px" />
            <ul>
              <li>Total Frames: 21</li>
              <li>Active Frames: 3-5</li>
              <li>IASA Frame: 19</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Forward Tilt</h3>
            <img src={ftilt} width="270px" />
            <ul>
              <li>Total Frames: 29</li>
              <li>Active Frames: 9-11</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Down Tilt</h3>
            <img src={dtilt} width="270px" />{" "}
            <ul>
              <li>Total Frames: 35</li>
              <li>Active Frames: 10-12</li>
              <li>IASA Frame: 35</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Up Tilt</h3>
            <img src={uptilt} width="270px" />{" "}
            <ul>
              <li>Total Frames: 114</li>
              <li>Active Frames: 81-83</li>
              <li>IASA Frame: 113</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Dash Attack</h3>
            <img src={dashattack} width="270px" />{" "}
            <ul>
              <li>Total Frames: 39</li>
              <li>Active Frames: 7-16</li>
              <li>IASA Frames: 38</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Forward Smash</h3>
            <img src={fsmash} width="270px" />{" "}
            <ul>
              <li>Total Frames: 66</li>
              <li>Active Frames: 20-24</li>
              <li>IASA Frames: 60</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Up Smash</h3>
            <img src={upsmash} width="270px" />{" "}
            <ul>
              <li>Total Frames: 54</li>
              <li>Active Frames: 21-23, 26-29</li>
              <li>IASA Frame: 40</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Down Smash</h3>
            <img src={dsmash} width="270px" />{" "}
            <ul>
              <li>Total Frames: 49</li>
              <li>Active Frames: 19-22, 29,32</li>
              <li>IASA Frame: 47</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Neutral Air</h3>
            <img src={nair} width="270px" />{" "}
            <ul>
              <li>Total Frames: 45</li>
              <li>Active Frames: 3-31</li>
              <li>Auto Cancel Frames: 1-2, 36-45</li>
              <li>Landlag Frames: 15/7 (L-Canceled)</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Forward Air</h3>
            <img src={fair} width="270px" />{" "}
            <ul>
              <li>Total Frames: 34</li>
              <li>Active Frames: 7-10</li>
              <li>Auto Cancel Frames: 20-34</li>
              <li>IASA Frame: 33</li>
              <li>Landlag Frames: 25/12 (L-Canceled)</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Back Air</h3>
            <img src={bair} width="270px" />{" "}
            <ul>
              <li>Total Frames: 28</li>
              <li>Active Frames: 6-17</li>
              <li>Auto Cancel Frames: 1-5, 19-28</li>
              <li>Landlag Frames: 15/7 (L-Canceled)</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Up Air</h3>
            <img src={upair} width="270px" />{" "}
            <ul>
              <li>Total Frames: 33</li>
              <li>Active Frames: 5-7</li>
              <li>IASA Frame: 30</li>
              <li>Auto Cancel Frames: 1-2, 16-33</li>
              <li>Landlag Frames: 15/7 (L-Canceled)</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Down Air</h3>
            <img src={dair} width="270px" />{" "}
            <ul>
              <li>Total Frames: 32</li>
              <li>Active Frames: 10-14</li>
              <li>IASA Frame: 29</li>
              <li>Auto Cancel Frames: 1-5, 24-32</li>
              <li>Landlag: 18/9 (L-Canceled)</li>
            </ul>
          </div>
          <div className = "move-card">
            <h3>Neutral B</h3>
            <img src={neutralb} width="270px" />{" "}
            <ul>
              <li>Total Frames: 46</li>
              <li>Active Frames: 17-66</li>
            </ul>
            </div>
            <div className = "move-card">
            <h3>Up B</h3>
            <img src={upb} width="270px" />{" "}
            <ul>
              <li>Total Frames: 39</li>
              <li>Active Frames: 5-23</li>
              <li>Intangibility Frames: 5-8</li>
            </ul>
            </div>
            <div className = "move-card">
            <h3>Down B</h3>
            <img src={downb} width="270px" />{" "}
            <ul>
              <li>Total Frames: 79</li>
              <li>Active Frames: 6-9, 43
              </li>
            </ul>
            </div>
            <div className = "move-card">
            <h3>Side B</h3>
            <img src={sideb} width="270px" />{" "}
            <ul>
              <li>Total Frames: 74</li>
              <li>Active Frames: 5-44</li>
              <li>Landlag Frames: 41</li>
            </ul>
            </div>
            <div className = "move-card">
            <h3>Grab</h3>
            <img src={grab} width="270px" />{" "}
            <ul>
              <li>Total Frames: 30</li>
              <li>Active Frames: 7-8</li>
            </ul>
            </div>
            <div className = "move-card">
            <h3>Dash Grab</h3>
            <img src={dashgrab} width="270px" />{" "}
            <ul>
              <li>Total Frames: 40</li>
              <li>Active Frames: 11-12</li>
            </ul>
            </div>
          <Link to="/">Hide Component</Link>
        </div>
      </div>
    );
  }
}

export default Ganondorf;
