import React from "react";
import "./style.css";
import { 
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaBriefcase,
  FaShoppingBag,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul> 
        {socialprofils.shop1 && (
          <li>
            <a href={socialprofils.shop1}>
              <FaShoppingBag />
            </a>
          </li>
        )}
        {socialprofils.superdaveforhire && (
          <li>
            <a href={socialprofils.superdaveforhire}>
              <FaBriefcase />
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
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
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
  );
};
