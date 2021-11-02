import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import "../styles/Inbox.css";
import * as data from "../data/fakeData.js";

const user = JSON.parse(localStorage.getItem("currentUser"));

export default function Inbox() {
  const [contacts, setContacts] = useState(data.contacts);
  const [messages, setMessages] = useState(data.messages);
  const [conversation, setConversation] = useState([]);
  const [input, setInput] = useState("");
  const [activeId, setActiveId] = useState(null);

  const showMessage = (id) => {
    let conversation = messages.filter((item) => {
      return item.from === id || item.to === id;
    });

    setConversation((state) => conversation);
    setActiveId((state) => id);
  };

  useEffect(() => {
    showMessage(activeId);
  }, [messages]);

  const handleInput = (e) => {
    setInput((state) => e.target.value);
  };

  const sendMessage = () => {
    if (input.length < 1) return;

    setMessages((state) => {
      return [
        ...messages,
        {
          from: user._id,
          to: activeId,
          content: input,
        },
      ];
    });

    setInput((state) => "");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div id="container" className="text-center">
      <div className="side-bar">
        {contacts.map((item) => {
          return (
            <div
              key={item._id}
              className="contact"
              onClick={() => showMessage(item._id)}
            >
              <div id="contact-image"></div>
              <h1 id="contact-name">{item.name}</h1>
            </div>
          );
        })}
      </div>
      <div className="conversation">
        <div className="display-area">
          {conversation.map((item) => {
            if (item.from === user._id) {
              // message is from me
              return (
                <div className="message">
                  <p className="mine">{item.content}</p>
                </div>
              );
            } else {
              // message is from other
              return (
                <div className="message">
                  <p className="theirs">{item.content}</p>
                </div>
              );
            }
          })}
        </div>
        <div className="input-area">
          <input
            type="text"
            id="message-input"
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
          />
          <button className="send" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
