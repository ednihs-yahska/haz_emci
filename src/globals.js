import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faExclamation, faUser, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
export const convertObjectToArray = (stacks) => Object.keys(stacks).filter(k=>k!="_links").map(k=>stacks[k])

export const colors = {
    left_menu_background: "#0F273E",
    background: "#fff",
    lighter_red: "#E84849",
    menu_font_color: "#fff",
    primary_font_color: "#0F273E",
    light_gray: "#dadada",
    medium_gray: "#454545",
}

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};

export const left_menu = [
    {icon:<FontAwesomeIcon icon={faHome}/>, item:"HOME PORTAL"}, {icon:<FontAwesomeIcon icon={faExclamation}/>, item:"CREATE AN ALERT"}, {icon:<FontAwesomeIcon icon={faHome}/>, item:"CHANNEL"}, {icon:<FontAwesomeIcon icon={faHome}/>, item:"CAMPUS ENGAGE"}, {icon:<FontAwesomeIcon icon={faUser}/>, item:"ACCOUNT"}, {icon:<FontAwesomeIcon icon={faQuestionCircle}/>, item:"EMCI SUPPORT"}
]

export const notificationTime = 5000; //milliseconds

export function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }