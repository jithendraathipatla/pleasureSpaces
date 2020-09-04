import React from "react"
import axios from "axios"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const HighlightForm = () => {
  const handelformdata = e => {
    e.preventDefault()
    const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const phone = e.target.elements.phone_no.value

    const client_information = {
      client_name: name,
      client_email: email,
      client_phone: phone,
    }
    var data = {
      service_id: "gmail",
      template_id: "normal",
      user_id: "user_s9VasukllOwTDnR8R0FWD",
      template_params: client_information,
    }

    axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data)
      .then(res => {
        console.log(res)
        console.log(res.data)
        alert("You will now be redirected.")
        window.location = "/download/"
      })
  }
  return (
    <div css={main}>
      <div css={projects}>
        <div>
          <h4>PSI Oliver</h4>
          <button css={button}>
            <Link to="/psi-oliver">Visit site</Link>
          </button>
        </div>
        <div>
          <h4>PSI Glaviour Villas</h4>
          <button css={button}>Visit site</button>
        </div>
      </div>
      <div css={quoteform}>
        <div className="form-head">
          <h1>ENQUIRE NOW</h1>
        </div>
        <form onSubmit={handelformdata}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder="Your Emailid"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="phone_no"
              placeholder="Your Phone"
              minlength="10"
              maxlength="20"
              title="Must have 10 digit numbers"
              pattern="^\d{10}$"
              required
            />
          </div>

          <div className="form-button">
            <button
              type="submit"
              value="send"
              css={button}
              className="buttonsadjust"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HighlightForm

const projects = css`
  display: grid;
  grid-template-columns: 6fr 6fr;
  grid-gap: 100px;
  text-align: center;
  margin-top: 8%;
  div {
    background-color: #443d3dcf;
    height: 70px;
    padding: 10px;
    h4 {
      display: block;
      color: #fff;
      text-shadow: 1px 3px 4px rgba(0, 0, 0, 0.45);
      font-size: 20px;
      margin-bottom: 10px;
    }
    a {
      text-decoration: none;
      color: white;
      :hover {
        text-decoration: underline;
      }
    }
  }
`

const main = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const button = css`
  background-color: #00b7ff;
  color: #ffffff;
  border: none;
  font-size: 12px;
  padding: 5px 20px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.7px;
  margin-bottom: -15px;
  margin-top: 10px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
    transform: translateY(-1px);
  }
`

const quoteform = css`
  background: #443d3dcf;
  input {
    border-radius: 3px;
    border-width: 1px;
    padding: 7px 15px;
    width: 100%;
    margin-bottom: 20px;
    font-size: 16px;
  }
`
