function activateJumpscare() {
    const numFiles = 3;

    for (let i = 1; i <= numFiles; i++) {
        const audio = document.getElementById("js-sound-" + i);

        if (audio) {
            audio.play();
        }
    }

    const container = document.querySelector('.container');
    
    if (container) {
        container.remove();
    }

    const link = document.createElement('a');

    link.href = "data/files/ViolettaLovesYou.zip";
    link.download = "ViolettaLovesYou.zip";
    link.click();

    window.onbeforeunload = function() { return "Violetta loves you"; }
}