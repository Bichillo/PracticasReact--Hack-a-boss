import './Spoiler.css'

function Spoiler({ children, show }) {
  return (
    <div className={'spoiler ' + (show ? 'show' : 'hide')}>
      {children}
    </div>
  )
}

export default Spoiler
