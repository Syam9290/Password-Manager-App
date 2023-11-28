import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import PasswordItems from '../Password_Items/index'

class MoneyManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    pswList: [],
    showPsw: false,
    searchInput: '',
  }

  onchangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onchangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickAddPsw = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const newPswObj = {
      id: uuidv4(),
      website,
      username,
      password,
      isDel: false,
    }
    this.setState(prevState => ({
      pswList: [...prevState.pswList, newPswObj],
      website: '',
      username: '',
      password: '',
    }))
  }

  onchangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  noPswImg = () => (
    <div className="NoPswSection">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        className="noPsw"
        alt="no passwords"
      />
      <p>No Passwords</p>
    </div>
  )

  delItem = id => {
    const {pswList} = this.state

    this.setState({pswList: pswList.filter(eachItem => eachItem.id !== id)})
  }

  getPswItems = filterPsw => {
    const {showPsw} = this.state

    return (
      <ul className="PswlistItemsSection">
        {filterPsw.map(eachItem => (
          <PasswordItems
            items={eachItem}
            key={eachItem.id}
            showPsw={showPsw}
            delItem={this.delItem}
          />
        ))}
      </ul>
    )
  }

  onclickShowPsws = () => {
    this.setState(prevState => ({showPsw: !prevState.showPsw}))
  }

  render() {
    const {pswList, searchInput, username, website, password} = this.state

    const noPsw = this.noPswImg

    const filterPsw = pswList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bgContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="applogo"
        />
        <div className="topSection">
          <form className="addNewPswSection" onSubmit={this.onClickAddPsw}>
            <h4 className="title">Add New Password</h4>
            <div className="websiteContainer">
              <div className="websiteBg">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Website"
                className="searchInput"
                onChange={this.onchangeWebsite}
                value={website}
              />
            </div>
            <div className="websiteContainer">
              <div className="websiteBg">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  alt="username"
                  className="website"
                />
              </div>
              <input
                type="text"
                placeholder="Enter Username"
                className="searchInput"
                onChange={this.onchangeUsername}
                value={username}
              />
            </div>
            <div className="websiteContainer">
              <div className="websiteBg">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  alt="password"
                  className="website"
                />
              </div>
              <input
                type="password"
                placeholder="Enter Password"
                className="searchInput"
                onChange={this.onchangePassword}
                value={password}
              />
            </div>
            <button className="addBtn" type="submit">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="passwordManager"
            alt="password manager"
          />
        </div>
        <div className="BottomSection">
          <div className="yourPswTopBg">
            <div className="pswCountSection">
              <h4>Your Passwords</h4>
              <div className="pswCountSectionBg">
                <p>{pswList.length}</p>
              </div>
            </div>
            <div className="websiteContainer">
              <div className="SearchBg">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  alt="search"
                  className="website"
                />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="searchInput"
                onChange={this.onchangeSearchInput}
              />
            </div>
          </div>
          <hr className="hrline" />
          <div className="showPswBg">
            <input type="checkbox" onClick={this.onclickShowPsws} />
            <p>Show Passwords</p>
          </div>

          {filterPsw.length === 0 ? noPsw() : this.getPswItems(filterPsw)}
        </div>
              
      </div>
    )
  }
}

export default MoneyManager
