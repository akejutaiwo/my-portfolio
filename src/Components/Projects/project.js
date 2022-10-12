import music from '../../img/musicapp.png'
import chat from '../../img/Chat-WebApp.png'

const project = [
    {
        id: 1, 
        overline:'Project',
        title: 'Web Chat App',
        description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
        tech: [ 
            'React', 
            'Mongoose', 
            'Css', 
            'Node' 
        ],
        link: '',
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
        link: '',
        image: music
    }, 

]

export default project;