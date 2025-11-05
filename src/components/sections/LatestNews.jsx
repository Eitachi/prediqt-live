import './LatestNews.css'

const LatestNews = () => {
  const news = [
    {
      title: "Prediqt & Wormhole Team to Take sBTC & STX Multichain",
      date: "July 2, 2025",
      image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/686576504bcb5d117e58db95_the-defiant-cover.jpg",
      link: "https://thedefiant.io/news/defi/wormhole-integrates-stacks-tokens-for-multi-chain-bitcoin-defi",
      featured: true
    },
    {
      title: "Inside the Infrastructure Layer of BTCFi",
      date: "August 19, 2025",
      image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/68a750ba11f4d777eb3bf192_tiger-research.png",
      link: "https://x.com/Tiger_Research_/status/1957703731308556340"
    },
    {
      title: "Asigna Raises $3M Funding and Launches Bitcoin Multisig v2 Upgrade",
      date: "May 27, 2025",
      image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/6854db4dc975cfc8b22dc046_unnamed%20(1).jpg",
      link: "https://bitcoinmagazine.com/news/asigna-raises-3m-funding-and-launches-bitcoin-multisig-v2-upgrade"
    },
    {
      title: "sBTC Cap-3 (5,000 BTC) Filled In Hours",
      date: "May 22, 2025",
      image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/6854dd0fd4549949070675a2_Group%20316124845.png",
      link: "https://stackssnacks.com/p/new-date-time-for-sbtc-cap-3-and-roadmap-reveal-1"
    },
    {
      title: "It's Time To Make Your BTC Productive Again",
      date: "March 23, 2025",
      image: "https://cdn.prod.website-files.com/618b0aafa4afde9048fe3926/67eec9516e4c57b05566ab22_aspen-digital.avif",
      link: "https://medium.com/@aspendigitalAMP/its-time-to-make-your-btc-productive-again-7532ea788a32"
    }
  ]

  const featured = news.find(item => item.featured)
  const otherNews = news.filter(item => !item.featured)

  return (
    <section className="section_n latest_news">
      <div className="container_n">
        <div className="wrapper_ln-hero_home">
          <div className="heading_wrapper_ln">
            <h2 className="h3">Latest news</h2>
          </div>
          <div className="news_all_wrapper-hero_home">
            {featured && (
              <>
                <div className="news_left-wrapper">
                  <div className="featured_item-ln">
                    <div className="image_wrapper-f_ln">
                      <img src={featured.image} alt={featured.title} className="image-f_ln" />
                    </div>
                    <div className="text_wrapper-f_ln">
                      <div className="txt_main-f_ln">
                        <p className="body_default">{featured.title}</p>
                      </div>
                      <div className="two_smaller_texts_under">
                        <div className="flex-string">
                          <p className="body_mono_case">{featured.date}</p>
                        </div>
                      </div>
                    </div>
                    <a href={featured.link} target="_blank" rel="noopener noreferrer" className="abso_link"></a>
                  </div>
                </div>
                <div className="line-ln"></div>
              </>
            )}
            <div className="grid-ln">
              {otherNews.map((item, index) => (
                <div key={index} className="item_grid-ln">
                  <div className="wrapper_number-ln" style={{backgroundImage: `url(${item.image})`}}>
                    <div className="body_mono_case hide">01</div>
                  </div>
                  <div className="content_item-ln">
                    <p className="body_small">{item.title}</p>
                    <div className="subtxt_item-ln">
                      <p className="body_mono_case">{item.date}</p>
                    </div>
                  </div>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="abso_link"></a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestNews
