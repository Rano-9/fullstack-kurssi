const Notification = ({ message, errors }) => {
  if (message === null && errors === null) {
    return null
  }

  return (
    <div className="notifications">
    {message ? 
        <div className="notification">
            {message}
        </div>
        : null
    }

    {errors ?  
        <div className="error">
            {errors}
        </div>
        : null
    }
    </div>
  )
}

export default Notification