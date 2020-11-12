import React from "react";
import { Link } from "react-router-dom";

import '../css/modules/card.css';

function Card({ data }) {
  return (
    <article className="card">
          <Link to="/video">
            <img src={data.videoThumb} alt="description"></img>
          </Link>

          <aside className="grid">
            <div className="thumb-nail-column">
              <img
                className="thumb_pic"
                src={data.channelThumb}
                alt="channel thumb"
              ></img>
            </div>

            <div className="card-details-column">
              <h2>{data.title}</h2>
              <p>{data.channelName}</p>
              <p>{data.views} views</p>
            </div>
          </aside>
     

    </article>
  );
}
export default Card;
