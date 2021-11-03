import React from "react";
import "./AboutUs.css";
import aboutimg from "../../../images/about-img.jpg";
import line from "../../../images/hd-line.jpg";

function AboutUs() {
  return (
    <>
      <div className="about">
        <div className="abt-title">
          ABOUT US <span>LOGISTIC HELPS YOU REALISE YOUR BUSINESS GOALS</span>
        </div>
      </div>

      <div className="aboutus-wrapper">
        <div className="ab-col1">
          <img width='100%' className="show-image" src={aboutimg} alt="" />
        </div>
        <div className="ab-col2">
          <h3 className="subtitle">
            The company was founded in 2021 and has seen an upwards graph
          </h3>
          <p>
            BVS Global Logistics is an international freight
            forwarding firm with a strong foothold in the world-wide freight
            forwarding market. The company is known for its customer-based
            approach to the freight forwarding business and guarantees nothing
            less than the very best to its customer. At BVS, customers are not
            just firms or individuals involved in business, they are our family
            and everybody knows that family ALWAYS comes first. We believe in
            maintaining long-term relationships with our customers and always
            look out for what’s best for them. With competitive rates and
            equally competitive services, we offer customer satisfaction in the
            field of sea freight forwarding, air freight forwarding, road
            transportation, storage, distribution, and international groupage.
            So whether it’s the road, air or sea, we’re there when you want us
            to be!
          </p>
        </div>
      </div>
      <div className="bgcolr">
        <div className="wrapper">
          <h4>
            Whether it’s the road, air or sea, we’re there when you want us to
            be!
          </h4>
          <p>
            We have strong principles that act as our compass and point us north
            in the direction of customer satisfaction and constant progress!
            With a management as experienced and wise as ours, customers sit
            back and relax as we make things possible for them. BVS has the best
            of connections and employees that constantly work to get customers
            what they want, where and when they want it. For us, customer
            satisfaction is apex and every step we take towards our work, only
            brings us closer to this goal.
          </p>
          <p>
            Apart from such an atmosphere, BVS has the highest standards of work
            that see the company through many a high-priority project. It is
            here that our adherence to a stringent project completion timeline
            comes in handy. At BVS, we know how much value your time. We know
            this because we value it more! That is why we make sure you get your
            content on time. We believe that our customers come to us with high
            expectations and we make sure we deliver them on the dot and deliver
            more than they expect. After all, isn’t that what families do for
            each other.
          </p>
        </div>
      </div>
      <div className="ab-bg">
        <div className="wrapper">
          <div className="subtitle3">
            <h3>Why Us</h3>
          </div>
          <p>
            BVS Global Logistics is a global supplier of transport and logistics
            solutions. We have offices in more than 50 countries and an
            international network of partners and agents, making us a truly
            global player that offers services worldwide.
          </p>
        <div className='sub-box-container'>
          <div className="sub-box1 abt-icn1">
            <p className="txt-big">
              50<span></span>
            </p>
            <p>OFFICES WORLD WIDE</p>
          </div>

          <div className="sub-box1 abt-icn2">
            <p className="txt-big">
              2400<span></span>
            </p>
            <p>EMPLOYEES</p>
          </div>

          <div className="sub-box1 abt-icn3">
            <p className="txt-big">
              25000<span></span>
            </p>
            <p>TONS OF AIR FREIGHT EVERY YEAR</p>
          </div>
          </div>
        </div>
      </div>

      <div className="wrapper1">
        <h3>Information Management</h3>
        <div className="sub-txt1">
          Logistic Helps You Realise Your Business Goals
          <img width='100%' src={line} alt='' />
        </div>
        <div className="abt-cont">
          <p>
            Information management is literally the foundation of a freight
            forwarding system. This is the system on which the entire process of
            freight forwarding works. From loading to unloading, from pick to
            delivery of goods, information management plays a pivotal role in
            knowing what step to take and when to take it. At BVS, we maintain a
            highly successful information management system, with online
            tracking forming a major part of this process. From the first
            activity of shipping the consignment to the last of the consignment
            reaching the desired place, the Internet acts as a tool to maintain
            a schedule of the things that have taken place and when and where
            this has been done. The system even lets you know about custom
            clearance status and the change in the means of transport as well.
          </p>
          <p>
            With the help of our tracking system, the customer can get to know
            the status of their consignment with the help of numbers assigned to
            the consignment. This acts as a guide for the customer to constantly
            keep in touch with their consignment and inform beforehand if the
            consignment needs to reach the desired destination earlier than
            asked for previously. This helps BVS create a different route for
            the forwarding and allows us to ensure that the consignment reaches
            the said venue on time.
          </p>
          <p>
            Management of information is crucial at any step of the freight
            forwarding process and being able to access the status of their
            consignment gives customers a sense of relief. It also instills
            confidence in them because they can remain in control of the
            transportation of the consignment. The customers don’t have to wait
            idly for the consignment to arrive but can know when and how the
            goods will arrive. This transparency attracts customers’ trust
            towards the company that in turn strives harder every day to
            maintain and enhance that trust.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
