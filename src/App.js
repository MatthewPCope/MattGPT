import './App.css';
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/IMG_0713.jpg'
import gptImgLogo from './assets/chatgptLogo.svg'

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="logo" className="logo" /><span className="brand">MattGPT</span></div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="query" />What is programming ?</button>
            <button className="query"><img src={msgIcon} alt="query" />How to use an API ?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade to Pro</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa similique dolores neque ut atque corporis quas commodi rem laborum.</p>
          </div>
          <div className="chat bot">
            <img className='chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam mollitia nemo hic commodi autem rem aliquam officia saepe delectus exercitationem. Similique fuga voluptate ut officia? Tenetur rerum, eaque dignissimos est vitae fugiat amet odio et accusantium nulla, enim quisquam ducimus possimus consectetur officiis ad eveniet suscipit molestiae, fuga quia excepturi neque consequuntur. In, magnam itaque. Deleniti, magni incidunt id aperiam quo dolorem, asperiores praesentium at nisi facere libero ad exercitationem dolores recusandae excepturi sed numquam iusto, autem dolorum? Dolore accusantium cum sed nobis distinctio sapiente, quis corrupti molestiae suscipit architecto. In tenetur laborum aperiam impedit omnis expedita delectus voluptate aliquam!</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message' /><button className="send"><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>MattGPT may produce inaccurate information about people, places ot facts.</p>
        </div>

      </div>
    </div>
  );
}

export default App;
