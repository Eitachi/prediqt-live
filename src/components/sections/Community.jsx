import './Community.css'

const Community = () => {
  return (
    <section className="section_n">
      <div className="container_n">
        <div className="wrapper_ln-community_home">
          <div className="heading_wrapper_ln">
            <h2 className="h2">Join the community</h2>
          </div>
          <div className="wrapper_box-community_home">
            <div className="top_boxes-community_home">
              <div className="first_box-community">
                <div className="icon_wraper-community">
                  <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65bacf180a83198e553d6718_calendar.png" alt="" className="icon_small" />
                </div>
                <div className="events-community">
                  <div className="first_event_wrapper-community align-top">
                    <div className="date-community_events">Future Events</div>
                    <div className="wrapper-community_home">
                      <div className="empty_state_events">No items found.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom_boxes-community_home">
              <div className="bottom_box-community_home right-border">
                <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65bbe672fb6b0c94bd79ecdc_paperplane.png" alt="" className="icon_small" />
                <div className="text_community_bottom_boxes">News and updates.</div>
                <a href="https://www.stacks.co/explore/ecosystem?category=Channels#community" className="button_community-home">
                  <div className="text_button_wbos">TELEGRAM</div>
                  <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b1609158d6b878bbca1a89_globe.png" alt="" className="icon_button_dev_tools" />
                </a>
              </div>
              <div className="bottom_box-community_home with_borders">
                <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65bbe9e49b5c1157c4a52bf1_x.png" alt="" className="icon_small" />
                <div className="text_community_bottom_boxes">Follow the conversation.</div>
                <a href="https://twitter.com/Stacks" target="_blank" rel="noopener noreferrer" className="button_community-home">
                  <div className="text_button_wbos">X.com</div>
                  <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b1609158d6b878bbca1a89_globe.png" alt="" className="icon_button_dev_tools" />
                </a>
              </div>
              <div className="bottom_box-community_home">
                <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65bbe9e2786c9278d06e452a_discord.png" alt="" className="icon_small" />
                <div className="text_community_bottom_boxes">Chat in real time.</div>
                <a href="https://discord.gg/5DJaBrf" target="_blank" rel="noopener noreferrer" className="button_community-home">
                  <div className="text_button_wbos">Discord</div>
                  <img src="https://cdn.prod.website-files.com/618b0aafa4afde65f2fe38fe/65b1609158d6b878bbca1a89_globe.png" alt="" className="icon_button_dev_tools" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
