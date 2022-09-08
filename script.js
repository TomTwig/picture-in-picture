const videoElement = document.getElementById("inPicture-video");
const videoButton = document.getElementById("inPicture-button");

async function selectMediaStream(){
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    
    
    videoElement.srcObject = mediaStream;
    videoElement.onloadmetadata = () => {
      videoElement.play();
    }
    
  } catch (e) {
    console.log("Ups, in Picture failed", e);
  }
}

videoButton.addEventListener("click",async() =>{
  videoButton.disabled = true;
  await videoElement.requestPictureInPicture();
} );

selectMediaStream();