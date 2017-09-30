import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contant from './components/Contant';

const arr = [
    {
        title: 'Article1',
        cont: 'This is Article1Article1Article1Article1Article1Article1 Article1Article1Article1Article1 Article1Article1Article1',
        img: 'http://minionomaniya.ru/wp-content/uploads/2015/11/ryWwCPWJ3jc.jpg',
        alt: 'img1'
    },
    {
        title: 'Article2',
        cont: 'This is Article2Article2Article2 Article2Article2Article2 Article2Article2Article2',
        img: 'http://on-desktop.com/wps_thumb/0-Cartoons_Minions_minion_has_an_idea_051616_.jpg',
        alt: 'img2'
    },
    {
        title: 'Article3',
        cont: 'This is Article3Article3 Article3Article3Article3 Article3Article3Article3 Article3Article3Article3',
        img: 'https://truimg.toysrus.com/product/images/minions-movie-8-inch-talking-stuart-with-guitar--B8A08B82.zoom.jpg?fit=inside|960:960',
        alt: 'img3'
    },
    {
        title: 'Article4',
        cont: 'This is Article4Article4 Article4Article4Article4 Article4Article4 Article4Article4 Article4Article4',
        img: 'http://minionomaniya.ru/wp-content/uploads/2015/10/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BC%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83.jpg',
        alt: 'img4'
    }
]
class App extends Component {

  render() {
    return (
      <div>
          <Header></Header>
          <Contant data = {arr}>

          </Contant>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
