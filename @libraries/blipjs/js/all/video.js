$(document).on('nav-complete', () => {
    // Array.from($("video-player")).forEach(player => {

    //     let allowFullscreen = $(player).attr("allowfullscreen") != null
    //     let loop = $(player).attr("loop") != null
    //     let allowOptions = $(player).attr("allowoptions") != null
    //     let allowedSpeeds = $(player).attr("playback-speeds");
    //     if (allowedSpeeds == null) {
    //         allowedSpeeds = [0.2, 0.5, 0.75, 1, 1.25, 1.5, 2]
    //     } else {
    //         allowedSpeeds = Array.from(allowedSpeeds.split(';'))
    //     }

    //     let src = $(player).attr('src');
    //     let id = $(player).attr('id');
    //     if (id == null) id = `player-${btoa(new Date().getTime() + "").replaceAll("==", "")}`
    //     let poster = $(player).attr('poster');

    //     let classes = $(player).attr('class');
    //     let videoPlayer = document.createElement('div'); 
    //     videoPlayer.classList.add('video-player')
    //     if (classes != null)
    //         videoPlayer.classList.add(classes.split(' '));
    //     videoPlayer.id = id;
    //     let video = document.createElement('video');
    //     video.src = src;
    //     if (poster != null)
    //         video.poster = poster;

    //     let controls = document.createElement('div');
    //     controls.classList.add('controls');

    //     let progress = document.createElement('div')
    //     progress.classList.add('progress');

    //     let preview = document.createElement('span');
    //     preview.classList.add('preview');

    //     let track = document.createElement('span');
    //     track.classList.add('track');

    //     let hover = document.createElement('span');
    //     hover.classList.add('hover');

    //     progress.appendChild(preview)
    //     progress.appendChild(track)
    //     progress.appendChild(hover)

    //     let buttons = document.createElement('div');
    //     buttons.classList.add('row', 'control-buttons');

    //     let playBtn = document.createElement('i');
    //     playBtn.classList.add('play');
    //     playBtn.title = "play/pause";

    //     let timestamp = document.createElement('p');
    //     timestamp.classList.add('4', 'video-track-timestamp');

    //     let current = document.createElement('span');
    //     current.classList.add('current-timestamp');

    //     let total = document.createElement('span');
    //     total.classList.add('total-timestamp');

    //     let volume = document.createElement('i')
    //     volume.classList.add('mute-button', 'fa-solid', 'fa-volume-up')
    //     volume.title = "mute/unmute"

    //     let fullscreen = document.createElement('i')
    //     fullscreen.classList.add('fullscreen-btn', 'fa-solid', 'fa-expand')
    //     fullscreen.title = "toggle fullscreen"

    //     let gear = document.createElement('i');
    //     gear.classList.add('options-btn', 'fa-solid', 'fa-gear');
    //     gear.title = "options";
    //     $(gear).attr('tabindex', 0)

    //     let optionsBody = document.createElement('div');
    //     optionsBody.classList.add("options-body");

    //     let speedOption = document.createElement('div');
    //     speedOption.classList.add('speed-option', 'video-option')
    //     speedOption.innerText = "Speed (normal)";
    //     speedOption.title = "change video playback speed";

    //     let qualityOption = document.createElement('div');
    //     qualityOption.classList.add('quality-option', 'video-option')
    //     qualityOption.innerText = "Quality (1080p)";
    //     qualityOption.title = "change video playback quality";

    //     optionsBody.appendChild(qualityOption)
    //     optionsBody.appendChild(speedOption)

    //     gear.appendChild(optionsBody);


    //     timestamp.appendChild(current);
    //     timestamp.append("/");
    //     timestamp.appendChild(total);

    //     buttons.appendChild(playBtn);
    //     buttons.appendChild(volume);
    //     buttons.appendChild(timestamp);

    //     controls.appendChild(progress);
    //     controls.appendChild(buttons);
    //     if (allowOptions)
    //         controls.appendChild(gear);

    //     if (allowFullscreen)
    //         controls.appendChild(fullscreen);

    //     videoPlayer.appendChild(video);
    //     videoPlayer.appendChild(controls);

    //     player.outerHTML = videoPlayer.outerHTML;
    //     player = $(`#${id}`)[0];
    //     $(player).attr("allowfullscreen", allowFullscreen)
    //     $(player).attr("repeat", loop)
    //     $(player).attr("tabindex", 0)
    //     $(player).attr("allowedspeeds", allowedSpeeds.join(";"))


    // })
    // Array.from($(".video-player")).forEach(player => {

    //     let timeout = null;
    //     let video = $(player).find("video")[0];
    //     if (video.paused) {
    //         show();
    //     }
    //     let playBtn = $(player).find(".play")[0]
    //     let fullscreen = $(player).find(".fullscreen-btn")[0]
    //     let muteButton = $(player).find(".mute-button")[0]
    //     let timer = setInterval(() => update(), 100)
    //     let preview = $(player).find(".preview")[0];
    //     let dragging = false;
    //     preview.style.display = "none"

    //     function toggleFullscreen() {
    //         if (document.fullscreen)
    //             document.exitFullscreen();
    //         else
    //             player.requestFullscreen();
    //     }
    //     function togglePlay() {
    //         if (video.paused) {
    //             play()
    //         } else {
    //             pause();
    //             update();
    //         }
    //     }
    //     function play() {
    //         video.play();
    //         playBtn.classList.add('pause')
    //         playBtn.classList.remove('play')
    //         timer = setInterval(() => update(), 100)
    //         timeout = setInterval(() => {
    //             hide();
    //         }, 1000)
    //     }
    //     function pause() {
    //         video.pause();
    //         playBtn.classList.add('play')
    //         playBtn.classList.remove('pause')
    //         show()
    //         clearInterval(timer);
    //         clearInterval(timeout)
    //     }
    //     function stop() {
    //         pause();
    //         video.currentTime = 0;
    //         update();
    //     }
    //     function update() {
    //         try {
    //             if (video.currentTime == video.duration) {
    //                 stop();
    //                 if (loop)
    //                     play();
    //             }
    //             let current = new Date(video.currentTime * 1000).toISOString().substr(11, 8)
    //             let duration = new Date(video.duration * 1000).toISOString().substr(11, 8)
    //             let percentage = video.currentTime / video.duration * 100;
    //             $(player).find(".current-timestamp")[0].innerText = current;
    //             $(player).find(".total-timestamp")[0].innerText = duration;
    //             if (!dragging)
    //                 $(player).find(".progress .track")[0].style.maxWidth = `${percentage}%`;

    //         } catch { }
    //     }
    //     function hide() {
    //         player.classList.remove('show')
    //     }
    //     function show() {
    //         player.classList.add('show')
    //     }
    //     function events() {
    //         let optionsBody = $(player).find('.options-body')[0]
    //         $($(player).find(".video-option.speed-option")).on('click', e => {
    //             optionsBody.innerHTML = ""
    //             let back = document.createElement('div');
    //             back.classList.add('video-option', 'back')
    //             back.innerText = "Back";
    //             $(player).attr('allowedspeeds').split(';').forEach(i => {
    //                 let ele = document.createElement('div');
    //                 ele.classList.add('video-option', `speed-option-${i}`)
    //                 ele.innerText = `${i}x`
    //                 optionsBody.appendChild(ele)

    //             })
    //             optionsBody.appendChild(back)

    //         })
    //         $(playBtn).on('click', () => togglePlay())
    //         $(video).on('click', () => togglePlay())
    //         $(video).on('dblclick', () => toggleFullscreen())
    //         $(fullscreen).on('click', () => toggleFullscreen())
    //         $(fullscreen).on('click', () => toggleFullscreen())
    //         $(muteButton).on('click', () => {
    //             video.muted = !video.muted;
    //             if (video.muted) {
    //                 muteButton.classList.add("fa-volume-mute")
    //                 muteButton.classList.remove("fa-volume-up")
    //             } else {
    //                 muteButton.classList.add("fa-volume-up")
    //                 muteButton.classList.remove("fa-volume-mute")
    //             }
    //         })
    //         $(player).contextmenu(e => {
    //             e.preventDefault();
    //         })
    //         $(player).find(".progress").on('mousedown', () => {
    //             dragging = true;
    //         })

    //         $(document).on('mouseup', e => {
    //             if (dragging) {
    //                 dragging = false;
    //                 let bound = $(player).find(".progress")[0].getBoundingClientRect();
    //                 let percentage = ((e.clientX - bound.left) / bound.width) * 100;
    //                 let seconds = (percentage * video.duration) / 100;
    //                 video.currentTime = seconds;
    //                 $(player).find(".progress .track")[0].style.transition = `unset`;
    //                 $(player).find(".progress .track")[0].style.maxWidth = `${percentage}%`;
    //                 setTimeout(() => {
    //                     $(player).find(".progress .track")[0].style.transition = ``;
    //                 }, 500)
    //             }
    //         })
    //         $(document).on('mousemove', e => {
    //             if (dragging) {
    //                 let track = $(player).find(".progress .track")[0];
    //                 let bar = $(player).find(".progress")[0];
    //                 let bound = bar.getBoundingClientRect();
    //                 let percentage = ((e.clientX - bound.left) / bound.width) * 100;

    //                 track.style.transition = `unset`;
    //                 track.style.maxWidth = `${percentage}%`;
    //                 setTimeout(() => {
    //                     track.style.transition = ``;
    //                 }, 500)

    //                 $(player).find(".progress .hover")[0].style.maxWidth = `${percentage}%`;
    //                 let seconds = (percentage * video.duration) / 100;
    //                 let time = new Date(seconds * 1000).toISOString().substr(11, 8);
    //                 preview.innerText = time;
    //                 preview.style.display = ""
    //                 preview.style.left = `calc(${percentage}% - ${(preview.getBoundingClientRect().width / 2)}px)`
    //             }
    //         })
    //         $(player).on('keydown', e => {
    //             e.preventDefault();
    //             switch (e.key) {
    //                 case " ":
    //                     togglePlay();
    //                     break;
    //                 case "f":
    //                     toggleFullscreen();
    //                     break;
    //                 case "m":
    //                     video.muted = !video.muted;
    //                     if (video.muted) {
    //                         muteButton.classList.add("fa-volume-mute")
    //                         muteButton.classList.remove("fa-volume-up")
    //                     } else {
    //                         muteButton.classList.add("fa-volume-up")
    //                         muteButton.classList.remove("fa-volume-mute")
    //                     }
    //                     break;
    //                 case "ArrowRight":
    //                     if (video.currentTime <= video.duration - 10) {
    //                         video.currentTime += 10;
    //                     } else {
    //                         stop();
    //                     }
    //                     update();
    //                     break;
    //                 case "ArrowLeft":
    //                     if (video.currentTime >= 10) {
    //                         video.currentTime -= 10;
    //                     } else {
    //                         video.currentTime = 0;
    //                     }
    //                     update();
    //                     break;
    //                 case "ArrowDown":
    //                     if (video.volume >= .10) {
    //                         video.volume -= .10;
    //                     } else {
    //                         video.mute = true;
    //                         muteButton.classList.add("fa-volume-mute")
    //                         muteButton.classList.remove("fa-volume-up")
    //                     }
    //                     console.log(video.volume)
    //                     update();
    //                     break;
    //                 case "ArrowUp":
    //                     video.mute = false;
    //                     if (video.volume <= .90) {
    //                         video.volume += .10;
    //                     } else {
    //                         video.volume = 1;
    //                     }
    //                     console.log(video.volume)
    //                     muteButton.classList.add("fa-volume-up")
    //                     muteButton.classList.remove("fa-volume-mute")
    //                     update();
    //                     break;
    //                 default:
    //                     break;
    //             }
    //         })

    //         $(player).find(".progress").on('mouseleave', () => {
    //             preview.style.display = "none"
    //             $(player).find(".progress .hover")[0].style.maxWidth = `0%`;
    //         })

    //         $(video).on("mousemove", () => {
    //             if (!video.paused) {
    //                 show();
    //                 if (timeout != null) {
    //                     clearInterval(timeout)
    //                 }
    //                 timeout = setInterval(() => {
    //                     if (!video.paused)
    //                         hide();
    //                 }, 3000)
    //             }
    //         })

    //         $(player).on("mouseleave", () => {
    //             if (!video.paused)
    //                 hide();
    //             if (timeout != null) {
    //                 clearInterval(timeout)
    //             }
    //         })

    //     }


    //     update();
    //     events();
    // })
    Array.from($("video-player")).forEach(element => {
        let player = new VideoPlayer({
            allowAudioModulation: $(element).attr('allowAudioModulation') != null,
            allowFullscreen: $(element).attr('allowFullscreen') != null,
            allowSeek: $(element).attr('allowSeek') != null,
            loop: $(element).attr('loop') != null,
            allowKeyboardShortcuts: $(element).attr('allowKeyboardShortcuts') != null,
            id: element.id,
            classes: element.classList,
            poster: $(element).attr('poster'),
            header: {
                title: $(element).attr('title'),
                subtitle: $(element).attr('subtitle'),
                date: new Date(Number.parseInt($(element).attr('year')), Number.parseInt($(element).attr('month')), Number.parseInt($(element).attr('day')))
            }
        });
    })
})
class VideoPlayer {
    defaultOptions = {
        id: `player-${btoa(new Date().getTime() + "").replaceAll("==", "")}`,
        classes: [""],
        poster: "",
        allowFullscreen: true,
        allowAudioModulation: true,
        allowSeek: true,
        allowKeyboardShortcuts: true,
        loop: false,
        header: {
            title: "",
            subtitle: "",
            date: new Date()
        },
        speedOptions: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
        qualityOptions: [
            {
                src: "",
                name: "",
                width: 0,
                height: 0,
                bitrate: 0,
                default: false
            }
        ]
    }

