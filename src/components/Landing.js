import React, { Component } from 'react'
import { ButtonContainer } from './Button'
import Background from '../assets/img/bg.jpg'

const sectionStyle = {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${Background})`,

      };

export default class Landing extends Component {
  render() {
    return (
      <>

        <section style={ sectionStyle }>

        </section>

      </>
    );
  }
}