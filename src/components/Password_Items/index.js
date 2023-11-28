import './index.css'

const PasswordItems = props => {
  const {items, showPsw, delItem} = props

  const {username, website, password, id} = items

  console.log(items)

  const IsShowPsw = showPsw ? (
    <p>{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      className="psw"
      alt="stars"
    />
  )

  const onclickDelItem = () => {
    delItem(id)
  }

  return (
    <li className="listContainer">
      <div className="iconName">
        <p>{username[0]}</p>
      </div>
      <div className="detailsContainer">
        <p>{website}</p>
        <p>{username}</p>
        <div>{IsShowPsw}</div>
      </div>
      <button type="button" className="delBtn" onClick={onclickDelItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delImg"
        />
      </button>
    </li>
  )
}

export default PasswordItems