    constructor(options = this.defaultOptions) {
        if (options.qualityOptions == null || options.qualityOptions.length == 0) {
            console.error(`Video element requires at least one quality option`)
            return;
        } else if (options.qualityOptions.length == 1) {
            this.source = options.qualityOptions[0];
        } else {
            for (let i = 0; i < options.qualityOptions.length; i++) {
                if (options.qualityOptions[i].default) {
                    this.source = options.qualityOptions[i]
                    break;
                }
            }
            if (this.source == null) {
                this.source = options.qualityOptions[0];
            }
        }
        if (options !== this.defaultOptions) {
            options.allowFullscreen = options.allowFullscreen == null ? this.defaultOptions.allowFullscreen : options.allowFullscreen;
            options.id = options.id == null ? this.defaultOptions.id : options.id;
            options.allowAudioModulation = options.allowAudioModulation == null ? this.defaultOptions.allowAudioModulation : options.allowAudioModulation;
            options.allowSeek = options.allowSeek == null ? this.defaultOptions.allowSeek : options.allowSeek;
            options.loop = options.loop == null ? this.defaultOptions.loop : options.loop;
            options.speedOptions = options.speedOptions == null ? this.defaultOptions.speedOptions : options.speedOptions;

            if (options.header != null) {
                options.header.title = options.header.title == null ? this.defaultOptions.header.title : options.header.title;
                options.header.date = options.header.date == null ? this.defaultOptions.header.date : options.header.date;
            } else {
                options.header = this.defaultOptions.header
            }
            this.options = options;
        }
    }

