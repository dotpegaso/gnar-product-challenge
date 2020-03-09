import React from 'react'
import style from './styles.module.css'

function Feed() {
  const subjects = [
    'How to find the purrrfect pet',
    'What to do with your new cat',
    'How to potty-train your cat',
    'Raw food diets for cats',
    'Homemade treat recipes',
    'Our favorite litter brands',
    'Are cat breeds a thing?',
    'Our favorite caturday activities',
    'How to travel with your cat',
    'How to manage multiple cats',
    'The best cat memes, ranked'
  ]

  return (
    <aside className={style.aside}>
      <h2 className={style.title}>CAT FEED</h2>
      <ul className={style.content}>
        { subjects.map( subject => (
          <li className={style.item} key={subject}>
            <a 
              className={style.link} 
              href={`https://www.youtube.com/results?search_query=${subject}`} 
              target="_blank"
              rel="noopener noreferrer"
            >
              {subject}
            </a>
          </li>          
        ))}
      </ul>
    </aside>
  )
}

export default Feed
