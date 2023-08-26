const Header = (props) => {
  return (
    <div className="bg-black">
      <h1 className="title">{props.title}</h1>
    </div>
  )
}

Header.defaultProps = {
  title: '',
}

export default Header
