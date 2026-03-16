import React from "react";
import img1 from "../asset/media/svg/profile-img-1.png";
import img2 from "../asset/media/images/profile-img-2.png";
import img3 from "../asset/media/images/profile-img-3.png";
import img4 from "../asset/media/images/profile-img-4.png";
import img5 from "../asset/media/images/profile-img-5.png";
import img6 from "../asset/media/images/profile-img-6.png";
import { Link } from "react-router-dom";
import HeadingDescription from "./HeadingDescription";

export default function Requirements(props) {
  return (
    <>
      {/* -------------------first page------------- */}
      <HeadingDescription one={props.one} onemain={props.onemain} />
     

      {/* -------------------second page------------- */}
      <section id="requirements-section">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <ul className="todo-task-lists p-0 mb-0">
                <li className="d-flex align-items-center">
                  <div className="user-img img-fluid">
                    <img
                      src={img1}
                      alt="story-img"
                      className="rounded-circle avatar-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="d-flex align-items-md-center justify-content-between w-100 flex-column flex-md-row">
                    <div className="ms-2 ms-md-3 user-description">
                      <h6 className="d-inline-block">Lorem Ipsum</h6>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                    </div>
                    <div className="ms-2 ms-md-0 mt-3 mt-md-0 card-header-toolbar d-flex align-items-center">
                      <div>
                        <p className="mb-0">30 minute ago</p>
                        <div className="replay-btn d-flex justify-content-between align-items-center">
                          <i className="material-symbols-outlined">
                            {" "}
                            file_download{" "}
                          </i>
                          <p className="mb-0">Reply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="user-img img-fluid">
                    <img
                      src={img2}
                      alt="story-img"
                      className="rounded-circle avatar-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="d-flex align-items-md-center justify-content-between w-100 flex-column flex-md-row">
                    <div className="ms-2 ms-md-3 user-description">
                      <h6 className="d-inline-block">
                        Petey Cruiser Sent A Friend Request
                      </h6>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                    </div>
                    <div className="card-header-toolbar ms-2 ms-md-0 mt-3 mt-md-0 d-flex align-items-center">
                      <div>
                        <p className="mb-0">30 minute ago</p>
                        <div className="replay-btn d-flex justify-content-between align-items-center">
                          <i className="material-symbols-outlined">
                            {" "}
                            file_download{" "}
                          </i>
                          <p className="mb-0">Reply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="user-img img-fluid">
                    <img
                      src={img3}
                      alt="story-img"
                      className="rounded-circle avatar-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="d-flex align-items-md-center justify-content-between w-100 flex-column flex-md-row">
                    <div className="ms-2 ms-md-3 user-description">
                      <h6 className="d-inline-block">Paige Turner</h6>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                    </div>
                    <div className="card-header-toolbar ms-2 ms-md-0 mt-3 mt-md-0 d-flex align-items-center">
                      <div>
                        <p className="mb-0">30 minute ago</p>
                        <div className="replay-btn d-flex justify-content-between align-items-center">
                          <i className="material-symbols-outlined">
                            {" "}
                            file_download{" "}
                          </i>
                          <p className="mb-0">Reply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="user-img img-fluid">
                    <img
                      src={img4}
                      alt="story-img"
                      className="rounded-circle avatar-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="d-flex align-items-md-center justify-content-between w-100 flex-column flex-md-row">
                    <div className="ms-2 ms-md-3 user-description">
                      <h6 className="d-inline-block">Barry Cuda Add Story</h6>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                    </div>
                    <div className="card-header-toolbar ms-2 ms-md-0 mt-3 mt-md-0 d-flex align-items-center">
                      <div>
                        <p className="mb-0">30 minute ago</p>
                        <div className="replay-btn d-flex justify-content-between align-items-center">
                          <i className="material-symbols-outlined">
                            {" "}
                            file_download{" "}
                          </i>
                          <p className="mb-0">Reply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="user-img img-fluid">
                    <img
                      src={img5}
                      alt="story-img"
                      className="rounded-circle avatar-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="d-flex align-items-md-center justify-content-between w-100 flex-column flex-md-row">
                    <div className="ms-2 ms-md-3 user-description">
                      <h6 className="d-inline-block">
                        Cliff Hanger Posted A Comment On Your Status Update
                      </h6>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                    </div>
                    <div className="card-header-toolbar ms-2 ms-md-0 mt-3 mt-md-0 d-flex align-items-center">
                      <div>
                        <p className="mb-0">30 minute ago</p>
                        <div className="replay-btn d-flex justify-content-between align-items-center">
                          <i className="material-symbols-outlined">
                            {" "}
                            file_download{" "}
                          </i>
                          <p className="mb-0">Reply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="user-img img-fluid">
                    <img
                      src={img6}
                      alt="story-img"
                      className="rounded-circle avatar-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="d-flex align-items-md-center justify-content-between w-100 flex-column flex-md-row">
                    <div className="ms-2 ms-md-3 user-description">
                      <h6 className="d-inline-block">
                        Rick O'Shea Posted A Comment On Your Photo
                      </h6>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                    </div>
                    <div className="card-header-toolbar ms-2 ms-md-0 mt-3 mt-md-0 d-flex align-items-center">
                      <div>
                        <p className="mb-0">30 minute ago</p>
                        <div className="replay-btn d-flex justify-content-between align-items-center">
                          <i className="material-symbols-outlined">
                            {" "}
                            file_download{" "}
                          </i>
                          <p className="mb-0">Reply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="user-img img-fluid">
                    <img
                      src={img1}
                      alt="story-img"
                      className="rounded-circle avatar-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="d-flex align-items-md-center justify-content-between w-100 flex-column flex-md-row">
                    <div className="ms-2 ms-md-3 user-description">
                      <h6 className="d-inline-block">Lorem Ipsum</h6>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                    </div>
                    <div className="ms-2 ms-md-0 mt-3 mt-md-0 card-header-toolbar d-flex align-items-center">
                      <div>
                        <p className="mb-0">30 minute ago</p>
                        <div className="replay-btn d-flex justify-content-between align-items-center">
                          <i className="material-symbols-outlined">
                            {" "}
                            file_download{" "}
                          </i>
                          <p className="mb-0">Reply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="user-img img-fluid">
                    <img
                      src={img2}
                      alt="story-img"
                      className="rounded-circle avatar-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="d-flex align-items-md-center justify-content-between w-100 flex-column flex-md-row">
                    <div className="ms-2 ms-md-3 user-description">
                      <h6 className="d-inline-block">
                        Petey Cruiser Sent A Friend Request
                      </h6>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                    </div>
                    <div className="card-header-toolbar ms-2 ms-md-0 mt-3 mt-md-0 d-flex align-items-center">
                      <div>
                        <p className="mb-0">30 minute ago</p>
                        <div className="replay-btn d-flex justify-content-between align-items-center">
                          <i className="material-symbols-outlined">
                            {" "}
                            file_download{" "}
                          </i>
                          <p className="mb-0">Reply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="user-img img-fluid">
                    <img
                      src={img3}
                      alt="story-img"
                      className="rounded-circle avatar-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="d-flex align-items-md-center justify-content-between w-100 flex-column flex-md-row">
                    <div className="ms-2 ms-md-3 user-description">
                      <h6 className="d-inline-block">Paige Turner</h6>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                    </div>
                    <div className="card-header-toolbar ms-2 ms-md-0 mt-3 mt-md-0 d-flex align-items-center">
                      <div>
                        <p className="mb-0">30 minute ago</p>
                        <div className="replay-btn d-flex justify-content-between align-items-center">
                          <i className="material-symbols-outlined">
                            {" "}
                            file_download{" "}
                          </i>
                          <p className="mb-0">Reply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="user-img img-fluid">
                    <img
                      src={img4}
                      alt="story-img"
                      className="rounded-circle avatar-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="d-flex align-items-md-center justify-content-between w-100 flex-column flex-md-row">
                    <div className="ms-2 ms-md-3 user-description">
                      <h6 className="d-inline-block">Barry Cuda Add Story</h6>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                    </div>
                    <div className="card-header-toolbar ms-2 ms-md-0 mt-3 mt-md-0 d-flex align-items-center">
                      <div>
                        <p className="mb-0">30 minute ago</p>
                        <div className="replay-btn d-flex justify-content-between align-items-center">
                          <i className="material-symbols-outlined">
                            {" "}
                            file_download{" "}
                          </i>
                          <p className="mb-0">Reply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="user-img img-fluid">
                    <img
                      src={img5}
                      alt="story-img"
                      className="rounded-circle avatar-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="d-flex align-items-md-center justify-content-between w-100 flex-column flex-md-row">
                    <div className="ms-2 ms-md-3 user-description">
                      <h6 className="d-inline-block">
                        Cliff Hanger Posted A Comment On Your Status Update
                      </h6>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                    </div>
                    <div className="card-header-toolbar ms-2 ms-md-0 mt-3 mt-md-0 d-flex align-items-center">
                      <div>
                        <p className="mb-0">30 minute ago</p>
                        <div className="replay-btn d-flex justify-content-between align-items-center">
                          <i className="material-symbols-outlined">
                            {" "}
                            file_download{" "}
                          </i>
                          <p className="mb-0">Reply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="user-img img-fluid">
                    <img
                      src={img6}
                      alt="story-img"
                      className="rounded-circle avatar-40"
                      loading="lazy"
                    />
                  </div>
                  <div className="d-flex align-items-md-center justify-content-between w-100 flex-column flex-md-row">
                    <div className="ms-2 ms-md-3 user-description">
                      <h6 className="d-inline-block">
                        Rick O'Shea Posted A Comment On Your Photo
                      </h6>
                      <p className="mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                      </p>
                    </div>
                    <div className="card-header-toolbar ms-2 ms-md-0 mt-3 mt-md-0 d-flex align-items-center">
                      <div>
                        <p className="mb-0">30 minute ago</p>
                        <div className="replay-btn d-flex justify-content-between align-items-center">
                          <i className="material-symbols-outlined">
                            {" "}
                            file_download{" "}
                          </i>
                          <p className="mb-0">Reply</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
