import React from 'react'
import './style.css'
import {
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaLocationArrow,
  FaCameraRetro,
  FaHome
} from 'react-icons/fa'
import { socialprofils } from '../../content_option'

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.home && (
          <li>
            <a href={socialprofils.home}>
              <FaHome />
            </a>
          </li>
        )}
        {socialprofils.shots && (
          <li>
            <a href={socialprofils.shots}>
              <FaCameraRetro />
            </a>
          </li>
        )}
        {socialprofils.superdaveforhire && (
          <li>
            <a href={socialprofils.superdaveforhire}>
              <FaLocationArrow />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  )
}
