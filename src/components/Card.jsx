import './Card.scss'
import image from '../assets/image12.png'

const Card = () => {
  return (
   <div className="card">
      <div className="tag">SOLD OUT</div>
      <img src={image} alt="image12" />
      <div className="rating">
         <i className="fa-solid fa-star"></i>
         <p className="score">5.0</p>
         <p className="extra-details">(6) • USA</p>
      </div>
      <p className="title">Life lessons with Katie Zafares</p>
      <div className="price">
         <p>From $136</p>
         <small>/ person</small>
      </div>
   </div>
  )
}

export default Card