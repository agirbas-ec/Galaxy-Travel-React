import React from "react";
import "./PricingStyles.css";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basit -</h3>
          <span className="bar"></span>
          <p className="btc">1 SEÇENEK</p>
          <p>-3 GÜN -</p>
          <p>-Görünüm-</p>
          <p>-Özlellikler-</p>
          <p>-Özel Gezi -</p>
          <Link to="/contact" className="btn">
            Rezervasyon
          </Link>
        </div>

        <div className="card">
          <h3>- Basit -</h3>
          <span className="bar"></span>
          <p className="btc">1 SEÇENEK</p>
          <p>-3 GÜN -</p>
          <p>-Görünüm-</p>
          <p>-Özlellikler-</p>
          <p>-Özel Gezi -</p>
          <Link to="/contact" className="btn">
            Rezervasyon
          </Link>
        </div>

        <div className="card">
          <h3>- Basit -</h3>
          <span className="bar"></span>
          <p className="btc">1 SEÇENEK</p>
          <p>-3 GÜN -</p>
          <p>-Görünüm-</p>
          <p>-Özlellikler-</p>
          <p>-Özel Gezi -</p>
          <Link to="/contact" className="btn">
            Rezervasyon
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
