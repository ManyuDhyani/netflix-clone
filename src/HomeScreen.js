import React from 'react'
import "./css/HomeScreen.css"
import Navbar from './Navbar'
import Banner from './Banner'
import requests from './Requests'
import Row from './Row'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        {/* Navbar */}
        <Navbar />
        {/* Banner */}
        <Banner />
        {/* Row */}
        <Row title="NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending Now" fetchUrl = {requests.fetchTreanding} isLargeRow />
        <Row title="Top Rated" fetchUrl = {requests.fetchTopRated} isLargeRow />
        <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies} isLargeRow />
        <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies} isLargeRow />
        <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies} isLargeRow />
        <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies} isLargeRow />
        <Row title="Documentries" fetchUrl = {requests.fetchDocumentariesMovies} isLargeRow />
    </div>
  )
}

export default HomeScreen