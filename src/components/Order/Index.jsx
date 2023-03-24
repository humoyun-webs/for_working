import React from 'react'
import "./style.scss"

function Index() {
  return (
    <>
      <section className="order">
        <div className="container">
          <h2 className="order-heading">ОСТАВЬТЕ ЗАЯВКУ</h2>
          <form method="post" className="order-inputs_wrapper">
            <input
              className="order-inputs"
              type="text"
              placeholder="Ваше имя: " required
            />
            <input
              className="order-inputs phoneNum" 
              type="number"
              placeholder="+998 --- --- -- --" required
            />
            <input className="order-inputs" type="text" placeholder="Email: " required />
            <button className="order-btn" type="Submit">Оставить заявку</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Index