import '../components/Cards.scss'
import Card from '../components/Card'
import data from '../data/data.js'

const Cards = () => {
   const cardData = data.map((card) => 
      <Card
      key={card.id}
     {...card}
    />
   )

   return <div className='cards section'>
      {cardData}
   </div>
}
export default Cards
