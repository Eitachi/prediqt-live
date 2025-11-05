import './SatoshiUpgrades.css'

const SatoshiUpgrades = () => {
  return (
    <section className="section_n">
      <div className="container_n">
        <div className="wrapper-iwbs_home">
          <div className="box-ibs_home black">
            <h2 className="h2-iwbs">Meet the 'Satoshi Upgrades'</h2>
            <div className="buttons_wrapper-blog nakamoto-section">
              <a href="https://stacksroadmap.com/satoshi" target="_blank" rel="noopener noreferrer" className="button_grey button_orange_big">
                <div className="text_inside_button black-button">Deep dive</div>
                <div className="arrow_inside_button button_orange_big">
                  <svg width="100%" height="100%" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.25 7.389L6.447 5.192H1.208V3.97H6.447L4.237 1.773L5.004 0.993L8.592 4.581L5.017 8.156L4.25 7.389Z" fill="currentColor" fillOpacity="0.64"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="box-ibs_home large">
            <div className="wrapper_all-box-ibs_home">
              <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65d69eeeb2bd80ed12336154_lightning-black-icon.svg" alt="" className="icon_default" />
              <h2 className="h4">Beautiful Bitcoin DeFi</h2>
              <div className="par_box_wrapper-iwbs">
                <p className="body_mono span_black">More flexibility, more composability, more security; major upgrades ahead for Bitcoin DeFi on the leading Bitcoin L2.</p>
              </div>
            </div>
            <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b9810b21f1934d5e9befec_grid-base%20(7).png" alt="" className="grid_background-ibs" />
          </div>
          <div className="box-ibs_home large">
            <div className="wrapper_all-box-ibs_home">
              <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65d69ec485e48dbe3ac00108_shield-black-icon.svg" alt="" className="icon_default" />
              <h2 className="h4">Self-custodial on-ramps</h2>
              <div className="par_box_wrapper-iwbs">
                <p className="body_mono span_black">Take a look ahead at designs that will eliminate sBTC custody risk by enabling users further control over the underlying BTC.</p>
              </div>
            </div>
            <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b9818c472bb64351fd4950_grid-base%20(8).png" alt="" className="grid_background-ibs" />
          </div>
          <div className="box-ibs_home">
            <div className="wrapper_all-box-ibs_home">
              <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65d69fa4d8d9b7bc825bbace_btc-black-icon.svg" alt="" className="icon_default" />
              <h2 className="h4">Sustainable Bitcoin Yields</h2>
              <div className="par_box_wrapper-iwbs">
                <p className="body_mono span_black">Dual-Stacking, Vaults, PoX power-ups and more. Learn what's ahead for those that want real Bitcoin yield.</p>
              </div>
            </div>
            <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b981bfa28e769128dcfcff_grid-base%20(9).png" alt="" className="grid_background-ibs smaller" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SatoshiUpgrades