    buildDOM() {
        /// GET SETTINGS
        let src = this.source.src;
        let id = this.options.id
        let poster = this.options.poster;

        /// BUILD PLAYER
        let videoPlayer = document.createElement('div');
        videoPlayer.classList.add('video-player')
        videoPlayer.classList.add(this.options.classes);
        videoPlayer.id = id;

        /// BUILD VIDEO ELEMENT
        let video = document.createElement('video');
        video.src = src;
        if (poster != null) {
            video.poster = poster;
        }
        /// BUILD VIDEO CONTROLS
        let controls = document.createElement('div');
        controls.classList.add('controls');

        let progress = document.createElement('div')
        progress.classList.add('progress');

        let preview = document.createElement('span');
        preview.classList.add('preview');

        let track = document.createElement('span');
        track.classList.add('track');

        let hover = document.createElement('span');
        hover.classList.add('hover');

        let buttons = document.createElement('div');
        buttons.classList.add('row', 'control-buttons');

        let playBtn = document.createElement('i');
        playBtn.classList.add('play');
        playBtn.title = "play/pause";

        let timestamp = document.createElement('p');
        timestamp.classList.add('4', 'video-track-timestamp');

        let current = document.createElement('span');
        current.classList.add('current-timestamp');

        let total = document.createElement('span');
        total.classList.add('total-timestamp');

        let volume = document.createElement('i')
        volume.classList.add('mute-button', 'fa-solid', 'fa-volume-up')
        volume.title = "mute/unmute"

        let fullscreen = document.createElement('i')
        fullscreen.classList.add('fullscreen-btn', 'fa-solid', 'fa-expand')
        fullscreen.title = "toggle fullscreen"

        let gear = document.createElement('i');
        gear.classList.add('options-btn', 'fa-solid', 'fa-gear');
        gear.title = "options";
        $(gear).attr('tabindex', 0)

        let optionsBody = document.createElement('div');
        optionsBody.classList.add("options-body");

        let speedOption = document.createElement('div');
        speedOption.classList.add('speed-option', 'video-option')
        speedOption.innerText = "Speed (normal)";
        speedOption.title = "change video playback speed";

        let qualityOption = document.createElement('div');
        qualityOption.classList.add('quality-option', 'video-option')
        qualityOption.innerText = "Quality (1080p)";
        qualityOption.title = "change video playback quality";


        /// COMBINE ELEMENTS
        optionsBody.appendChild(qualityOption)
        optionsBody.appendChild(speedOption)

        gear.appendChild(optionsBody);

        progress.appendChild(preview)
        progress.appendChild(track)
        progress.appendChild(hover)

        timestamp.appendChild(current);
        timestamp.append("/");
        timestamp.appendChild(total);

        buttons.appendChild(playBtn);

        if (this.options.allowAudioModulation)
            buttons.appendChild(volume);

        buttons.appendChild(timestamp);

        controls.appendChild(progress);
        controls.appendChild(buttons);


        if (this.options.qualityOptions.length > 1 && this.options.speedOptions != [])
            controls.appendChild(gear);

        if (this.options.allowFullscreen)
            controls.appendChild(fullscreen);

        videoPlayer.appendChild(video);
        videoPlayer.appendChild(controls);
        videoPlayer.setAttribute("tabindex", "0");
        this.player = videoPlayer;

    }

    buildOptions() { }
    buildSpeedOptions() { }
    buildResolutionOptions() { }
    buildEventListeners() { }

}