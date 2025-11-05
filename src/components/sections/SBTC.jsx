import './SBTC.css'

const SBTC = () => {
  return (
    <section className="section_n sbtc_home">
      <div className="container_n">
        <div className="wrapper-sbtc_home">
          <div className="left_side-sbtc_home">
            <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b97e75b7c54682e91c239b_illu%20(3).avif" alt="" className="illustration-sbtc" />
          </div>
          <div className="right_side-sbtc_home">
            <div className="pupil no-min-width">
              <div className="text_inside_popil">SBTC</div>
            </div>
            <h2 className="h2">Programmable Bitcoin for Builders</h2>
            <div className="wrapper_par-sbtc_home">
              <p className="body_mono_small">
                Welcome sBTC - a 1:1 Bitcoin-backed asset that fully unlocks BTC's capital: A decentralized way to move BTC from Bitcoin L1 to and L2 and back. <strong>Now live on Stacks.</strong>
              </p>
            </div>
            <div className="two_buttons_wrapper_wis-learn auto_top">
              <a href="/sbtc" className="button_orange_small">
                <div className="text_inside_button orange-button">SBTC</div>
                <div className="arrow_inside_button">
                  <svg width="100%" height="100%" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.25 7.389L6.447 5.192H1.208V3.97H6.447L4.237 1.773L5.004 0.993L8.592 4.581L5.017 8.156L4.25 7.389Z" fill="white" fillOpacity="0.64"></path>
                  </svg>
                </div>
              </a>
              <a href="https://docs.stacks.co/concepts/sbtc" target="_blank" rel="noopener noreferrer" className="button_grey-small">
                <div className="text_inside_button black-text">DOCS</div>
                <div className="arrow_inside_button grey-button">
                  <svg width="100%" height="100%" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.25 7.389L6.447 5.192H1.208V3.97H6.447L4.237 1.773L5.004 0.993L8.592 4.581L5.017 8.156L4.25 7.389Z" fill="currentColor" fillOpacity="0.64"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b97ff74fd5489901f90005_grid-base%20(6).png" alt="" className="grid_background-sbtc_home" />
      <div className="bottom-wrapper_corners sbtc">
        <div className="before-corners transparent"></div>
        <div className="container_n for_outside_corners">
          <div className="corner-first"></div>
          <div className="corner-second white">
            <div className="cc-second-corner-one transparent-to-white"></div>
          </div>
        </div>
        <div className="after-corners white"></div>
      </div>
    </section>
  )
}

export default SBTC
