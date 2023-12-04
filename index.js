// MP3 Player

var audio = document.getElementById("audio");
    var trackList = ["Audio/8Letters.mp3", "Audio/Butterflies.mp3", "Audio/Colorblind.mp3", "Audio/ElijahWoods.mp3", "Audio/GryffinOneRepublic.mp3", "Audio/HateYouLoveYou.mp3", "Audio/Maximillian.mp3", "Audio/Mokita.mp3"];
    var currentTrackIndex = 0;

    function previousTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + trackList.length) % trackList.length;
        audio.src = trackList[currentTrackIndex];
        audio.play();
    }

    function playPause() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % trackList.length;
        audio.src = trackList[currentTrackIndex];
        audio.play();
    }

    function stop() {
        audio.pause();
        audio.currentTime = 0;
    }

// Set Timeout

function timeout() {

    document.getElementById('how').innerHTML = '1. 8Letters, 2. Butterflies, 3. Colorblind, 4. ElijahWoods, 5. GryffinOneRepublic, 6. HateYouLoveYou, 7. Maximillian, 8. Mokita'
    document.getElementById('appear').innerHTML = ""
}

// To Do List

function add_todo() {
    const todo_input = document.getElementById('todo_input').value;
    const todo_list =document.getElementById('todo_list');
    const new_todo = document.createElement('li');
    let todo_name = document.createTextNode(todo_input);

    new_todo.appendChild(todo_name)
    todo_list.appendChild(new_todo)

    document.getElementById('todo_input').value = "";
    new_todo.className ='fw-bold '
}

// Capitalised Letters

function uppercase() {    
    const text = document.getElementById('upperlowertext').innerHTML
    document.getElementById('upperlowertext').innerHTML = text.toUpperCase()
}

function lowercase() {    
    const text = document.getElementById('upperlowertext').innerHTML
    document.getElementById('upperlowertext').innerHTML = text.toLowerCase()
}

// Hide /Unhide Full Text

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("the navigation bars and select a functionalities you want to try!");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }