import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import A1ifIever from "./img/A1ifIever.jpg";
import A2EricsKitchen from "./img/A2EricsKitchen.jpg";
import A2Skater from "./img/A2Skater.jpg";
import A2Sleeping from "./img/A2Sleeping.jpg";
import sunset from "./img/sunset.JPG";
import intro from "./img/intro.JPG";
import casaWall from "./img/casaWall.jpg"
import me1 from "./img/me1.jpg";
import me2 from "./img/me2.jpg";
import jamSession from "./img/jamSession.jpg";
import magus from "./img/magus.jpg";
import pink from "./img/pink.jpg";
import empanadas from "./img/empanadas.jpg";
import seeds from "./img/seeds.JPG";
import beaFlowers from "./img/beaFlowers.jpg";
import bea from "./img/bea.jpg";
import farukin from "./img/farukin.jpg";
import caterinaLotus from "./img/caterinaLotus.jpg";
import corvo from "./img/corvo.jpg";
import guitarTree from "./img/guitarTree.jpg";
import fullGlass from "./img/fullGlass.jpg";
import samurai from "./img/samurai.jpg";
import island from "./img/island.jpeg";
import notruf from "./img/notruf.jpeg";
import dystopia1 from "./img/dystopia1.jpg";
import dystopia2 from "./img/dystopia2.jpg";
import dystopia3 from "./img/dystopia3.jpg";
import quitoWall from "./img/quitoWall.jpeg";
import ronda1 from "./img/ronda1.jpeg";
import ronda2 from "./img/ronda2.jpeg";
import ronda3 from "./img/ronda3.jpeg";
import ronda4 from "./img/ronda4.jpeg";
import ronda5 from "./img/ronda5.jpeg";
import ronda6 from "./img/ronda6.jpeg";
import ronda7 from "./img/ronda7.jpeg";
import ronda8 from "./img/ronda8.jpeg";
import sandman1 from "./img/sandman1.jpg";
import sandman2 from "./img/sandman2.jpg";
import sandman3 from "./img/sandman3.jpg";
import sandman4 from "./img/sandman4.jpg";
import leMat from "./img/leMat.jpg";
import leChariot from "./img/leChariot.jpg";
import lHermite from "./img/lHermite.jpg";
import lAmoureux from "./img/lAmoureux.jpg";
import momo from "./img/momo.jpeg";
import forecast from "./img/forecast.jpeg";
import bertu from "./img/bertu.jpeg";
import ragnetto from "./img/ragnetto.jpeg";
import milano from "./img/milano.jpeg";
import moda1 from "./img/moda1.jpeg";
import grey from "./img/grey.jpeg";
import stop from "./img/stop.jpg";
import susi from "./img/susi.jpeg";
import moda2 from "./img/moda2.jpeg";
import giulia from "./img/giulia.jpeg";
import whale from "./img/whale.jpg";
import cv from "./img/cv.jpeg";
import rubens from "./img/rubens.jpg";
import fromBeyond from "./img/fromBeyond.jpeg";
import quotes from "./img/quotes.jpg";
import love from "./img/love.JPG";
import casaMic from "./img/casaMic.jpg";
import DrumMachine from "./DrumMachine.js";
import Timer from "./Timer.js";
import Calculator from "./Calculator.js";
import Notes from "./Notes.js";
import mappaDetail from "./img/mappaDetail.jpg";
import img1 from "./img/aesthetic/img1.JPG";
import img2 from "./img/aesthetic/img2.JPG";
import img3 from "./img/aesthetic/img3.JPG";
import img4 from "./img/aesthetic/img4.JPG";
import img5 from "./img/aesthetic/img5.JPG";
import img6 from "./img/aesthetic/img6.JPG";
import img7 from "./img/aesthetic/img7.JPG";
import img8 from "./img/aesthetic/img8.JPG";
import img9 from "./img/aesthetic/img9.JPG";
import img10 from "./img/aesthetic/img10.JPG";
import img11 from "./img/aesthetic/img11.jpg";
import img12 from "./img/aesthetic/img12.jpg";
import img13 from "./img/aesthetic/img13.jpg";
import img14 from "./img/aesthetic/img14.jpg";
import img15 from "./img/aesthetic/img15.jpg";
import img16 from "./img/aesthetic/img16.jpg";
import img17 from "./img/aesthetic/img17.jpg";
import img18 from "./img/aesthetic/img18.jpg";
import img19 from "./img/aesthetic/img19.jpg";
import img20 from "./img/aesthetic/img20.jpg";
import img21 from "./img/aesthetic/img21.jpg";
import img22 from "./img/aesthetic/img22.jpg";
import capFont from"./img/capFont.png";


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
 
