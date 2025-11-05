import './Developers.css'

const Developers = () => {
  const apps = [
    { name: "Zest Protocol", description: "Zest Protocol is a lending protocol, built for Bitcoin.", image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/66f3d21c45a572b711cfdde2_zest.avif", link: "https://app.zestprotocol.com" },
    { name: "STX20", description: "The STX20 protocol introduces a novel approach to creating and sharing digital artifacts on the Stacks blockchain.", image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/6599bcd57a5677c746dca724_NW2_SdJY_400x400.avif", link: "https://stx20.com/" },
    { name: "Stacking DAO", description: "Liquidity for stacked tokens on Stacks", image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/66103137cdbd08705e15e6b7_Discord%20emojis.avif", link: "https://stackingdao.com/" },
    { name: "Hermetica", description: "A Bitcoin-backed, yield-bearing syntethic dollar protocol.", image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/65b129b88198f78918bda3c1_Hermetica%201000.avif", link: "https://www.hermetica.fi/" },
    { name: "Asigna", description: "Multisig Wallet for Bitcoin, Ordinals, BRC20s, and Stacks", image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/652d61006b847e08525c5cb0_asigna.avif", link: "https://asigna.io/" },
    { name: "Dots", description: "Upgrade and manage all your BNS names in one account", image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/65430ed5ceeabe479bb445ac_H_b-isN9_400x400.avif", link: "https://www.dots.so/" },
    { name: "Velar", description: "Velar is a multi-feature DeFi app with Bitcoin finality, built on Stacks", image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/67811238873399fa14b3dfa5_Velar%20Token%20Logo.avif", link: "https://velar.co/" },
    { name: "BitFlow", description: "The decentralized exchange for Bitcoiners", image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/664914a6ca462a48650e646b_qFa1-Xvi_400x400.avif", link: "https://www.bitflow.finance/" },
    { name: "Leather Wallet by Trust Machines", description: "The Bitcoin wallet for the rest of us (fka Hiro Wallet)", image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/6515e3a7184e8056bd755b4d_Leather%20Logo%20(1).avif", link: "https://leather.io/" },
    { name: "Owl Link", description: "Decentralized bio links using .btc domains.", image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/6234dbd26efb5213c6acd86b_owllink.svg", link: "https://owl.link" },
    { name: "Xverse", description: "The Bitcoin wallet for everyone. Connect to Stacks apps and stacking pool with Ledger support. iOS, Android and Chrome.", image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/6482132085c0b4c147b72d4a_uvxAQs60_400x400.avif", link: "https://www.xverse.app/" },
    { name: "Ryder", description: "The world's first social wallet bringing real-life social interaction to crypto.", image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/62bf56ca20ca259b7c968354_ryder-icon.avif", link: "https://ryder.id/" }
  ]

  // Split apps into columns for marquee
  const column1 = apps.slice(0, 4)
  const column2 = apps.slice(4, 8)
  const column3 = apps.slice(8, 12)

  // Duplicate for seamless loop
  const column1Duplicated = [...column1, ...column1]
  const column2Duplicated = [...column2, ...column2]
  const column3Duplicated = [...column3, ...column3]

  return (
    <section className="section_n bpa_loop">
      <div className="top-wrapper_corners-transparent-background hidden-for-mobile">
        <div className="before-corners-white dark-grey"></div>
        <div className="container_n for_outside_corners">
          <div className="corner-first-white darl-grey"></div>
          <div className="corner-second-top-white dark-grey">
            <div className="cc-second-corner-one-special dark-grey"></div>
            <div className="cc-second-corner-one-special dark-grey second-special"></div>
          </div>
          <div className="corner-third transparent not-sharp"></div>
        </div>
        <div className="after-corners transparent"></div>
      </div>
      <div className="container_n">
        <div className="wrapper-bpa_loop">
          <div className="left_side-bpa_home">
            <div className="pupil in-black-background">
              <div className="text_inside_popil">Developers</div>
            </div>
            <h2 className="h2">Build on Bitcoin, the most secure base layer</h2>
            <div className="boxes_all-bpa_home">
              <div className="box-bpa_home not-line-up">
                <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b9787a4156c3b1d2bb27d4_icon.png" alt="" className="icon_small" />
                <div className="content_box-bpa">
                  <div className="first_line_content_box-bpa">
                    <p className="body_mono_micro">SECURED BY BITCOIN</p>
                    <p className="span_plus">+</p>
                  </div>
                  <p className="body_mono_small">Transactions on Stacks will be as irreversible as Bitcoin's.</p>
                </div>
              </div>
              <div className="box-bpa_home not-line-up">
                <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b9787a71e86b9201079d1a_icon-1.png" alt="" className="icon_small" />
                <div className="content_box-bpa">
                  <div className="first_line_content_box-bpa">
                    <p className="body_mono_micro">Bitcoin network effects </p>
                    <p className="span_plus">+</p>
                  </div>
                  <p className="body_mono_small">Build experiences for a massive, largely untapped audience.</p>
                </div>
              </div>
              <div className="box-bpa_home not-line-up">
                <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b9787a5f7173ae272e10b8_icon-2.png" alt="" className="icon_small" />
                <div className="content_box-bpa">
                  <div className="first_line_content_box-bpa">
                    <p className="body_mono_micro">SMART CONTRACTS WITH CLARITY</p>
                    <p className="span_plus">+</p>
                  </div>
                  <p className="body_mono_small">A security-first programming language with visibility on Bitcoin state.</p>
                </div>
              </div>
              <div className="box-bpa_home not-line-up">
                <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b9787a5f7173ae272e10b8_icon-2.png" alt="" className="icon_small" />
                <div className="content_box-bpa">
                  <div className="first_line_content_box-bpa">
                    <p className="body_mono_micro">Developer tools & Community</p>
                    <p className="span_plus">+</p>
                  </div>
                  <p className="body_mono_small">Enjoy tools, tutorials, and a vibrant community to aid you build.</p>
                </div>
              </div>
            </div>
            <div className="buttons_wrapper-blog">
              <a href="#" className="button_purple">
                <div className="text_inside_button">Start Building</div>
              </a>
            </div>
          </div>
          <div className="right_side_dark_comp-vertical-special">
            <div className="column_in_black_background">
              <div className="vertical_dynamic_loop_wrapper">
                <div className="line_cards-abos-comp">
                  {column1Duplicated.map((app, idx) => (
                    <div key={idx} className="card_in_dark-comp-different">
                      <div className="special_for_transparent-component">
                        <div className="image_wrapper_card-dark-special">
                          <img src={app.image} alt={app.name} className="image_item-eco" />
                          <div className="blb_item_card-dark-other-side"></div>
                          <div className="blb_top_right_card-dark"></div>
                        </div>
                      </div>
                      <div className="content_item-different">
                        <h3 className="heading_card_dark-comp">{app.name}</h3>
                        <p className="par_card_dark_comp">{app.description}</p>
                      </div>
                      <div className="star_icon_featured_card_dark">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.0003 9.13L2.47357 11.1041L3.26124 7.13995L0.293945 4.3959L4.30747 3.92003L6.0003 0.25L7.6931 3.92003L11.7066 4.3959L8.73935 7.13995L9.527 11.1041L6.0003 9.13Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <a href={app.link} target="_blank" rel="noopener noreferrer" className="card_pointer_link_dynamic"></a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="column_in_black_background">
              <div className="vertical_dynamic_loop_wrapper">
                <div className="line_cards-abos-comp-other-way">
                  {column2Duplicated.map((app, idx) => (
                    <div key={idx} className="card_in_dark-comp-different">
                      <div className="special_for_transparent-component">
                        <div className="image_wrapper_card-dark-special">
                          <img src={app.image} alt={app.name} className="image_item-eco" />
                          <div className="blb_item_card-dark-other-side"></div>
                          <div className="blb_top_right_card-dark"></div>
                        </div>
                      </div>
                      <div className="content_item-different">
                        <h3 className="heading_card_dark-comp">{app.name}</h3>
                        <p className="par_card_dark_comp">{app.description}</p>
                      </div>
                      <div className="star_icon_featured_card_dark">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.0003 9.13L2.47357 11.1041L3.26124 7.13995L0.293945 4.3959L4.30747 3.92003L6.0003 0.25L7.6931 3.92003L11.7066 4.3959L8.73935 7.13995L9.527 11.1041L6.0003 9.13Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <a href={app.link} target="_blank" rel="noopener noreferrer" className="card_pointer_link_dynamic"></a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="column_in_black_background hide-on-mobile-only">
              <div className="vertical_dynamic_loop_wrapper">
                <div className="line_cards-abos-comp">
                  {column3Duplicated.map((app, idx) => (
                    <div key={idx} className="card_in_dark-comp-different">
                      <div className="special_for_transparent-component">
                        <div className="image_wrapper_card-dark-special">
                          <img src={app.image} alt={app.name} className="image_item-eco" />
                          <div className="blb_item_card-dark-other-side"></div>
                          <div className="blb_top_right_card-dark"></div>
                        </div>
                      </div>
                      <div className="content_item-different">
                        <h3 className="heading_card_dark-comp">{app.name}</h3>
                        <p className="par_card_dark_comp">{app.description}</p>
                      </div>
                      <div className="star_icon_featured_card_dark">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.0003 9.13L2.47357 11.1041L3.26124 7.13995L0.293945 4.3959L4.30747 3.92003L6.0003 0.25L7.6931 3.92003L11.7066 4.3959L8.73935 7.13995L9.527 11.1041L6.0003 9.13Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <a href={app.link} target="_blank" rel="noopener noreferrer" className="card_pointer_link_dynamic"></a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay_horizontal-all"></div>
        <div className="overlay_horizontal-all bottom"></div>
      </div>
      <div className="bottom-wrapper_corners relative-20">
        <div className="before-corners transparent"></div>
        <div className="container_n for_outside_corners">
          <div className="corner-first"></div>
          <div className="corner-second grey">
            <div className="cc-second-corner-one black-with-grey-transparent"></div>
            <div className="cc-second-corner-second transparent-with-grey"></div>
          </div>
          <div className="corner-third grey"></div>
        </div>
        <div className="after-corners grey"></div>
      </div>
      <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65d51aa5b6f9b99475211e5d_grid-base%20(15).png" alt="" className="bpa_loop_background" />
    </section>
  )
}

export default Developers
