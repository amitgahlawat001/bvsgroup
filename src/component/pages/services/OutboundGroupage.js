import React from "react";
import { useMemo } from "react";
import image from "../../../images/outbound.jpg";
import line from "../../../images/career-line.jpg";
import "./Services.css";
import { menuItems } from "./sideMenuItems";
import { socialMedia } from "../../socialMediaData";

function OutboundGroupage() {
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
            Outbound Groupage
          </h1>
          <img width="100%" src={line} />
          <p>
            BVS has maximum outgoing consignments that travel from India to
            places like China, Malaysia and even Italy in Europe. This makes it
            natural for our firm to seek ways to benefit maximum customers in
            any which way possible. Outbound groupage seems to be the best
            possible option to achieve this goal. By combining the consignments
            going to different countries, we create a consolidated consignment
            for each country and arrange for the safe and efficient delivery of
            the consignment to the concerned ports etc.
          </p>

          <p>
            However, our efforts don’t just stop at transporting the
            consignment. We make sure that after reaching the desired place, the
            concerned individuals have all the details of the consignments that
            are contained in that one consolidated delivery. This way, the
            deliveries are smooth and don’t take long and even fetch great
            prices to the customers as the combined consignment takes less time
            to get delivered. Also, it uses fewer resources to be delivered
            thereby reducing the cost significantly.
          </p>

          <p>
            We maintain a vigilant team of experts at both ends of the
            transaction thereby ensuring that the things that are taken care of
            at one end are maintained at the other end as well. The rules are
            the same, only the places differ. This uniformity in the motives
            helps us track the consignment efficiently from both ends and keep
            the customer updated about their goods. BVS knows how important
            content is to their customers and this understanding makes it easier
            to know how to take good care of the consignment.
          </p>

          <p>
            With the help of hi-tech machinery and customized container
            environs, we ensure that the consignment being sent is in the right
            state and reaches the desired venue at the right time and in sound
            condition. From there, the consolidated consignment is dissected and
            sent to the various customers eagerly waiting to lay eyes on their
            goods!
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

export default OutboundGroupage;