const GalleryComponent1 = () => { 
const [index, setIndex] = React.useState(-1);
const lightboxSlides = [
  {
    src: jamSession,
    width: 957, // real image size in px
    height: 469,
    title: "Il faisait froid dehors",
    description: "Acryl on Canvas",
  },
  {
    src: magus,
    width: 640,
    height: 960,
    title: "Magus",
    description: "Acryl on Canvas",
  },
  {
    src: A2Skater,
    width: 7016,
    height: 4961,
    title: "1+1=11",
    description: "Multimedia on Wood",
  },
  {
    src: sandman1,
    width: 3120,
    height: 4160,
    title: "Sandman skating in the sky with the chosen one",
    description: "Acryl on Skateboard",
  },
  {
    src: sandman2,
    width: 3120,
    height: 4160,
    title: "Sandman skating in the sky with the chosen one",
    description: "Acryl on Skateboard",
  },
  {
    src: sandman3,
    width: 3072,
    height: 4080,
    title: "Sandman skating in the sky with the chosen one",
    description: "Acryl on Skateboard",
  },
  {
    src: sandman4,
    width: 3120,
    height: 4160,
    title: "Sandman skating in the sky with the chosen one",
    description: "Acryl on Skateboard",
  },
  {
    src: forecast,
    width: 1536,
    height: 2048,
    title: "Forecast Floods",
    description: "Markers on Vinyl, Album cover for Forecast Floods noise band",
  },
   {
    src: fromBeyond,
    width: 1536,
    height: 2048,
    title: "I love the street",
    description: "Markers on Vinyl",
  },
  {
    src: leMat,
    width: 2476,
    height: 4005,
    title: "Le Mat",
    description: "Multimedia",
  },
  {
    src: leChariot,
    width: 3120,
    height: 4160,
    title: "Le Chariot",
    description: "Multimedia",
  },
   {
    src: lHermite,
    width: 3072,
    height: 4080,
    title: "Le Chariot",
    description: "Multimedia",
  },
  {
    src: lAmoureux,
    width: 2885,
    height: 4160,
    title: "L'Amoureux",
    description: "Multimedia",
  }
];
  const previewPhotos = lightboxSlides.map(({ src, title, width, height }) => ({
  src,
  width: width / 10,   // scale down to make row height ~150
  height: height / 10,
  title,
}));
   return (
    <div>
        <PhotoAlbum
        photos={previewPhotos}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />
       <Lightbox
        slides={lightboxSlides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions, Fullscreen, Slideshow, Zoom]}
      />
       </div>
  );

};
const GalleryComponent2 = () => {
const [index, setIndex] = React.useState(-1);
const lightboxSlides = [
   {src:A2EricsKitchen, title:"Eric's Kitchen", description:"Ink and Oil Pastels on Paper", width:7016, height:4961},
    {src:A2Sleeping, title:"Ian & friends", description: "Ink on paper",width:7016, height:4961},
    {src:A1ifIever, title:"if I ever feel better", description:"Ink on Paper" , width:7016, height: 9921},
    {src: pink, title:"Can I scream?", description:"Multimedia", width:2014, height:1480},
     {src: seeds, title:"Seeds", description:"Markers on paper", width:3639, height:5152},
     {src: love, title:"Love", description:"Multimedia", width:3864, height:5152},
     {src: island, title:"Una mappa del tesoro", description:"Multimedia", width:960, height:749},
       {src: mappaDetail, title:"Una mappa del tesoro", description:"Multimedia", width:1024, height:768},
     {src: notruf, title:"Notruf", description:"Multimedia", width:600, height:450},
     {src: stop, title:"Stop waiting", description:"Multimedia", width:960, height:720}
  ];
    const previewPhotos = lightboxSlides.map(({ src, title, width, height }) => ({
  src,
  width: width / 10,  
  height: height / 10,
  title,
}));
  return (
    <div>
        <PhotoAlbum
        photos={previewPhotos}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />
       <Lightbox
        slides={lightboxSlides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions, Fullscreen, Slideshow, Zoom]}
      /> 
       </div>
  );
};
const GalleryComponent3 = () => {
  const [index, setIndex] = React.useState(-1);
const lightboxSlides = [
   {src:beaFlowers, title:"Singing Flowers", description:"Tattoo",width:426, height:960},
   {src:bea, title:"Singing Flowers", description:"Tattoo",width:720, height:960},
    {src:farukin, title:"Praise to a best-friend", description: "Tattoo, friend wanted to remind his dog who just passed away",width:720, height:960},
    {src:caterinaLotus, title:"Love the streets", description:"Tattoo",width:960, height:720},
    {src:fullGlass, title:"The glass is half full", description:"Tattoo, the client asked me to draw something that represents seeing the glass always half full",width:480, height:640},
    {src: corvo, title:"il corvo", description:"Tattoo",width:960, height:720},
    {src: guitarTree, title:"Punk-Rocker's first tattoo", description:"Tattoo", width:1337, height:2048},
    {src: samurai, title:"Samurai", description:"Tattoo", width:1536, height:2048}
  ];
const previewPhotos = lightboxSlides.map(({ src, title, width, height }) => ({
  src,
  width: width / 10,   // scale down to make row height ~150
  height: height / 10,
  title,
}));
  return (
    <div>
        <PhotoAlbum
        photos={previewPhotos}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />
       <Lightbox
        slides={lightboxSlides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions, Fullscreen, Slideshow, Zoom]}
      />
       </div>
  );
};
const GalleryComponent4 = () => {
  const [index, setIndex] = React.useState(-1);
const lightboxSlides = [
   {src:dystopia1, title:"dystopia", description:"This mural was painted at Tacheles Art House in 2012. Typically, wall paintings at Tacheles didn’t last long before someone painted over them, but this one was next to the atelier of my friend Reza Mashoodi, who protected it. Since Tacheles closed in 2014, its walls have become untouchable — they are now considered part of art history",width:960, height:720},
   {src:dystopia2, title:"dystopia", description:"Wall-painting collaboration: Sara Rizzardini, Andrea Asili, Ve Mac",width:720, height:960},
    {src:dystopia3, title:"dystopia", description: "",width:960, height:720},
    {src:quitoWall, title:"The Painting Big-Brotherhood", description:"This Wall was a commision of Casa de las artes la Ronda in Quito Ecuador in collaboration with the local street-artists: Suerte, Vomitorium, Que",width:720, height:540},
    {src:ronda1, title:"Cajon cocolon", description:"Installation for an exhibition at Casa de las Arte La Ronda (2010)",width:540, height:720},
    {src: ronda2, title:"Cajon cocolon", description:"Installation",width:960, height:720},
    {src: ronda3, title:"Cajon cocolon", description:"Installation", width:720, height:540},
    {src: ronda4, title:"Cajon cocolon", description:"Installation", width:720, height:540},
    {src: ronda5, title:"Cajon cocolon", description:"Installation", width:540, height:720},
    {src: ronda6, title:"Cajon cocolon", description:"Installation", width:720, height:540},
    {src: ronda7, title:"Cajon cocolon", description:"Installation", width:720, height:540},
    {src: ronda8, title:"Cajon cocolon", description:"Installation", width:540, height:720},
    {src: momo, title:"Momo in Quito", description:"Wall", width:720, height:540},
    {src: casaWall, title:"My house", description:"Wall-painting", width:720, height:540},
    {src: casaMic, title:"A regular afternoon by me", description:"Happy friends",width:960, height:720},
     {src: whale, title:"Just a Whale", description:"I used to paint a lot of whales", width:1024, height:768}
  ];
const previewPhotos = lightboxSlides.map(({ src, title, width, height }) => ({
  src,
  width: width / 10,   // scale down to make row height ~150
  height: height / 10,
  title,
}));
  return (
    <div>
        <PhotoAlbum
        photos={previewPhotos}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />
       <Lightbox
        slides={lightboxSlides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions, Fullscreen, Slideshow, Zoom]}
      />
       </div>
  );
};
const GalleryComponent5 = () => {
const [index, setIndex] = React.useState(-1);
const lightboxSlides = [
     {src:rubens, title:"", description:"Made with silk-screen", width:960, height:720},
     {src:milano, title:"", description: "Made with silk-screen",width:720, height:960},
     {src:grey, title:"", description:"Made with silk-screen" , width:640, height: 480},
     {src: bertu, title:"", description:"Made with silk-screen", width:640, height:960},
     {src: susi, title:"", description:"Hand-painted", width:612, height:816},
     {src:moda1, title:"", description: "Hand-painted",width:720, height:960},
     {src:moda2, title:"", description: "Made with silk-screen",width:640, height:960},
     {src:ragnetto, title:"", description: "Made with silk-screen",width:640, height:960},
     {src:giulia, title:"", description: "Hand-painted",width:640, height:960},
  ];
    const previewPhotos = lightboxSlides.map(({ src, title, width, height }) => ({
  src,
  width: width / 10,   // scale down to make row height ~150
  height: height / 10,
  title,
}));
  return (
    <div>
        <PhotoAlbum
        photos={previewPhotos}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />
       <Lightbox
        slides={lightboxSlides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions, Fullscreen, Slideshow, Zoom]}
      /> 
       </div>
  );
};

