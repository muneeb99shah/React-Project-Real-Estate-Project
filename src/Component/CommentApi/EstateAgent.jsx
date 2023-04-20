import React, { useEffect, useState } from 'react'
import AgentImage from '../images/01-agent.jpg'
import AgentImage2 from '../images/02-agent.jpg'

export default function EstateAgent() {
  const [comment, setComment] = useState({
    author: '',
    comment_text: '',
    story_title: '' 
})

  useEffect(() => {
    fetch('http://hn.algolia.com/api/v1/search?query=bar&tags=comment')
      .then((response) => response.json())
      .then((data) => {
        const comment = data.hits[13]
        setComment({
            author: comment.author,
            comment_text: comment.comment_text,
            story_title: comment.story_title
             })
      })
  }, [])


  return (
    <section className="agent-section">
      <div className=" agent-container">
        <div className="row">
          <h1 className="agent-top-space">Top real estate agents</h1>
          <div className="col-lg-4">
            <div className="agent-el">
              <img className="agent-img" src={AgentImage} alt="Agent" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="agent-el">
              <img className="agent-img" src={AgentImage2} alt="Agent" />
            </div>
          </div>
          <div className="col-lg-4 agent-text-container">
            <div className="agent-text">
              <blockquote className="blockquote card-body">
              
                <h3 className="txt-h3">{comment.story_title}</h3>
                <p className="text-muted">{comment.comment_text.slice(0, 120)}</p>
               
                <div className="agent-links">
                  <div className="agent-items">
                    <a className="" href="/">
                      <h6 className="mb-0">{comment.author}</h6>
                     
                      <div className="text-muted fw-normal  mb-3">Imperial Property Group Agent</div>
                    </a>
                    <div className="agent-social">
                      <i className="fa fa-facebook agent-icon"></i>
                      <i className="fa fa-twitter agent-icon"></i>
                      <i className="fa fa-instagram agent-icon"></i>
                    </div>
                  </div>
                  <div className="reviews">
                    <div className="reviews-items">
                      <i className="fa fa-star reviews-color"></i>
                      <i className="fa fa-star reviews-color"></i>
                      <i className="fa fa-star reviews-color"></i>
                      <i className="fa fa-star reviews-color"></i>
                      <i className="fa fa-star reviews-color"></i>
                    </div>
                    <div className="review-text">
                      <h6>Review</h6>
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
