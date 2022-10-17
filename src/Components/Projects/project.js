import music from '../../img/musicapp.png'
import chat from '../../img/Chat-WebApp.png'
// import { IconGitHub } from '../Icons';

const project = [
    {
        id: 1, 
        overline:'Project',
        title: 'Web Chat App',
        description: 'A web Application chatting app for friends and family integrate with node, Mongose',
        tech: [ 
            'React', 
            'Mongoose', 
            'Css', 
            'Node' 
        ],
        link: 'https://github.com/akejutaiwo/Chat-App' ,
        image: chat
    },
    {
        id: 2, 
        overline:'Project',
        title: 'Music Web App',
        description: 'A web app for music. View your top artists, top tracks, recently played tracks. Create and save new playlists of recommended tracks based on your existing playlists and more.',
        tech: [ 
        'React', 
        'Styled-Components', 
        'css' 
        ],
        link:'https://github.com/akejutaiwo/music-webapp' ,
        image: music
    }, 

]

export default project;