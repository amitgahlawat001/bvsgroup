import React from "react";
import { useMemo } from "react";
import image from "../../../images/storage.jpg";
import line from "../../../images/career-line.jpg";
import "./Services.css";
import { menuItems } from "./sideMenuItems";
import { socialMedia } from "../../socialMediaData";

function StorageDistribution() {
  const leftMenu = useMemo(() => {
    return menuItems.map((item) => (
      <a className="menu_link" href={item.link}>
        {item.title}
      </a>
    ));
  }, []);

  const socialMediaLinks = useMemo(() => {
    return socialMedia.map((item) => <a href={item.link}>{item.socialLogo}</a>);
  });
  return (
    <>
      <img className="aboutBg" src={image} />
      <div className="container">
        <div className="content-area">
          <h1 className="title" style={{ textAlign: "start" }}>
            Storage & Distribution
          </h1>
          <img width="100%" src={line} />
          <p>
            BVS provides a network of storage and distribution facilities in
            international venues and helps customers enjoy lower overhead
            prices. This has been made possible by our efficient management that
            has managed to come up with better schemes in the interest of the
            customer. We provide customers with one-of-a-kind services through
            upgraded technology and adherence to apex quality standards. We
            ensure that the consignments that are delivered or received are in
            the right state and in the best of quality. To get this, we ensure
            that the environment in which these goods are being delivered is the
            best for the respective goods.
          </p>

          <p>
            Storage and distribution however is not just to ensure easy access
            to the consignment by the client, but also to take care that the
            right amount of goods is sent to the right place at the right time.
            Having said that, we also ensure that the goods are in the right
            condition, and that no delays are made during the transfer. Of
            course, maintaining ample space in the storage areas and during
            distribution through trucking etc. is also one of the key
            responsibilities we carry out during delivery of consignments. We
            update the number of storage areas according to the number of
            consignments by maintaining a constant buffer for a rainy day.
          </p>

          <p>
            Our storage facilities guide us into making a proper distribution
            system. This system not only turns out to be efficient but also
            ensures customer satisfaction. We are able to anticipate the time in
            which a consignment would be delivered to us or transported from us
            and we create the storage spaces accordingly based on the kinds of
            goods and the time span for which those goods would remain with us.
            Keeping these points in mind, we are successful in creating suitable
            storage spaces and distribution techniques.
          </p>
        </div>
        <div className="sidemenu">
          <div class="titlebox">Logistic Services</div>
          <div className="leftmenu">{leftMenu}</div>
          <div className="socilamedia">{socialMediaLinks}</div>
        </div>
      </div>
    </>
  );
}

export default StorageDistribution;
