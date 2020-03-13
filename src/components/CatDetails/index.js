import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { useParams, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import style from './styles.module.css'
import { chartData, chartColors } from './_mock'

function CatDetails(props) {
  const { cats } = props
  const { id } = useParams() // get the :id param from route

  const currentCat = cats.filter(obj => obj.id === id)[0]
  const footerCats = cats.map( (cat, index) => (index < 7 && cat.id !== currentCat.id) && cat )  

  return (
    <section className={style.detailsContainer}>

      <div className={style.block}>
        <section className={style.preview}>
          <img src={currentCat.photo} alt="Cat preview" />
        </section>

        <section className={style.container}>
          <h1 className={style.title}>
            {currentCat.name}
          </h1>

          <h2 className={style.subtitle}>About</h2>
          <div className={style.about}>
            <span className={style.catProperties}>
              <b>Age: </b>
              {`${currentCat.age} years`}
            </span>
            <span className={style.catProperties} title={currentCat.activity}>
              <b>Favorite activity: </b> 
              {currentCat.activity}
            </span>
            <span className={style.catProperties} title={currentCat.activity}>
              <b>Pet peave: </b> 
              {currentCat.peave}
            </span>
          </div>

          <div className={style.details}>
            <div className={style.location}>
              <b>Location</b>
              <b>{currentCat.location || 'Not purrrvided'}</b>
              <span>
                {currentCat.location ? '21632 Newland St, Huntington Beach, CA 92646' : '–'}
              </span>
            </div>
            <div className={style.bio}>
              <b>Bio: </b>
              {currentCat.bio || 'Not purrrvided'}
            </div>
          </div>

          <a 
            href={currentCat.medical} 
            target="_blank" 
            className={style.medical} 
            rel="noopener noreferrer"
          >
            <b>{currentCat.medical ? 'View medical record' : 'Medical record not purrrvided'}</b>
          </a>

          <div className={style.computedDetails}>
            
            <div className={style.personality}>
              <h2 className={style.subtitle}>Personality</h2>
              <b>Curious</b>
              <div className={style.fillBar}>
                <div className={style.gauge} style={{ width: `${currentCat.curious}%`}} />
              </div>
              <b>Friendly</b>
              <div className={style.fillBar}>
                <div className={style.gauge} style={{ width: `${currentCat.friendly}%`}} />
              </div>
              <b>Energetic</b>
              <div className={style.fillBar}>
                <div className={style.gauge} style={{ width: `${currentCat.energetic}%`}} />
              </div>
            </div>
            
            <div className={style.average}>
              <h2 className={style.subtitle}>Average day</h2>
              <div className={style.box}>
                <ul>
                  <li>
                    <span className={style.legend} />
                    <b>Meowing: 25%</b>
                  </li>
                  <li>
                    <span className={style.legend} />
                    <b>Hunting: 7%</b>
                  </li>
                  <li>
                    <span className={style.legend} />
                    <b>Sleeping: 55%</b>
                  </li>
                  <li>
                    <span className={style.legend} />
                    <b>Eating: 13%</b>
                  </li>
                </ul>
              </div>
              <div className={style.box}>
                <ResponsiveContainer width={150} height="90%">
                  <PieChart>
                    <Pie dataKey="value" data={chartData} cx="50%" cy="55%" outerRadius={55}>
                      {
                        chartData.map((entry, index) => (
                          <Cell key={entry.value} fill={chartColors[index]} />
                        ))
                      }
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>         
        </section>
      </div>

      <footer className={style.footer}>
        <h1 className={style.title}>SEE MORE CATS</h1>

        <div className={style.gallery}>
          { footerCats.map(cat => cat && (
            <Link key={cat.id} to={`/details/${cat.id}`}>
              <img src={cat.photo} className={style.nextPreview} alt="Next cat preview" />
            </Link>
          )) }          
        </div>

      </footer>

    </section>
  )
}

const mapStateToProps = state => ({
  state,
  cats: state.list.cats,
})

export default connect(mapStateToProps)(CatDetails)
