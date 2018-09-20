import React from 'react'
import SectionTitle from './SectionTitle'
import FeaturedItem from './FeaturedItem'
import Benefits from './icons/Benefits'
import DataCoding from './icons/DataCoding'
import Time from './icons/Time';
import CompleteProjects from './icons/CompleteProjects'
import phone from '../images/phone.png'

const Featuring = () => 
	<section className='featuring'>
		<div className='container'>
			<SectionTitle title='Featuring' color='white' />
			<div className='featuring-grid'>
				<div className='g-item-1 g-item-space-between'>
					<FeaturedItem 
					  svg={ <DataCoding width='100px' height='100px' /> }
						content='Learn Advanced Excel, Python, JavaScript (D3.js, Leaflet.js), HTML5/CSS, API Interactions, Social Media Mining, SQL, Tableau, Advanced Statistics, Machine Learning, R, Git/GitHub, and more.*'
					/>
					<FeaturedItem 
						svg={ <Benefits width='100px' height='100px' /> }
						content='Benefit from a wide range of career services to position you to success as you work to advance in your current career or seek a new opportunity.'
					/>
				</div>
				<img className='featured-phone g-item-2' src={ phone } alt='cell phone' />
				<div className='g-item-3 g-item-space-between'>
				  <FeaturedItem 
						svg={ <Time width='100px' height='100px' /> }
						content='Learn Advanced Excel, Python, JavaScript (D3.js, Leaflet.js), HTML5/CSS, API Interactions, Social Media Mining, SQL, Tableau, Advanced Statistics, Machine Learning, R, Git/GitHub, and more.*'
					/>
					<FeaturedItem 
						svg={ <CompleteProjects width='100px' height='100px' /> }
						content='Benefit from a wide range of career services to position you to success as you work to advance in your current career or seek a new opportunity.'
					/>
				</div>
			</div>
		</div>
    <p className='disclaimer-text'>*The material covered in this course is subject to change due to market demand</p>
	</section>

export default Featuring
