import React from 'react'
import { Link } from 'react-router-dom'
import HeadingDescription from './HeadingDescription'

export default function BusinessListing(props) {
    const aboutData = [
    {
    id: 1,
    title: "business name",
    subtitle: "Offering both design and construct services under one contract, stream the process and potentially.",
    link:'/'
    },

    {
    id: 2,
    title: "business name",
    subtitle: "Offering both design and construct services under one contract, stream the process and potentially.",
    link:'/'
    },

    {
    id: 3,
    title: "business name",
    subtitle: "Offering both design and construct services under one contract, stream the process and potentially.",
    link:'/'
    },

    {
    id: 4,
    title: "business name",
    subtitle: "Offering both design and construct services under one contract, stream the process and potentially.",
    link:'/'
    },

    {
    id: 5,
    title: "business name",
    subtitle: "Offering both design and construct services under one contract, stream the process and potentially.",
    link:'/'
    },

    {
    id: 6,
    title: "business name",
    subtitle: "Offering both design and construct services under one contract, stream the process and potentially.",
    link:'/'
    },

    {
    id: 7,
    title: "business name",
    subtitle: "Offering both design and construct services under one contract, stream the process and potentially.",
    link:'/'
    },

    {
    id: 8,
    title: "business name",
    subtitle: "Offering both design and construct services under one contract, stream the process and potentially.",
    link:'/'
    },
    ]
  return (
    <>
     {/* -------------------first page------------- */}
    <HeadingDescription one={props.one} onemain={props.onemain} />
    
    
    {/* -------------------second page------------- */}
    <section id="business-listing-section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="business-filter-main-wrapper">
              <div className="filter-wrapper">
                <form action="" method="post">
                  <div className="search-bar-wrapper">
                    <input
                      type="search"
                      name=""
                      placeholder="Search Business..."
                      id=""
                    />
                    <div className="search-icon-btn">
                      <button type="submit">
                        <span className="material-symbols-outlined"> search </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="quick-filter-wrapper">
                <div className="title-wrapper">
                  <h5>quick filter</h5>
                </div>
                <div className="filter-wrapper">
                  <form action="" method="post">
                    <div className="search-bar-wrapper">
                      <input
                        type="search"
                        name=""
                        placeholder="Search By Industry..."
                        id=""
                      />
                      <div className="search-icon-btn">
                        <button type="submit">
                          <span className="material-symbols-outlined">
                            search
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="filter-wrapper">
                  <form action="" method="post">
                    <div className="search-bar-wrapper">
                      <input
                        type="search"
                        name=""
                        placeholder="Search By Core Business..."
                        id=""
                      />
                      <div className="search-icon-btn">
                        <button type="submit">
                          <span className="material-symbols-outlined">
                            search
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="filter-wrapper">
                  <form action="" method="post">
                    <div className="search-bar-wrapper">
                      <input
                        type="search"
                        name=""
                        placeholder="Search By Country..."
                        id=""
                      />
                      <div className="search-icon-btn">
                        <button type="submit">
                          <span className="material-symbols-outlined">
                            search
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="filter-wrapper">
                  <form action="" method="post">
                    <div className="search-bar-wrapper">
                      <input
                        type="search"
                        name=""
                        placeholder="Search By City..."
                        id=""
                      />
                      <div className="search-icon-btn">
                        <button type="submit">
                          <span className="material-symbols-outlined">
                            search
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="business-lists-wrapper">
                <div className='row gy-4 justify-content-center'>
                                 {aboutData.map((card) => (
                            <div key={card.id} className="col-sm-6">
                              <div className="business-info-wrapper">
                                <h4>{card.title}</h4>
                                <p>{card.subtitle}</p>
                                <Link to="/business_listing_detail">Read More</Link>
                               
                              </div>
                            </div>
                          ))}
                </div>
              {/* <div className="row gy-4 justify-content-center">
                <div className="col-sm-6">
                  <div className="business-info-wrapper">
                    <h4>business name</h4>
                    <p>
                      Offering both design and construct services under one
                      contract, stream the process and potentially.
                    </p>
                    <a to="business_listing_detail.html"> read more </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="business-info-wrapper">
                    <h4>business name</h4>
                    <p>
                      Offering both design and construct services under one
                      contract, stream the process and potentially.
                    </p>
                    <a to="business_listing_detail.html"> read more </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="business-info-wrapper">
                    <h4>business name</h4>
                    <p>
                      Offering both design and construct services under one
                      contract, stream the process and potentially.
                    </p>
                    <a to="business_listing_detail.html"> read more </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="business-info-wrapper">
                    <h4>business name</h4>
                    <p>
                      Offering both design and construct services under one
                      contract, stream the process and potentially.
                    </p>
                    <a to="business_listing_detail.html"> read more </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="business-info-wrapper">
                    <h4>business name</h4>
                    <p>
                      Offering both design and construct services under one
                      contract, stream the process and potentially.
                    </p>
                    <a to="business_listing_detail.html"> read more </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="business-info-wrapper">
                    <h4>business name</h4>
                    <p>
                      Offering both design and construct services under one
                      contract, stream the process and potentially.
                    </p>
                    <a to="business_listing_detail.html"> read more </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="business-info-wrapper">
                    <h4>business name</h4>
                    <p>
                      Offering both design and construct services under one
                      contract, stream the process and potentially.
                    </p>
                    <a to="business_listing_detail.html"> read more </a>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="business-info-wrapper">
                    <h4>business name</h4>
                    <p>
                      Offering both design and construct services under one
                      contract, stream the process and potentially.
                    </p>
                    <a to="business_listing_detail.html"> read more </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
