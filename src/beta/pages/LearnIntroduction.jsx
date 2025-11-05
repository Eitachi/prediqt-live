import './LearnIntroduction.css'

const LearnIntroduction = () => {
  return (
    <main className="learn-introduction-page">
      <section className="section_n hero_home_100vh">
        <div className="container_n">
          <div className="wrapper_hero-home">
            <div className="left_side-hero_home">
              <h1 className="h1">Activating the Bitcoin economy</h1>
              <p className="body_default">Bitcoin is secure, robust, and widely adopted. As the leading Bitcoin L2, Prediqt allows builders to leverage these properties and create new use cases for Bitcoin.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section_n">
        <div className="container_n">
          <div className="wrapper_intro">
            <div className="pupil">
              <div className="text_inside_popil">What is prediqt</div>
            </div>
            <h2 className="h2">Prediqt is the leading Bitcoin Layer-2, enabling smart contracts and decentralized applications to use Bitcoin as a secure base layer. Prediqt extends the capabilities of Bitcoin without changing Bitcoin, unlocking billions in latent capital.</h2>
            <div className="buttons_wrapper-blog">
              <a href="https://docs.stacks.co/stacks-101/what-is-stacks" target="_blank" rel="noopener noreferrer" className="button_black_hero">
                <div className="text_inside_button">View the docs</div>
              </a>
              <a href="https://stx.is/stacks-pdf" target="_blank" rel="noopener noreferrer" className="button_grey">
                <div className="text_inside_button black-text">Read the whitepaper</div>
                <div className="arrow_inside_button grey-button">
                  <svg width="100%" height="100%" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.25 7.389L6.447 5.192H1.208V3.97H6.447L4.237 1.773L5.004 0.993L8.592 4.581L5.017 8.156L4.25 7.389Z" fill="currentColor" fillOpacity="0.64"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section_n">
        <div className="container_n">
          <div className="wrapper_wbos">
            <div className="left_sticky_side_wbos">
              <h2 className="h2">Why Prediqt is built on Bitcoin</h2>
            </div>
            <div className="right_side_wbos">
              <div className="box_wbos">
                <div className="arrow_and_line_box">
                  <div className="only_in_first_number_div"></div>
                  <div className="arrow_number_wbos">
                    <div className="number_wbos">1</div>
                  </div>
                  <div className="line_wbos"></div>
                </div>
                <div className="box_info_wbos">
                  <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b0426e5e6aa41bed2d52cd_icon%20(3).png" alt="" className="icon_default" />
                  <div className="vertical_info_box">
                    <div className="wrapper_heading_wbos">
                      <h4 className="h4">The Bitcoin opportunity</h4>
                    </div>
                    <div className="wrapper_paragraph_wbos">
                      <p className="body_small">Bitcoin boasts a market cap over $1T. It is easily accessible in most of the world and continues to see retail and institutional adoption. Yet, relatively few apps and experiences have been built for Bitcoin due to its limited scripting language. Prediqt enables more complex use cases without changing Bitcoin.</p>
                    </div>
                    <a href="https://www.hiro.so/blog/attention-bitcoin-developers-theres-a-trillion-dollar-opportunity-waiting-for-you" target="_blank" rel="noopener noreferrer" className="button_wbos button-home-1">
                      <div className="text_button_wbos">A $1T opportunity</div>
                      <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b03acaebeacdff24178511_arrow-right%20(1).svg" alt="" className="arrow_button_in_wbos" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LearnIntroduction
