import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import WargameImg from '../images/wargame.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Tic Tac Toe',
    desc:
      'The Tic Tac Toe Website is an interactive online platform that allows users to play the classic game of Tic Tac Toe against an another player.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Epicure',
    desc:
      'An application to preorder the food online from canteen. It will save the time of students.',
    img: UTrackerImg,
  },
  
  {
    id: uuidv4(),
    name: 'War Game',
    desc:
      'It is an UI/UX designing project in which the player can have multiple choices of ways to play the game',
    img: WargameImg,
  },
  {
    id: uuidv4(),
    name: "Institute Guest House Booking",
    desc:
      'A website to book the guesthouse in IIT Jodhpur online.',
    img: CavinImg,
  },
  // {
  //   id: uuidv4(),
  //   name: 'Tracking Soft',
  //   desc:
  //     'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
  //   img: ProjectImg,
  // },
];

export default projects;
