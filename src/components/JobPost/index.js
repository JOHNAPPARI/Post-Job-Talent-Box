import {Component} from 'react'

import './index.css'

class JobPost extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="heading-post-job">Post Job</h1>
        <form>
          <h1 className="main-heading">Basic Details</h1>
          <hr />
          <div>
            <p className="heading">Job Title*</p>
            <input
              type="text"
              placeholder="Write a title that appropriately describes this job"
              className="input"
            />
          </div>
          <div>
            <p className="heading">Location*</p>
            <input className="input" type="text" placeholder="+Add location" />
          </div>
          <div>
            <p className="heading">Years of experience*</p>
            <div>
              <select className="select-contain" placeholder="hi">
                <option className="option-main">Select Min</option>
                <option className="option">0 year</option>
                <option className="option">1 year</option>
                <option className="option">2 year</option>
              </select>
              <select className="select-contain">
                <option className="option-main">Select Max</option>
                <option className="option">3 year</option>
                <option className="option">4 year</option>
                <option className="option">5 year</option>
              </select>
            </div>
            <div>
              <p className="heading">Job Description</p>
              <textarea className="textarea" rows="7" cols="86">
                Description the role and responsibilities, skills required for
                the job and help the candidates understand the role better
              </textarea>
            </div>

            <h1 className="main-heading">Targeting</h1>
            <hr />
            <div className="section-contain">
              <div>
                <p className="heading">Category*</p>
                <select className="select-contain">
                  <option className="option-main">Select </option>
                  <option className="option">Software Developer</option>
                </select>
              </div>
              <div>
                <p className="heading">Functional Area*</p>
                <select className="select-contain">
                  <option className="option-main">Select</option>
                  <option className="option">Engineering</option>
                </select>
              </div>
            </div>

            <div>
              <p className="heading">Graduating Year</p>
              <div>
                <select className="select-contain">
                  <option className="option">Min Batch</option>
                  <option className="option">2019</option>
                  <option className="option">2020</option>
                </select>
                <select className="select-contain">
                  <option className="option">Max Batch</option>
                  <option className="option">2021</option>
                  <option className="option">2022</option>
                </select>
              </div>
            </div>
            <div>
              <p className="heading">Tags</p>
              <input className="input" type="text" placeholder="+Add Job tag" />
            </div>

            <div className="button-contain">
              <button type="button" className="post-button">
                Post Job
              </button>
              <button type="button" className="post-and-another-button">
                Post Job and Add Another Job
              </button>
              <button type="button" className="cancel-button">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default JobPost
