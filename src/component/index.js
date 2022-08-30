import './index.css'

const HistoryItem = props => {
  const {eachUser, DeleteBtn} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachUser

  const onDeleteItem = () => {
    DeleteBtn(id)
  }

  return (
    <li className="Card">
      <div className="content_card">
        <p className="TimeText">{timeAccessed}</p>
        <img
          src={eachUser.logoUrl}
          alt="domain logo"
          className="socialMediaIcon"
        />
        <p className="tittle">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button className="btn_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="deleteIcon"
          alt="delete"
          onClick={onDeleteItem}
          testid="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