const GalleryComponent6 = () => {
const [index, setIndex] = React.useState(-1);
const lightboxSlides = [
    {src:img1, title:"", description:"", width:3864, height:5152},
    {src:img2, title:"", description: "",width:480, height:640},
    {src:img3, title:"", description:"" , width:5152, height: 3864},
    {src: img4, title:"", description:"", width:640, height:480},
    {src: img5, title:"", description:"", width:640, height:480},
    {src: img6, title:"", description:"", width:5152, height:3864},
     {src: img7, title:"", description:"", width:640, height:480},
     {src: img8, title:"", description:"", width:640, height:427},
     {src: img9, title:"", description:"", width:640, height:480},
     {src: img10, title:"", description:"", width:640, height:480},
     {src: img11, title:"", description:"", width:3084, height:4096},
     {src: img12, title:"", description:"", width:3072, height:4080},
     {src: img13, title:"", description:"", width:3072, height:4080},
     {src: img14, title:"", description:"", width:3072, height:4080},
     {src: img15, title:"", description:"", width:3072, height:4080},
     {src: img16, title:"", description:"", width:3072, height:4080},
     {src: img17, title:"", description:"", width:453, height:604},
     {src: img18, title:"", description:"", width:3072, height:4080},
     {src: img19, title:"", description:"", width:3072, height:4080},
     {src: img20, title:"", description:"", width:3072, height:4080},
     {src: img21, title:"", description:"", width:3072, height:4080},
     {src: img22, title:"", description:"", width:3072, height:4080},
  ];
    const previewPhotos = lightboxSlides.map(({ src, title, width, height }) => ({
  src,
  width: width / 10,   // scale down to make row height ~150
  height: height / 10,
  title,
}));
  return (
    <div>
        <PhotoAlbum
        photos={previewPhotos}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />
       <Lightbox
        slides={lightboxSlides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions, Fullscreen, Slideshow, Zoom]}
      /> 
       </div>
  );
};
function App() {
   const [navHovered, setNavHovered] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid" id="intro">

        <h1 className="display-1">
          Sara Rizzardini _ Art & Tech
        </h1>
       
         <div className="container-fluid" id="nav-container">


            {/*    <div className="container-fluid" id="transImg">
        <div className="nav-image-container">
          <img src={me1} className="nav-img base" alt="Nav Background 1" />
          <img src={me2} className={`nav-img overlay ${navHovered ? "visible" : ""}`} alt="Nav Background 2" />
        </div>

        </div>*/}
        
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
          <a className="navbar-brand" href="#" title="home" alt="home">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-through-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a22 22 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354zm2.893-4.894A20.4 20.4 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708z"/>
</svg>
<i class="bi bi-arrow-through-heart"></i>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav"  onMouseEnter={() => setNavHovered(true)}
          onMouseLeave={() => setNavHovered(false)}>
              <li class="nav-item active">
                <a class="nav-link" href="#about">About me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#web">Web-Development</a>
              </li>
              <li class="nav-item dropup">
               
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Mini-Tools
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#timer">Pomodoro-Timer</a>
                  <a class="dropdown-item" href="#calculator">JS-Calculator</a>
                  <a class="dropdown-item" href="#drums">Drum-Machine</a>
                  <a class="dropdown-item" href="#planner">Business Planner</a>
                  <a class="dropdown-item" href="#notes">Note-Pad</a>
                  
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#apps">Apps</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects">Projects</a>
              </li>
              <li class="nav-item dropup">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Artworks
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#paintings">Paintings</a>
                  <a class="dropdown-item" href="#drawings">Drawings</a>
                  <a class="dropdown-item" href="#walls">Walls</a>
                  <a class="dropdown-item" href="#fashion">Fashion Design</a>
                  <a class="dropdown-item" href="#tattoos">Tattoo</a>
                   <a class="dropdown-item" href="#photos">Aesthetic Pictures</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        </div>
         </div>
      </header>
     
      <div className="about-section container-fluid" id="about">
     <h2 className="display-2">
 <img src={capFont}/>bout me
</h2>
        <div className="glass-card" id="adaQuote1">
       <figure>
  <blockquote className="blockquote">
    <p>Artists, poets, music-makers: all have the gift of seeing how general principles might be applied to all the senses.</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    <cite title="Source Title">Ada Lovelace</cite>
  </figcaption>
</figure>
  </div>
  <div className="glass-card">
    <h2>Sara Rizzardini</h2>
    <br/>
          <figure>
  <blockquote className="blockquote" id="adaQuote2">
 <p>  Imagination is the Discovering Faculty, pre-eminently. It is that which penetrates into the unseen worlds around us, the worlds of Science.</p> 
    </blockquote>
  <figcaption className="blockquote-footer">
    <cite title="Source Title">Ada Lovelace</cite>
  </figcaption>
</figure>
<br/>
    <p>
      My name is Sara, I was born in Italy in 1988 and I'm currently based in Berlin.

Since childhood, I’ve always known I was going to be an artist. At 18, I left my parents' home and moved to Paris to attend the École des Beaux-Arts. <br></br>Before the admission tests, I visited a friend in Berlin and discovered Tacheles — an iconic art house at the center of Berlin’s vibrant art scene around 2008–2009. After showing my portfolio to the artists there, I was offered a studio space which became my atelier and gallery for the next four years.

Those were some meaningful years where I felt truly validated by people who were deeply moved by my work and even felt represented by it.<br></br>

In 2011, I became a single mother. Around the same time, Tacheles was nearing its closure. To find a creative yet more financially stable path, I began tattooing. Many of my tattoo clients were already fans of my art and asked me to design custom pieces, often based on just a vague idea.

Later, I worked at a Berlin tattoo studio where I faced "amiguous" working condition.<br></br>

After some time away working as a chef and occasionally selling my artwork, I had my second child here in Germany. That’s when I got inspired to start an Umschulung (retraining program), and discovered how much I enjoy programming, actually something I had always been curious about, but never believed I could do.

In July 2024, I completed my Computer Science certification from the IHK Berlin.<br></br> Since then, I’ve been actively applying to software development positions, and to stay sharp and focused, I follow FreeCodeCamp's certification paths.

 I discovered that programming fits incredibly well with my personality. I’ve always had a strong focus, a love for solving problems, and an appreciation for structure, which aligns perfectly with coding.<br></br> Although I come from a creative background, I’ve always had a heart for logic. In fact, in intellectual circles too much time is spent complaining and is refreshing to be part of the population that is solution-oriented. 

My years at Tacheles taught me to pay attention to how people receive and react to creative work, something that translates well into UX design and the delivery of information in software applications. Understanding what makes an environment feel intuitive and meaningful helps me build better user experiences.

Today, I enjoy writing code in Java, and I focus mainly on backend development. I have a solid understanding of REST API architecture and best practices, and I’m also open to contributing to frontend development when needed.
    </p>
  </div>

  <div className="image-column">
    <img src={cv} alt="Sara 1" className="about-img" />
    <img src={me1} alt="Sara 2" className="about-img" />
    <img src={me2} alt="Sara 3" className="about-img" />
  </div>
</div>



      <div className='container-fluid' id="web">
        <h2 className="display-2">Web-Development</h2>
        <p className='p-lead'>I develop modern, component-based web applications using React, with strong proficiency in JavaScript (ES6+), Bootstrap, and responsive design principles. I follow best practices in state management, routing, and performance optimization to ensure scalable and maintainable front-end code. I also pay close attention to UI/UX details, selecting semantic color palettes and design elements that enhance user experience while remaining consistent with the brand or content strategy.</p>
     <div className="row">
      <div className='col-sm-5'>
      <div className="card">
  <img src={empanadas} className="card-img-top" id="empanadasCardImg" alt="screenshot of the website empanadas y tamales" />
  <div className="card-body">
    <h4>Empanadas y Tamales Berlin</h4>
    <p class="card-text">
      A friend and local restaurant owner asked me to help bring to life her long-unused domain — a simple WordPress page meant to showcase her restaurant’s delicious Latin American take-away food.

She dreamed of an online shop with personality — something that reflected the warmth and richness of her culture.

 I rebuilt the site as a React App, and integrated it into a custom WordPress theme, giving it a vibrant new identity while preserving its existing structure. The new design brings out the warmth of our beloved Latinoamerica through colors and layout, offering a better user experience and stronger brand recognition.

To complete the project, I proposed integrating a headless WooCommerce API, providing a secure and worry-free payment environment — fully aligned with modern e-commerce practices.
    </p>
    <div>
      <button class="btn btn-primary" onclick="location.href = 'www.empanadasytamales.de';"type="button" alt="www.empanadasytamales.de">Visit</button>
      <p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Tool-box
  </button>
</p>
<div id="toolbox">
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" id="toolcard" >
      React - WooCommerce - Bootstrap - WordPress
    </div>
  </div>
</div>
    
      </div>
    </div>
    </div>
</div>
<div className='col-sm-5'>
      <div className="card">
  <img src={quotes} className="card-img-top" id="quotessCardImg" alt="screenshot of the quotes generator" />
  <div className="card-body">
    <h4>Random Quote Generator</h4>
    <p class="card-text">
     I developed the Random Quote Generator as part of the Front End Libraries Certification from freeCodeCamp. Initially, I wanted to build such a generator before realizing it was part of the certification, so I decided to add some extra features. The app allows users to graphically edit and download quotes, and It's now ready for production. 
    </p>
    <div>
      <button class="btn btn-primary" type="button" alt="visit the quotes generator">Coming soon</button>
      <p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Tool-box
  </button>
</p>
<div id="toolbox">
  <div class="collapse collapse-horizontal" id="collapseWidthExample">
    <div class="card card-body" id="toolcard" >
      React - Quarkus - Bootstrap - Java - HTML5 Canvas
    </div>
  </div>
</div>
    
      </div>
    </div>
    </div>

  </div>
</div>
      </div>
      <div className="container-fluid" id ="divider"><button onClick={scrollToTop} className="btn-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg></button></div>
<div className="container-fluid" id="mini-tools">
  <h1 className="display-1">Mini-Tools</h1>
  </div>
  <div className="container-fluid" id="timer">
   <h2 className="display-2" >Pomodoro-Timer</h2>
  <p className="text-muted">The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
  It uses a kitchen timer to break work into intervals, typically 25 minutes in length, separated by short breaks. 
  Each interval is known as a pomodoro, from the Italian word for tomato, after the tomato-shaped kitchen timer that Cirillo used while a university student.
  For the purposes of the technique, a pomodoro is an interval of work time.
  A goal of the technique is to reduce the effect of internal and external interruptions of focus and flow.</p>
  <footer className="blockquote-footer">Wikipedia contributors. (2025, July 4). Pomodoro technique. Wikipedia. https://en.wikipedia.org/wiki/Pomodoro_Technique</footer>
  <Timer></Timer>
</div>
<div className="container-fluid" id="drums">
   <h2 className="display-2" >Drum-Machine</h2>
  <p className="text-muted">A simple Drum-Machine created with Javascript.</p>
  <DrumMachine></DrumMachine>
</div>
<div className="container-fluid" id ="divider"><button onClick={scrollToTop} className="btn-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg></button></div>
<div className="container-fluid" id="calculator">
   <h2 className="display-2" >JS-Calculator</h2>
  <p className="text-muted">Why not a Javascript Calculator, it can always come handy.</p>
  <div className="container-fluid">
  <Calculator></Calculator>
  </div>
</div>
<div className="container-fluid" id ="divider"><button onClick={scrollToTop} className="btn-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg></button></div>
<div className="container-fluid" id="notes">
   <h2 className="display-2" >Note-Pad</h2>
  <p className="text-muted">Take a note and eventually download it</p>
  <Notes></Notes>
</div>
<div className="container-fluid" id ="divider"><button onClick={scrollToTop} className="btn-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg></button></div>

      <div className="container-fluid" id="paintings">
        <h2 className="display-2" >Paintings</h2>
        <GalleryComponent1></GalleryComponent1>
      </div>
      <div className="container-fluid" id ="divider"><button onClick={scrollToTop} className="btn-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg></button></div>
      <div className="container-fluid" id="drawings">
        <h2 className="display-2" >Drawings</h2>
        <GalleryComponent2></GalleryComponent2>
      </div>
      <div className="container-fluid" id ="divider"><button onClick={scrollToTop} className="btn-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg></button></div>
      <div className="container-fluid" id="tattoos">
        <h2 className="display-2" >Tattoos</h2>
        <GalleryComponent3></GalleryComponent3>
      </div>
      <div className="container-fluid" id ="divider"><button onClick={scrollToTop} className="btn-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg></button>
</div>
<div className="container-fluid" id="walls">
        <h2 className="display-2" >Walls</h2>
        <GalleryComponent4></GalleryComponent4>
      </div>
      <div className="container-fluid" id ="divider"><button onClick={scrollToTop} className="btn-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg></button>
</div>
<div className="container-fluid" id="fashion">
        <h2 className="display-2" >Fashion Design</h2>
        <GalleryComponent5></GalleryComponent5>
      </div>
      <div className="container-fluid" id ="divider"><button onClick={scrollToTop} className="btn-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg></button>
</div>

<div className="container-fluid" id="photos">
        <h2 className="display-2" >Aesthetic Pictures</h2>
        <p className='text-muted'>Since I often use these images for design purposes—such as backgrounds for downloadable quotes in my Quote Generator App or as overlays in video editing—I decided to include a curated selection here. They reflect my visual style and support the overall mood and tone of my creative work.</p>
        <GalleryComponent6></GalleryComponent6>
      </div>
      <div className="container-fluid" id ="divider"><button onClick={scrollToTop} className="btn-transparent"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg></button>
</div>

    </div>
     
    
  );
}

export default App;
