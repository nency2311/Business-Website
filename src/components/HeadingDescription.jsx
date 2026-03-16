
import { Link } from 'react-router-dom'

export default function HeadingDescription(props) {
  return (
    <>
      <section id="other-page-hero-section">
      <div className="container">
        <div className="heading-description">
          <h2>{props.one}</h2>
          <div className="banner-breadcrum">
            <Link to="/">home</Link>
            <span> ❯ </span>
            <Link to="javascript:void(0);">{props.onemain}</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
