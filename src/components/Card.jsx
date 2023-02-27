import './Card.scss'

const Card = (props) => {
   const PATH = 'src/assets/'

   return (
      <div className='card'>
         {props.openSpots != 'null' && (
            <div className='tag'>{props.availability}</div>
         )}
         <img src={PATH + props.coverImg} alt={props.coverImg} />
         <div className='rating'>
            <i className='fa-solid fa-star'></i>
            <p className='score'>{props.rating}</p>
            <p className='extra-details'>
               ({props.reviewCount}) • {props.location}
            </p>
         </div>
         <p className='title'>{props.title}</p>
         <div className='price'>
            <p>${props.price}</p>
            <small>/ person</small>
         </div>
      </div>
   )
}

export default Card
