import './Hero.css'

const Hero = () => {
  return (
    <section className="section_n hero_home_100vh">
      <div className="container_n">
        <div className="wrapper_hero-home home">
          <div className="left_side-hero_home yield">
            <a href="#" className="accouncement-hero_home">
              <div className="purple_text_and_dot-announcement hide-for-now">
                <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/6625f293e66b7f6a33ca9495_Frame-36918-white.svg" alt="" className="dot_announcement" />
                <p className="body_mono_micro">Announcement</p>
              </div>
              <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/6625f0c771818d913fe2efbb_Frame-36918-orange.svg" alt="" className="dot_announcement" />
              <p className="body_mono_case announcement">Meet Dual Stacking: Hold Bitcoin, Earn Bitcoin</p>
            </a>
            <div className="heading_wrapper-hero_home">
              <h1 className="h1">Activate the Bitcoin economy with the leading Bitcoin L2</h1>
            </div>
            <div className="par_wrapper-hero_home">
              <p className="body_default">Use and build apps that leverage Bitcoin as a secure base layer.</p>
            </div>
            <div className="buttons_wrapper-blog">
              <a href="#" className="button_black_hero homepage">
                <div className="text_inside_button black-button">BUILD APPS</div>
              </a>
              <a href="#" className="button_grey">
                <div className="text_inside_button black-text">EXPLORE APPS</div>
                <div className="arrow_inside_button grey-button">
                  <svg width="100%" height="100%" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.25 7.389L6.447 5.192H1.208V3.97H6.447L4.237 1.773L5.004 0.993L8.592 4.581L5.017 8.156L4.25 7.389Z" fill="currentColor" fillOpacity="0.64"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="right_side-hero_home">
            <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b949468c971709f0ddcd8c_illustration%20(1).avif" alt="" className="image-hero_home" />
          </div>
          <div className="white_rectangle-hero_home">
            <div className="cc-hero_home"></div>
            <div className="cc-hero_home second"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
