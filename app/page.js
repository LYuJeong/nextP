import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {

let name ='lee'
  return (
    <div>
      <h2 className="title">유정후레쉬</h2>
      <p className="title-sub">by {name}</p>
        </div>
  )
}
