import './WhyBitcoin.css'

const WhyBitcoin = () => {
  const reasons = [
    {
      number: "1",
      icon: "https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b0426e5e6aa41bed2d52cd_icon%20(3).png",
      title: "Secure",
      description: "Bitcoin is the most battle-tested and decentralized blockchain. With Bitcoin as a base layer, users and developers alike benefit from the properties that make Bitcoin so powerful and secure.",
      link: "https://finimize.com/content/bitcoin-security-heres-what-makes-the-og-blockchain-safer-than-fort-knox-with-ledger",
      linkText: "Bitcoin Security"
    },
    {
      number: "2",
      icon: "https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b038ddf3e938a096076a32_icon.png",
      title: "Adopted",
      description: "Bitcoin is the most familiar, adopted crypto asset, giving builders access to an enormous user base and untapped capital.",
      link: "https://www.tradingview.com/symbols/BTC.D/",
      linkText: "Bitcoin Dominance"
    },
    {
      number: "3",
      icon: "https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65c5cfdec4609b9647156809_money-icon-refresh.png",
      title: "Untapped",
      description: "Over $1 trillion in latent capital is waiting for builders, founders, and creators to activate it.",
      link: "https://www.hiro.so/blog/attention-bitcoin-developers-theres-a-trillion-dollar-opportunity-waiting-for-you",
      linkText: "The opportunity"
    }
  ]

  return (
    <section className="section_n wbos-section">
      <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b58d9afc4c59f7f25e73f8_grid-base%20(1).avif" alt="" className="grid_new_grey_section" />
      <div className="container_n">
        <div className="wrapper_wbos">
          <div className="left_sticky_side_wbos">
            <h2 className="h2">Why Bitcoin?</h2>
          </div>
          <div className="right_side_wbos">
            {reasons.map((reason, index) => (
              <div key={index} className="box_wbos">
                <div className="arrow_and_line_box">
                  {index === 0 && <div className="only_in_first_number_div"></div>}
                  <div className={`arrow_number_wbos ${index === reasons.length - 1 ? 'last' : ''}`}>
                    <div className="number_wbos">{reason.number}</div>
                  </div>
                  {index < reasons.length - 1 && <div className="line_wbos"></div>}
                </div>
                <div className="box_info_wbos hidden-links">
                  <img src={reason.icon} alt="" className="icon_default" />
                  <div className="vertical_info_box">
                    <div className="wrapper_heading_wbos">
                      <h4 className="h4">{reason.title}</h4>
                    </div>
                    <div className="wrapper_paragraph_wbos">
                      <p className="body_small">{reason.description}</p>
                    </div>
                    <a href={reason.link} target="_blank" rel="noopener noreferrer" className={`button_wbos button-home-${index + 1}`}>
                      <div className="text_button_wbos">{reason.linkText}</div>
                      <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b03acaebeacdff24178511_arrow-right%20(1).svg" alt="" className="arrow_button_in_wbos" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyBitcoin
