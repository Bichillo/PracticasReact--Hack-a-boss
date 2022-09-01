function Header({ user, setUser }) {
  return (
    <header>
      <div>MyApp</div>
      {user
        ? <div>
            👤 {user}
            <span onClick={() => setUser()}>❌</span>
          </div>
        : <div>Anónimo</div>
      }
    </header>
  )
}

export default Header
