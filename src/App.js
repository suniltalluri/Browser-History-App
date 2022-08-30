import {useState} from 'react'
import HistoryItem from './component'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
export const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const App = () => {
  // const InitialText = ''.toLowerCase()
  //   const [searchInput, SetSearchInput] = useState({
  //     inputText: '',
  //     isOn: false,
  //   })
  //   UserDetailsList: initialHistoryList,

  const [searchInput, SetSearchInput] = useState('')

  const [UserDetails, SetUserDetails] = useState(initialHistoryList)

  const onChangeSelectInput = event => {
    SetSearchInput(event.target.value)
    console.log(searchInput)
    const searchResult = initialHistoryList.filter(eachUser =>
      eachUser.title.includes(searchInput),
    )
    SetUserDetails(searchResult)
  }

  //   const {num} = UserDetails[0].id
  const DeleteBtn = id => {
    console.log(UserDetails[0].id)

    console.log('Item btn is clicked')
    const filterUserData = UserDetails.filter(
      eachUser => eachUser.id !== UserDetails[0].id,
    )
    SetUserDetails(filterUserData)
    // UserDetails.length === 0 && <p>"Empty History View"</p>
  }
  if (UserDetails.length === 0) {
    return <p className="noHistory">There is no history to show</p>
  }

  return (
    <div className="bg_container">
      <div className="Nav_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
          className="app_logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/search-img.png"
          alt="search"
          className="search"
        />
        <input
          type="search"
          className="Input_tag"
          placeholder="search"
          onChange={onChangeSelectInput}
          //   value="search"
        />
      </div>
      <ul className="List">
        {UserDetails.map(eachUser => (
          <HistoryItem
            eachUser={eachUser}
            key={eachUser.id}
            DeleteBtn={DeleteBtn}
          />
        ))}
      </ul>
    </div>
  )
}
export default App
