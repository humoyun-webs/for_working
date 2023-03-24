import React from 'react'
import newsf from "../../assets/newsF.png"
import newsS from "../../assets/newsS.png"
import "./style.scss"

function Index() {
  return (
    <>
      <section className="news">
        <div className="container">
          <h2 className="news-heading">НОВОСТИ</h2>
          <div className="newsWrapper">
            <div className="images">
              <img src={newsf} width="450" height="290" className="newsf" alt="yangilik rasmi" />
              <img src={newsS} width="450" height="290" className="newsS" alt="yangilik rasmi" />
            </div>
            <p className="news-desc">
              Lorem ipsum dolor sit amet consectetur. Urna semper urna viverra
              pellentesque volutpat et vitae. Consequat felis ut in pellentesque
              feugiat malesuada varius. Aliquam egestas orci dui est eu. Commodo
              lobortis dolor volutpat enim. Tempor interdum aliquet at lorem
              nisi. Amet nec vel donec aliquet rhoncus faucibus. Bibendum
              dictumst ullamcorper nulla.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index