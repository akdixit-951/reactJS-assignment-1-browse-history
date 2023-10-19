import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="logo-title-domain-con">
        <img alt="domain logo" className="logo-img" src={logoUrl} />
        <p className="title">{title}</p>
        <p className="domain-name">{domainUrl}</p>
      </div>
      <button
        data-testId="delete"
        type="button"
        className="delete-btn"
        onClick={onDeleteHistory}
      >
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryItem
