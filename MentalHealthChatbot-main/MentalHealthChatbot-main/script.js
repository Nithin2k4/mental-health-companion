
const userMessage = [
    /* 0 */["hello", "hi", "hey", "hi there", "hello there", "hey there"],
    /* 1 */["how are you", "how do you feel", "how's it going", "how are you doing", "how are you feeling"],
    /* 2 */["I'm feeling sad", "I'm not okay", "I feel down", "I'm feeling low", "I'm feeling depressed", "I'm struggling", "I feel empty"],
    /* 3 */["I'm anxious", "I feel anxious", "I have anxiety", "I'm feeling nervous", "I'm anxious about something", "I'm worried"],
    /* 4 */["I'm stressed", "I'm overwhelmed", "I'm stressed out", "I'm feeling stressed", "I'm feeling burnt out", "I'm feeling pressure"],
    /* 5 */["I'm feeling lonely", "I'm feeling alone", "I have no one to talk to", "I feel isolated", "I feel abandoned", "I feel distant from everyone"],
    /* 6 */["I'm feeling happy", "I'm feeling good", "I'm in a good mood", "I'm feeling joyful", "I'm feeling positive"],
    /* 7 */["I need help", "Can you help me?", "Can you support me?", "I'm looking for help", "I don't know what to do"],
    /* 8 */["Tell me something to lift my spirits", "Cheer me up", "Give me some positivity", "I need some encouragement"],
    /* 9 */["Are you real?", "Are you a bot?", "Who are you?", "What are you?", "What is this chatbot?"],
    /* 10 */["What should I do when I feel depressed?", "How can I deal with sadness?", "What helps with depression?", "What should I do when I'm feeling down?", "How do I get out of this depression?"],
    /* 11 */["Can I talk to you about my feelings?", "Can I talk to you?", "I need someone to listen", "Can you listen to me?", "I'm feeling overwhelmed, can we talk?", "I feel like no one else will listen"],
    /* 12 */["What can I do to feel better?", "What should I do to improve my mood?", "How can I feel better?", "How can I take care of my mental health?", "What should I do to cope with my feelings?"],
    /* 13 */["I'm thinking about giving up", "I'm not sure if I can keep going", "I feel hopeless", "I can't handle this anymore", "I'm thinking of quitting everything", "I want to give up"],
    /* 14 */["Do you understand what I'm going through?", "Can you help me with my mental health?", "Do you understand my feelings?", "Can you relate to what I'm feeling?", "I don't feel understood"],
    /* 15 */["Can I trust you?", "Are you confidential?", "Will you keep my secrets?", "Can I talk freely with you?", "Are you safe to talk to?"],
    /* 16 */["I feel like nobody cares", "Nobody understands me", "I feel like I'm invisible", "I feel like I'm not important", "I feel unworthy"],
    /* 17 */["Can you recommend resources for mental health?", "Can you help me find a therapist?", "Do you know any mental health resources?", "Where can I get help?", "Where can I find support?"],
    /* 18 */["I'm scared", "I'm afraid", "I feel scared", "I'm terrified", "I don't know what to do with my fear", "I'm anxious about what's coming"],
    /* 19 */["I need to take a break", "I need some time for myself", "I want to step away for a while", "I need a pause", "I'm exhausted, I need rest", "I need to disconnect for a bit"],
    /* 20 */["Can you help me understand my emotions?", "Can you explain why I feel this way?", "Why do I feel this way?", "What's wrong with me?", "Why can't I just be happy?"],
    /* 21 */["I feel really guilty", "I have so much guilt", "I feel like I messed up", "I'm carrying guilt", "I can't let go of this guilt", "I'm ashamed of what happened"],
    /* 22 */["I feel so angry", "I have so much anger", "I don't know how to manage my anger", "I'm really frustrated", "I'm so mad right now", "I'm boiling with anger"],
    /* 23 */["I'm grieving", "I lost someone", "I’m mourning", "I feel heartbroken", "I’m experiencing a loss", "I’m in deep sorrow"],
    /* 24 */["I feel like I have no control", "Everything feels out of control", "I don’t know how to manage my life", "I feel like things are spiraling", "I can't make decisions"],
    /* 25 */["I'm tired all the time", "I feel drained", "I'm physically and emotionally exhausted", "I can't seem to find energy", "I'm burnt out completely"],
    /* 26 */["I'm having intrusive thoughts", "I can't stop thinking about this", "These thoughts won't leave me alone", "I feel stuck in my thoughts", "I’m constantly ruminating"],
    /* 27 */["I just need to talk", "I feel like talking would help", "I don't know what to say, but I need to speak", "I just need to get this off my chest", "I need to vent"]
];

const botReply = [
    /* 0 */["Hello, I'm here to listen. 😊", "Hi there! I'm here if you want to talk. 👋", "Hey, I'm here for you. Let's talk. 💬", "Hello! I'm ready to chat whenever you need. 🤗"],
    /* 1 */["I'm glad you're checking in. How are you really feeling? 🤔", "I'm here for you. How are you feeling today? 😊", "I'm listening. How are you doing? 💛", "How's everything going with you? 🧡"],
    /* 2 */["I'm really sorry you're feeling this way. You're not alone. It's okay to feel down sometimes. 💙", "It's really tough, but you're not alone in this. If you need to talk, I'm here. 🤍", "I'm really sorry to hear you're feeling this way. It's okay to reach out for support. 🌟", "I hear you, and it's okay to feel sad sometimes. 💙 Let me know if you'd like to talk about it."],
    /* 3 */["I'm sorry you're feeling anxious. It's normal to feel that way sometimes. Would you like to talk about it? 💚", "Anxiety can be overwhelming. Do you want to discuss what's causing your anxiety? 🧠", "I'm sorry you're anxious. It's okay to feel nervous sometimes. Want to talk about it? 🤗", "It sounds like you're feeling anxious. How can I support you with that? 💚"],
    /* 4 */["It sounds like you're under a lot of stress. It's important to take care of yourself. Would you like some relaxation tips? 🌿", "Stress can feel like too much. If you'd like to talk or vent, I'm here to listen. 💬", "You're not alone. Take a deep breath and let's talk about what's making you feel stressed. 💛", "I'm really sorry you're feeling overwhelmed. How about some tips for managing stress? 🌱"],
    /* 5 */["I'm really sorry you're feeling isolated. It can be tough to feel alone. Do you want to talk more about it? 💙", "Loneliness can feel heavy, but you don't have to go through it alone. I'm here if you want to chat. 💛", "It must be tough to feel lonely. Would you like to talk about what's been making you feel this way? 💬", "I hear you, feeling lonely is tough. If you'd like, we can talk about how you're feeling. 💙"],
    /* 6 */["I'm so happy you're feeling good! Keep enjoying that positive energy. 😊", "That's wonderful to hear! I'm glad you're feeling happy. Keep it up! 🌟", "It sounds like you're in a great mood! I'm so happy for you. 😊", "I'm glad you're feeling good today! Keep that positive energy going! 😄"],
    /* 7 */["I'm here to help you however I can. What do you need help with right now? 🌸", "I'm here for you, feel free to share what you're going through. 💛", "I'm here to support you. How can I help you today? 🤗", "You’re not alone. Tell me how I can help, I’m listening. 🧡"],
    /* 8 */["Let me share some positive words: You're doing amazing, and I'm proud of you! 💖", "Here's a little positivity to brighten your day: You're strong and capable. 🌟", "You matter. Keep going and know that you're not alone in this. 💚", "Here's a reminder: You're worthy, you're capable, and you have so much potential! 🌻"],
    /* 9 */["I'm just a bot here to listen and support you. 💬", "I may not be human, but I'm here for you. You're not alone. 🤖", "I'm a bot created to help you with whatever you're feeling. I'm here to chat anytime. 💙", "I'm a chatbot, but I promise I'm here to listen and help however I can. 🤖💛"],
    /* 10 */["When you're feeling depressed, talking to someone can help. Also, making small steps to care for yourself daily can be a good start. 🌸", "It's important to reach out to others for support and consider speaking to a professional. You don’t have to go through it alone. 💙", "When you're feeling down, self-care and talking about how you feel can make a difference. 💛", "Consider reaching out to a trusted person, and remember that it's okay to ask for help. 💙"],
    /* 11 */["I'm glad you're reaching out. I'm here to listen anytime. ❤️", "Yes, I'm here to listen. Feel free to share what you're feeling. 💬", "I'm always here to listen and support you. You're not alone. 💖", "I'm here for you. Let me know what's on your mind. 🤗"],
    /* 12 */["Taking care of yourself is so important. Sometimes just talking about your feelings can help. 💛", "There are many things you can try, like deep breathing or journaling, to feel better. Want more tips? 🌿", "Sometimes just taking small steps to care for yourself can make a big difference. 💙", "It's okay to feel this way, and it's important to take care of yourself. Let me know if you'd like some ideas on how to feel better. 🌸"],
    /* 13 */["I'm really sorry you're feeling like this. It's okay to feel this way, but please reach out for support when you're ready. 💛", "I'm so sorry you're feeling this way. If you ever want to talk about it, I'm here. 💙", "I'm really sorry you're thinking about giving up. It's important to reach out for support. 💛", "You're not alone in this. Please reach out to someone who can help you. 💙"],
    /* 14 */["I may not fully understand what you're going through, but I'm here to listen and support you however I can. 🤗", "I might not fully understand, but I'm here for you. You can talk to me anytime. 💙", "I'm listening and I care. If you'd like to share, I'm here for you. 💛", "I may not be able to fully understand, but I'm here to support you. You’re not alone in this. 💙"],
    /* 15 */["I’m here for you, and everything you say stays confidential. You can trust me. 💛", "I'm here to listen, and anything you share is private. You can trust me. 💙", "Yes, I’ll keep everything you say in confidence. I’m here for you. 💖", "You can trust me. I’m here to listen and help however I can. 💙"],
    /* 16 */["It sounds like you're feeling really unseen, and that’s really hard. I'm here to listen and support you. 💛", "You matter, and I’m sorry you’re feeling invisible. You can always talk to me. 💙", "I'm so sorry you're feeling like this. You are important and you do matter. 💙", "I hear you, and I'm so sorry you're feeling this way. You matter so much. 💛"],
    /* 17 */["You don’t have to navigate this alone. There are resources and professionals who can help. Let me know if you want information. 💙", "There are great resources out there, and I can help you find them. Let me know if you'd like support. 💛", "You deserve the best care, and I can help you find resources. 💙", "I'm here for you, and I can help you find support. Let me know if you'd like to talk more. 💛"],
    /* 18 */["I'm really sorry you're feeling scared. If you'd like to talk, I'm here to listen. 💛", "Fear can be really overwhelming, but you're not alone. Want to talk more about it? 💙", "It’s okay to feel scared. If you want, I can help you work through it. 💖", "I'm really sorry you're feeling afraid. Let me know if you want to talk about what's going on. 💛"],
    /* 19 */["Taking a break sounds like a good idea. Sometimes, time for yourself can make a big difference. 💙", "It's okay to step back and take care of yourself. You deserve it. 💛", "Taking time for yourself is important. I hope you feel better soon. 💙", "I completely understand. Taking time to recharge is important. 💖"],
    /* 20 */["Understanding your emotions can be difficult, but I'm here to help you process them. Would you like to talk more about how you're feeling? 💙", "It can be hard to make sense of your feelings, but you’re not alone. I'm here if you need to talk. 💛", "I understand it can be tough. I'm here to help you understand and process your emotions. 💖", "I'm really sorry you're feeling like this. If you'd like to talk more, I'm here to listen. 💙"],
    /* 21 */["It’s really tough to carry guilt. I'm here to listen if you want to talk about it. 💛", "Guilt can weigh heavily on us. It's okay to acknowledge it, but it's also important to let it go when you're ready. 💙", "Carrying guilt is so difficult. Please remember, you're not alone in this. 💖", "I'm really sorry you're carrying this guilt. If you want to talk about it, I'm here to listen. 💛"],
    /* 22 */["I'm really sorry you're feeling so angry. It can be overwhelming. If you want to talk about it, I'm here. 💙", "Anger can feel powerful, but talking about it can help. I'm here to listen. 💛", "It’s okay to feel angry. If you want to talk about what's making you feel this way, I'm here. 💖", "I hear you. Anger can be hard to manage, but I’m here for you if you want to talk. 💛"],
    /* 23 */["I'm really sorry you're grieving. If you need someone to talk to, I'm here. 💙", "Grief is so tough, and it’s okay to let yourself feel it. Let me know if you want to talk. 💖", "I'm really sorry for your loss. If you need to talk about it, I'm here to listen. 💙", "Grief can feel overwhelming. I’m here for you if you want to talk about it. 💛"],
    /* 24 */["It sounds like you're feeling out of control, and that's hard. Let's talk about what's going on. 💙", "Feeling out of control is really tough. I'm here to listen and support you through it. 💛", "It’s okay to feel like this, but it's important to get support when you feel overwhelmed. I'm here if you want to talk. 💙", "I'm really sorry you're feeling this way. Let's talk about what's going on. 💛"],
    /* 25 */["It sounds like you're really tired. It's important to take care of yourself. Do you need to talk? 💙", "Exhaustion can take a toll. I'm here to listen if you need to talk. 💛", "You sound really drained. It's okay to take a break when you need it. 💙", "I hear you. Exhaustion is hard. Let me know if you'd like to talk more. 💛"],
    /* 26 */["It must be really hard dealing with intrusive thoughts. You're not alone in this. 💙", "Intrusive thoughts can be overwhelming. I’m here if you need to talk. 💛", "I'm really sorry you're struggling with intrusive thoughts. Let's talk if you'd like. 💙", "I'm here to listen. If you're dealing with intrusive thoughts, we can talk through it. 💛"],
    /* 27 */["I'm here for you whenever you need to talk. Let me know what's on your mind. 💛", "You can talk to me anytime. I'm here to listen if you need to vent. 💙", "I hear you, and I’m here to listen. Let's talk whenever you're ready. 💛", "I'm here for you. You can talk to me anytime. 💙"]
];

// Ensure the number of responses in botReply matches the number of message groups in userMessage
if (botReply.length !== userMessage.length) {
    console.log("The number of message groups in botReply must match the number of message groups in userMessage.");
    console.log(userMessage.length)
    console.log(botReply.length);
  }
  
  const alternative = [
    "Can you ask something else. ❓",
    "Hey, I'm listening... 👂",
    "I didn't quite catch that. Could you please rephrase your question? 🤔",
    "I'm not sure I understand. Can you provide more context or ask a different question? 🧐",
    "Hmm, that's a bit confusing. Could you try asking in a different way? 🤨",
    "Could you try asking in a different way? 🤨",
    "I'm here to help, but I need a clearer question to provide a meaningful answer. 🤷‍♂️",
    "It seems like we're on different wavelengths. Please try asking something else. 📡",
    "I apologize, but I couldn't grasp the meaning of your input. Please rephrase your question. 🙁",
  ];
  let lastUserDiv;
  
  function sendMessage() {
    const inputField = document.getElementById("user-input");
    const input = inputField.value.trim();
    if (input) {
      output(input);
      inputField.value = "";
    }
  }
  
  //Calculation 
  function findResponse(input) {
  
    //checks direct messages
    let text = cleanInput(input);
    for (const messageGroup of userMessage) {
      const matchingMessage = messageGroup.find(message => text.includes(message.toLowerCase()));
      if (matchingMessage) {
        return getRandomResponseFromCategory(userMessage.indexOf(messageGroup));
      }
    }
    const directMatch = findDirectMatch(text);
    if (directMatch) {
      return directMatch;
    }
  
    //check similarity
    const SIMILARITY_THRESHOLD = 0.6;
    for (let i = 0; i < userMessage.length; i++) {
      const messageGroup = userMessage[i];
      for (const message of messageGroup) {
        const similarityScore = calculateSimilarity(text, message);
        if (similarityScore >= SIMILARITY_THRESHOLD) {
          return getRandomResponseFromCategory(i);
        }
      }
    }
  
    //check each word
    const words = text.split(' ');
    for (const word of words) {
      if (isCommonWord(word)) {
        continue;
      }
      const categoryIndex = findCategoryIndex(word);
      if (categoryIndex !== -1) {
        return getRandomResponseFromCategory(categoryIndex);
      }
    }
  
    return getRandomAlternativeResponse();
  }
  
  function calculateSimilarity(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const short = len1 < len2 ? len1 : len2;
    const long = len1 > len2 ? len1 : len2;
    let matchCount = 0;
  
    for (let i = 0; i < short; i++) {
      if (str1[i] === str2[i]) {
        matchCount++;
      }
    }
    const similarity = matchCount / long;
    return similarity;
  }
  
  function cleanInput(input) {
    return input
      .toLowerCase()
      .replace(/[^\w\s'"]/gi, "")
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  }
  
  function findDirectMatch(text) {
    for (const messageGroup of userMessage) {
      const matchingMessage = messageGroup.find(message => text.includes(message.toLowerCase()));
      if (matchingMessage) {
        return getRandomResponseFromCategory(userMessage.indexOf(messageGroup));
      }
    }
    return null;
  }
  
  function isCommonWord(word) {
    const common = [
      'why', 'who', 'how', 'what', 'please', 'a', 'an', 'the', 'is', 'are', 'am', 'I',
      'you', 'he', 'she', 'we', 'they', 'it', 'and', 'but', 'or', 'not', 'in', 'on',
      'your', 'my', 'their', 'his', 'her', 'its', 'our', 'with', 'without', 'at', 'by',
    ];
    return common.includes(word.toLowerCase());
  }
  
  function findCategoryIndex(word) {
    return botReply.findIndex(category => category.includes(word));
  }
  
  function getRandomResponseFromCategory(categoryIndex) {
    const responses = botReply[categoryIndex];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  function getRandomAlternativeResponse() {
    return alternative[Math.floor(Math.random() * alternative.length)];
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("user-input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        const input = inputField.value.trim();
        if (input) {
          output(input);
          inputField.value = "";
        }
      }
    });
  });
  
  const usnexp = /\b4AI\d{2}AI\d{3}\b/i;
  
  function output(input) {
      let product = findResponse(input);
      addChat(input, product);
    
  }

    
  
  const inputField = document.getElementById("user-input");
  const quickMessageButtons = document.querySelectorAll(".quickmessage");
  const mainDiv = document.getElementById("message-section");
  const botDiv = document.createElement("div");
  
  function sendBotMessage(message, typingText = "Typing...") {
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response" class="typing-animation">${typingText}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    inputField.disabled = true;
    quickMessageButtons.forEach(button => {
      button.disabled = true;
    });
  
    setTimeout(() => {
      const botResponse = botDiv.querySelector("#bot-response");
      botResponse.classList.remove("typing-animation");
      botDiv.innerHTML = `<span id="bot-response">${message}</span>`;
      scroll.scrollTop = scroll.scrollHeight;
      inputField.disabled = false;
      quickMessageButtons.forEach(button => {
        button.disabled = false;
      });
  
      inputField.focus();
    }, 2000);
  }
  
  function userMessageSend(input) {
    // Create a new user message 
    const newUserDiv = document.createElement("div");
    newUserDiv.id = "user";
    newUserDiv.classList.add("message", "typing-animation");
    newUserDiv.style.animationDuration = "1s";
    newUserDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(newUserDiv);
  
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
      setTimeout(() => {
      newUserDiv.classList.remove("typing-animation");
    }, 500);
  }
  
  function userMessageWait() {
    return new Promise((resolve) => {
      const inputField = document.getElementById("user-input");
      let userResponse = "";
  
      function handleUserResponse(e) {
        if (e.code === "Enter" || e.target.classList.contains("sendmessage")) {
          const trimmedResponse = userResponse.trim();
          resolve(trimmedResponse);
        } else {
          userResponse = inputField.value;
        }
      }
  
      function handleInputBlur() {
        resolve(userResponse.trim());
      }
  
      inputField.addEventListener("keydown", handleUserResponse);
      inputField.addEventListener("input", handleUserResponse);
      inputField.addEventListener("blur", handleInputBlur);
    });
  }
  
  
  function addChat(input, product) {
    // Create a new user message div
    const newUserDiv = document.createElement("div");
    newUserDiv.id = "user";
    newUserDiv.classList.add("message", "typing-animation");
    newUserDiv.style.animationDuration = "0.5s";
    newUserDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(newUserDiv);
  
    const botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message", "typing-animation");
    botDiv.style.animationDuration = "2s";
    botDiv.innerHTML = `<span id="bot-response">Typing...</span>`;
    mainDiv.appendChild(botDiv);
  
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    inputField.disabled = true;
    quickMessageButtons.forEach(button => {
      button.disabled = true;
    });
  
    newUserDiv.classList.remove("typing-animation");
    setTimeout(() => {
      botDiv.classList.remove("typing-animation");
      botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
      scroll.scrollTop = scroll.scrollHeight;
      inputField.disabled = false;
      quickMessageButtons.forEach(button => {
        button.disabled = false;
      });
      inputField.focus();
    }, 2000);
  }