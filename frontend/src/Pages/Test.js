import React from "react";

(function() {
  var displayOnlineStatus = document.getElementById("online-status");
  console.log("in start funct");
  var displayLEDStatus = document.getElementById("online-led"),
    isOnline = function() {
      displayOnlineStatus.innerHTML = "Online";
      //displayOnlineStatus.className = "online";
      displayLEDStatus.className = "led-green";
    },
    isOffline = function() {
      displayOnlineStatus.innerHTML = "Offline";
      //displayOnlineStatus.className = "offline";
      displayLEDStatus.className = "led-red-on";
    };

  if (window.addEventListener) {
    /*
            Works well in Firefox and Opera with the 
            Work Offline option in the File menu.
            Pulling the ethernet cable doesn't seem to trigger it.
            Later Google Chrome and Safari seem to trigger it well
        */
    window.addEventListener("online", isOnline, false);
    window.addEventListener("offline", isOffline, false);
  } else {
    /*
			Works in IE with the Work Offline option in the 
			File menu and pulling the ethernet cable
		*/
    document.body.ononline = isOnline;
    document.body.onoffline = isOffline;
  }
})();

class Test extends React.Component {
  render() {
    return (
      <div className="createAccount grey">
        <div className="but">
          <a href="#popup">Open Modal</a>
        </div>
        <div class="popup" id="popup">
          <div class="popup-inner">
            <div class="popup__text">
              <ul class="movie-gen block">
                <li className="col position1"> Yurii Girnuk</li>
                <figure class="profile position">
                  <img
                    src="https://picsum.photos/200/150/?random"
                    class="profile-avatar"
                    alt=""
                  />
                </figure>
                <div className="col position2">
                  <div id="online-led" class="led-green">
                    <div id="online-status">online</div>
                  </div>
                </div>
                <hr className="new4 col position3" />
              </ul>
              <h1>Send a message</h1>
              <div class="message">
                <label for="message"></label>
                <textarea
                  name="message"
                  placeholder="I'd like to chat about"
                  id="message_input"
                  cols="30"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="createAccount ">
                <button type="submit" className="col position4">
                  Send
                </button>
              </div>
            </div>
            <a class="popup__close" href="#">
              X
            </a>
          </div>
        </div>
        <div className="grey">
          <a href="http://localhost:3000/register">
            Don't have an account? Click here
          </a>
        </div>
      <background/>
      </div>
    );
  }
}

export default Test;
